import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AuthorizedHomeBase from "../../../components/AuthorizedHomeBase/AuthorizedHomeBase";
import classes from "./DetailTalk.module.css";
import socket from "../../../config/socketconnection";
import api from "../../../config.axios";
import MessageContainer from "../../../components/utils";
import ImgAvater from "../../../assets/img_avatar.png";

function DetailTalk() {
    const [me, setMe] = useState({});
    const [myMessage, setMyMessage] = useState([]);
    const [loadingSend, setLoadingSend] = useState(false);
    const messageRef = useRef(null);
    const detailMessageContainerRef = useRef(null);
    let { id } = useParams();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = messageRef.current.value.trim();
        if (e.key === "Enter" || e.type === "submit") {
            if (message.length <= 0) {
                return;
            }
            setLoadingSend(true);
            const res = await api.post(`/talk/start/${id}`, {
                message,
                sendTo: history.location?.state?.state?.item?._id,
            });

            if (!res.data?.success) {
                return;
            }
            messageRef.current.value = "";
            socket.emit("new message", {
                message: res.data.data,
                id: id,
            });
            setMyMessage((prevState) => {
                return [...prevState, res.data.data];
            });
            setLoadingSend(false);
        }
    };

    useEffect(() => {
        socket.on("recieved message", (data) => {
            // console.log("recieved message", data);
            setMyMessage((prevState) => {
                return [...prevState, data];
            });
        });
    }, []);

    useEffect(() => {
        if (id) {
            api.get(`/talk/getTalk/${id}`).then((res) => {
                if (res.data?.success) {
                    // console.log(res.data.data);
                    setMyMessage([...res.data.data?.messages]);
                    socket.emit("talk-start", { id });
                }
            });
        }
    }, [id]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("chautaroUser"));
        setMe({ ...user });
        socket.emit("setup", user);
    }, []);

    useEffect(() => {
        if (detailMessageContainerRef.current) {
            detailMessageContainerRef.current.scrollTop =
                detailMessageContainerRef.current.scrollHeight;
        }
    }, [myMessage]);

    return (
        <AuthorizedHomeBase>
            <div>
                <button
                    onClick={() => history.goBack()}
                    className={classes.back_btn}
                >
                    <span>&crarr;</span>
                    Back
                </button>
            </div>

            <div className={classes.detail_talk_container}>
                <header className={classes.sent_name_detail_talk}>
                    <div className={classes.detail_talk_img}>
                        <img src={`${ImgAvater}`} alt={`user${id}`} />
                    </div>
                    <div className={classes.detail_talk_name}>
                        <p>{history.location?.state?.state?.item?.name}</p>
                    </div>
                </header>

                {/*----------------- Message container ------------------*/}
                <MessageContainer myMessage={myMessage} me={me} room={false} />
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

export default DetailTalk;

{
    /* <div className={classes.here__message}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis
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
                    </div> */
}
