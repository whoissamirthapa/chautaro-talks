import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Talks.module.css";
import api from "../../config.axios";

const IndvTalkHere = ({ item }) => {
    const router = useHistory();
    const [secretChat, setSecretChat] = useState({});
    const [loadingSecretChat, setLoadingSecretChat] = useState(false);
    const handleGetSecretChat = () => {
        setLoadingSecretChat(true);
        api.post(`/talk/create/${item?._id}`)
            .then((res) => {
                if (res.data?.success) {
                    // console.log(res.data.data);
                    setSecretChat({ ...res.data.data });
                }
            })
            .catch((err) => {
                console.log(err);
                setLoadingSecretChat(false);
            });
    };
    useEffect(() => {
        if (Object.keys(secretChat).length > 0) {
            setLoadingSecretChat(false);
            router.push(`/detail-talk/${secretChat._id}`, {
                state: { item, secretChat },
            });
        }
    }, [secretChat]);
    return (
        <>
            <Link
                to="#"
                onClick={handleGetSecretChat}
                style={
                    loadingSecretChat
                        ? { pointerEvents: "none" }
                        : { pointerEvents: "all" }
                }
            >
                <section className={classes.description__home}>
                    <article className={classes.individual__talk}>
                        <div className={classes.img_individual_talk}>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                alt={`user+${item._id}`}
                            />
                        </div>
                        <div className={classes.description_individual_talk}>
                            <header className={classes.list_talk_name}>
                                {item?.name}
                            </header>
                            <div className={classes.last_message_recieved}>
                                <div className={classes.who__sent_name}>
                                    You:
                                </div>
                                <div
                                    className={classes.sent_or_recieve_message}
                                >
                                    <p>How are you, John?</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </Link>
        </>
    );
};

export default IndvTalkHere;
