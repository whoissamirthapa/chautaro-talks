import React from "react";
import HomeBase from "../../components/HomeBase/HomeBase";
import classes from "./About.module.css";
import whatIsImg from "../../assets/chat.svg";
import whatIsImg_group from "../../assets/group_chat.svg";

function About() {
    return (
        <HomeBase>
            <header className={classes.header_about}>
                <span className={classes.heading___}>About</span>
            </header>
            <section className={classes.container_about}>
                <article className={classes.indv_section_about}>
                    <section className={classes.left_}>
                        <div className={classes.about_img}>
                            <img src={`${whatIsImg}`} alt="" />
                        </div>
                    </section>
                    <section className={classes.left_}>
                        <h1>What is this?</h1>
                        <p>
                            This is a simple web app that allows you to chat
                            with the registered friends. You can create a group,
                            and talk with your friends and see all the messages
                            in real time.
                        </p>
                    </section>
                </article>
                <article
                    className={`${classes.indv_section_about} ${classes.indv_section_about_bottom}`}
                >
                    <section className={classes.left_}>
                        <h1>
                            What gives you the better experience than other?
                        </h1>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed euismod, nisl vel tincidunt lacinia, nisl
                            nisl aliquam nisl, eu aliquam nisl nisl eu ante.
                            Nullam euismod, nisl vel tincidunt lacinia, nisl
                        </p>
                    </section>
                    <section className={classes.left_}>
                        <div className={classes.about_img}>
                            <img src={`${whatIsImg_group}`} alt="" />
                        </div>
                    </section>
                </article>
            </section>
        </HomeBase>
    );
}

export default About;
