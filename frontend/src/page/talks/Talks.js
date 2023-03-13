import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../config.axios";
import classes from "./Talks.module.css";
import AuthorizedHomeBase from "../../components/AuthorizedHomeBase/AuthorizedHomeBase";
import IndvTalkHere from "./indvTalk";

const array = [
    {
        id: 1,
    },
    {
        id: 2,
    },
];
function Talks() {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        api.get("/user/all").then((res) => {
            if (res.data?.success) {
                const temp = res?.data?.data;
                setAllUsers([...temp]);
            }
        });
        api.get("/user/authenticated").then((res) => {
            if (res.data?.success) {
                // console.log(res.data.data);
                localStorage.setItem(
                    "chautaroUser",
                    JSON.stringify(res.data.data)
                );
            }
        });
    }, []);

    return (
        <AuthorizedHomeBase>
            <div className={classes.individual__talk_container}>
                <header className={classes.header__talks}>
                    <h5>People To talk</h5>
                </header>
                {allUsers?.map(
                    (item) =>
                        JSON.parse(localStorage?.getItem("chautaroUser"))
                            ?._id !== item?._id && (
                            <IndvTalkHere item={item} key={item?._id} />
                        )
                )}
                {array.map((item) => (
                    <Link to={`/detail-talk/${item.id}`} key={item.id}>
                        <section className={classes.description__home}>
                            <article className={classes.individual__talk}>
                                <div className={classes.img_individual_talk}>
                                    <img
                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                        alt={`user+${item.id}`}
                                    />
                                </div>
                                <div
                                    className={
                                        classes.description_individual_talk
                                    }
                                >
                                    <header className={classes.list_talk_name}>
                                        John Doe
                                    </header>
                                    <div
                                        className={
                                            classes.last_message_recieved
                                        }
                                    >
                                        <div className={classes.who__sent_name}>
                                            You:
                                        </div>
                                        <div
                                            className={
                                                classes.sent_or_recieve_message
                                            }
                                        >
                                            <p>How are you, John?</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Link>
                ))}
            </div>
        </AuthorizedHomeBase>
    );
}

export default Talks;
