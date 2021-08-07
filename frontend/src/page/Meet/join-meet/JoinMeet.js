import React from 'react';
import { Link } from 'react-router-dom';

import classes from './JoinMeet.module.css';
import AuthorizedHomeBase from '../../../components/AuthorizedHomeBase/AuthorizedHomeBase';

const array = [
    {
        id:1,
        name: "First Group"
    },
    {
        id:2,
        name: "Second Group"
    },
    {
        id:3,
        name: "Third Group"
    },
    {
        id:4,
        name: "Fourth Group"
    }
]
function JoinMeet() {

    
    return (
        <AuthorizedHomeBase>
            
            <div className={classes.individual_group_container}>

            <header className={classes.header__talks}>
                <h5>Join Group Here</h5>
            </header>
            {
                array.map(item => (
                    <section className={classes.list_group_home} key={item.id}>
                        <article className={classes.name_group_talk}>
                            <div className={classes.title_group_talk}>
                                {item.name}
                            </div>
                            <div className={classes.btn_group_talk}>
                                <Link to={`/chautaro-meet/meet-room/${item.id}`}>
                                    <button>Join</button>
                                </Link>
                            </div>
                        </article>
                    </section>
                ))
            }

            </div>
        </AuthorizedHomeBase>
    )
}

export default JoinMeet;
