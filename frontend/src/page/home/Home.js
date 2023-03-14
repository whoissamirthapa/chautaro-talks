import React from "react";

import classes from "./Home.module.css";
import HomeBase from "../../components/HomeBase/HomeBase";
import differs from "../../assets/differs.svg";
import registration from "../../assets/home_registration.svg";
import { Link } from "react-router-dom";
import TeemImg from "../../assets/teemavatar.png";
import ImgAvatar from "../../assets/img_avatar.png";
function Home() {
    return (
        <HomeBase>
            <header className={classes.home_header}>
                <span className={classes.heading___}>
                    चौतारो <span>Talks</span>{" "}
                </span>
            </header>
            <section className={classes.description__home}>
                <section className={classes.description__first_link}>
                    <article className={classes.indv_home_item}>
                        <header className={classes.indv_home_item_header}>
                            <div>
                                <div
                                    className={classes.indv_img_home_first_item}
                                >
                                    <span className={classes.heading____}>
                                        चौतारो <span>Talks</span>{" "}
                                    </span>
                                </div>
                                <h1>What is this?</h1>
                            </div>
                        </header>
                        <p>
                            This is a simple web app that allows you to chat
                            with the registered friends. You can create a group,
                            and talk with your friends and see all the messages
                            in real time.
                        </p>
                    </article>
                    <article className={classes.indv_home_item}>
                        <header className={classes.indv_home_item_header}>
                            <div>
                                <div
                                    className={classes.indv_img_home_first_item}
                                >
                                    <img src={`${differs}`} alt="chat" />
                                </div>
                                <h1>How differs it?</h1>
                            </div>
                        </header>
                        <p>
                            This is a simple web app that allows you to chat
                            with the registered friends. You can create a group,
                            and talk with your friends and see all the messages
                            in real time.
                        </p>
                    </article>
                    <article className={classes.indv_home_item}>
                        <header className={classes.indv_home_item_header}>
                            <div>
                                <div
                                    className={classes.indv_img_home_first_item}
                                >
                                    <img
                                        src={`${registration}`}
                                        alt="registration chautaro talks"
                                    />
                                </div>
                                <h1>Register now?</h1>
                            </div>
                        </header>
                        <p>
                            This is a simple web app that allows you to chat
                            with the registered friends. You can create a group,
                            and talk with your friends and see all the messages
                            in real time.
                        </p>
                    </article>
                </section>
                <section className={classes.description__second_link}>
                    <header>
                        <h1>What do you want to do?</h1>
                    </header>
                    <section>
                        <article className={classes.indv_home_select_item}>
                            <header
                                className={classes.indv_home_select_item_header}
                            >
                                <div>
                                    <div
                                        className={
                                            classes.indv_home_item_fasd_img
                                        }
                                    >
                                        <img
                                            src={`${ImgAvatar}`}
                                            alt="registration chautaro talks"
                                        />
                                    </div>
                                    <h1>Private Talk</h1>
                                </div>
                            </header>
                            <section
                                className={classes.indv_home_item_navigation}
                            >
                                <Link to={"/talks"}>Navigate to Chat</Link>
                            </section>
                        </article>
                        <article className={classes.indv_home_select_item}>
                            <header
                                className={classes.indv_home_select_item_header}
                            >
                                <div>
                                    <div
                                        className={
                                            classes.indv_home_item_fasd_img
                                        }
                                    >
                                        <img
                                            src={`${TeemImg}`}
                                            alt="registration chautaro talks"
                                        />
                                    </div>
                                    <h1>Group Talk</h1>
                                </div>
                            </header>
                            <section
                                className={classes.indv_home_item_navigation}
                            >
                                <Link to={"/chautaro-meet"}>
                                    Navigate to Chat
                                </Link>
                            </section>
                        </article>
                    </section>
                </section>
            </section>
        </HomeBase>
    );
}

export default Home;
