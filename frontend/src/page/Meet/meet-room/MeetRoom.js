import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../config.axios";
import io from "socket.io-client";

import classes from "./MeetRoom.module.css";
import imga from "../../../assets/teemavatar.png";
import AuthorizedHomeBase from "../../../components/AuthorizedHomeBase/AuthorizedHomeBase";
import IndvDetailTalkHere from "../../talks/detail-talk/indvDetailTalk";

function MeetRoom() {
    const [myMessage, setMyMessage] = useState([]);
    const [infoGroup, setInfoGroup] = useState({});
    const [me, setMe] = useState({});
    const messageRef = useRef();
    const groupTalkRef = useRef();
    let { roomId } = useParams();

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = messageRef.current.value.trim();
        if (message.length <= 0) {
            return;
        }
        api.post(`/chautaro-group-talk/create/msg/${roomId}`, {
            message,
        }).then((res) => {
            if (res.data.success) {
                console.log(res.data.data);
                setMyMessage((prev) => {
                    return [...prev, res.data.data];
                });
            } else {
                console.log(res.data);
            }
        });
        messageRef.current.value = "";
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
        const user = JSON.parse(localStorage.getItem("chautaroUser"));
        setMe({ ...user });
        // socket.emit("setup", user);
    }, []);

    useEffect(() => {
        groupTalkRef.current.scrollTop = groupTalkRef.current.scrollHeight;
    }, [myMessage]);

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
                <section className={classes.detail__message} ref={groupTalkRef}>
                    <div className={classes.here__message}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, odit iste dicta fugiat nihil quis
                            quam atque omnis distinctio enim.
                        </p>
                        <span className={classes.more_info_message}>
                            -Jan 10, 2021 08:50AM
                        </span>
                    </div>
                    <div className={classes.there__message}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim, dolorum ad. Eius dolorem cupiditate
                            accusantium. Et illo explicabo quae quaerat.
                        </p>
                        <span className={classes.more_info_message}>
                            -Jan 10, 2021 08:50AM
                        </span>
                    </div>

                    {myMessage?.map((message, index) => (
                        <IndvDetailTalkHere
                            message={message}
                            me={me}
                            key={message?._id}
                        />
                    ))}
                </section>
                <div className={classes.input__message}>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Your message..."
                            ref={messageRef}
                        ></textarea>
                        <button>
                            <i className="fas fa-paper-plane"></i> Send
                        </button>
                    </form>
                </div>
            </div>
        </AuthorizedHomeBase>
    );
}

export default MeetRoom;
