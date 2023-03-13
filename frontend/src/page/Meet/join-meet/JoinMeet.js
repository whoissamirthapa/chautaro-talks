import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../config.axios";
import classes from "./JoinMeet.module.css";
import AuthorizedHomeBase from "../../../components/AuthorizedHomeBase/AuthorizedHomeBase";

const array = [
    {
        id: 1,
        name: "First Group",
    },
    {
        id: 2,
        name: "Second Group",
    },
    {
        id: 3,
        name: "Third Group",
    },
    {
        id: 4,
        name: "Fourth Group",
    },
];
function JoinMeet() {
    const [room, setRoom] = useState([]);
    useEffect(() => {
        const fetchingMeetRoom = async () => {
            const res = await api.get("/chautaro-group-talk/get");
            if (res.data.success) {
                setRoom((prev) => {
                    return [...prev, ...res.data.data];
                });
            } else {
                console.log(res.data);
                alert("Group is not created");
            }
        };
        fetchingMeetRoom();
    }, []);
    return (
        <AuthorizedHomeBase>
            <div className={classes.individual_group_container}>
                <header className={classes.header__talks}>
                    <h5>Join Group Here</h5>
                </header>
                {room?.map((item) => (
                    <section className={classes.list_group_home} key={item._id}>
                        <article className={classes.name_group_talk}>
                            <div className={classes.title_group_talk}>
                                {item.name}
                            </div>
                            <div className={classes.btn_group_talk}>
                                <Link
                                    to={`/chautaro-meet/meet-room/${item._id}`}
                                >
                                    <button>Join</button>
                                </Link>
                            </div>
                        </article>
                    </section>
                ))}
            </div>
        </AuthorizedHomeBase>
    );
}

export default JoinMeet;
