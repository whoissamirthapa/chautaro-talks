import React from "react";
import HomeBase from "../../components/HomeBase/HomeBase";
import classes from "./HowItWork.module.css";
import HowItWork_IMG from "../../assets/how_it_works.svg";
import RegistrationImg from "../../assets/registration.svg";
import findPeopleImg from "../../assets/find_people.svg";
import StartTalk from "../../assets/start_talk.svg";

function HowItWork() {
    return (
        <HomeBase>
            <header className={classes.how_it_works_header}>
                <span className={classes.heading___}>How it works</span>
            </header>
            <section className={classes.how_it_works_container}>
                <article className={classes.indv_it_works}>
                    <section className={classes.how_it_works_img}>
                        <img src={`${RegistrationImg}`} alt="" />
                    </section>
                    <section>
                        <h1>Registration</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed euismod, nisl vel tincidunt lacinia, nisl
                            nisl aliquam nisl, eu aliquam nisl nisl eu ante.
                            Nullam euismod, nisl vel tincidunt lacinia, nisl
                        </p>
                    </section>
                </article>
                <article className={classes.indv_it_works}>
                    <section>
                        <h1>Find Person/Create Room</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed euismod, nisl vel tincidunt lacinia, nisl
                            nisl aliquam nisl, eu aliquam nisl nisl eu ante.
                            Nullam euismod, nisl vel tincidunt lacinia, nisl
                        </p>
                    </section>
                    <section className={classes.how_it_works_img}>
                        <img src={`${findPeopleImg}`} alt="" />
                    </section>
                </article>
                <article className={classes.indv_it_works}>
                    <section className={classes.how_it_works_img}>
                        <img src={`${StartTalk}`} alt="" />
                    </section>
                    <section>
                        <h1>Start To Talk</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed euismod, nisl vel tincidunt lacinia, nisl
                            nisl aliquam nisl, eu aliquam nisl nisl eu ante.
                            Nullam euismod, nisl vel tincidunt lacinia, nisl
                        </p>
                    </section>
                </article>
            </section>
        </HomeBase>
    );
}

export default HowItWork;
