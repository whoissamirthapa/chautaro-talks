import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../config.axios";
import socket from "../../../config/socketconnection";
import classes from "./MeetRoom.module.css";
import imga from "../../../assets/teemavatar.png";
import AuthorizedHomeBase from "../../../components/AuthorizedHomeBase/AuthorizedHomeBase";
import MessageContainer from "../../../components/utils";

function MeetRoom() {
    const history = useHistory();
    let { roomId } = useParams();
    const messageRef = useRef();

    const [myMessage, setMyMessage] = useState([]);
    const [infoGroup, setInfoGroup] = useState({});
    const [me, setMe] = useState({});
    const [loadingSend, setLoadingSend] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = messageRef.current.value.trim();
        if (message.length <= 0) {
            return;
        }
        setLoadingSend(true);
        api.post(`/chautaro-group-talk/create/msg/${roomId}`, {
            message,
        }).then((res) => {
            if (res.data.success) {
                socket.emit("new message", {
                    message: res.data.data,
                    id: roomId,
                });
                setMyMessage((prev) => {
                    return [...prev, res.data.data];
                });
                messageRef.current.value = "";
            } else {
                console.log(res.data);
            }
        });
        setLoadingSend(false);
    };

    useEffect(() => {
        async function fetchingRoomMsg() {
            const user = JSON.parse(localStorage.getItem("chautaroUser"));
            if (roomId) {
                try {
                    const res = await api.post(
                        `/chautaro-group-talk/get/${roomId}`,
                        {
                            userId: user._id,
                        }
                    );

                    if (res.data.success) {
                        // console.log(res.data.data);
                        setMyMessage((prev) => {
                            return [...prev, ...res.data.data.messages];
                        });
                        setInfoGroup((prev) => {
                            return {
                                ...prev,
                                createdBy: res.data.data.createdBy,
                                members: res.data.data.members,
                                description: res.data.data.description,
                                createdAt: res.data.data.createdAt,
                                name: res.data.data.name,
                            };
                        });
                        socket.emit("talk-start", { id: roomId });
                    } else {
                        console.log(res.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchingRoomMsg();
    }, [roomId]);

    useEffect(() => {
        socket.on("recieved message", (data) => {
            // console.log("recieved message", data);
            setMyMessage((prevState) => {
                return [...prevState, data];
            });
        });
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("chautaroUser"));
        setMe({ ...user });
        socket.emit("setup", user);
    }, []);

    return (
        <AuthorizedHomeBase>
            <div>
                <button
                    onClick={() => history.goBack()}
                    className={classes.back_btn}
                >
                    <span>&crarr;</span>Back
                </button>
            </div>

            <div className={classes.detail_talk_container}>
                <header className={classes.sent_name_detail_talk}>
                    <div className={classes.detail_talk_img}>
                        <img src={imga} alt={`user${roomId}`} />
                    </div>
                    <div className={classes.detail_talk_name}>
                        <p>{infoGroup?.name}</p>
                    </div>
                </header>

                {/*----------------- Message container ------------------*/}
                <MessageContainer myMessage={myMessage} me={me} room={true} />

                <div className={classes.input__message}>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Your message..."
                            ref={messageRef}
                        ></textarea>
                        <button disabled={loadingSend}>
                            <i className="fas fa-paper-plane"></i>{" "}
                            {loadingSend ? "Send" : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthorizedHomeBase>
    );
}

export default MeetRoom;
