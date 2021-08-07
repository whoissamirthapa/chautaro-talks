import React from 'react'
import { Link } from "react-router-dom";

import imga from '../../assets/teemavatar.png';
import classes from './Meet.module.css';
import AuthorizedHomeBase from '../../components/AuthorizedHomeBase/AuthorizedHomeBase';

function ChautaroMeet() {
    return (
        <AuthorizedHomeBase>
            <article className={classes.meet_front_parent_container}>
                <header className={classes.header_meet_front}>
                    <div>
                        <img src={imga} className={classes.meet__logo} alt="gasgse" />
                    </div>
                    <div className={classes.title_front_meet}>
                        <span>चौतारो ग्रुप टक</span>
                        <span>Chautaro Group Talk</span>
                    </div>
                </header>

                <section className={classes.meet_front_btn}>
                    <Link to="/chautaro-meet/create">
                        <button>Create Group</button>
                    </Link>
                    <Link to="/chautaro-meet/join-meet">
                        <button>Join Group</button>
                    </Link>
                </section>
                
            </article>
        </AuthorizedHomeBase>
    )
}

export default ChautaroMeet
