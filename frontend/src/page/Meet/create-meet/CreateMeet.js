import React, { useRef } from 'react'
import { useHistory, Link } from 'react-router-dom';
import AuthorizedHomeBase from '../../../components/AuthorizedHomeBase/AuthorizedHomeBase';

import classes from './CreateMeet.module.css';

function CreateChautaroMeet() {

    const history = useHistory();

    const groupNameRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        const groupName = groupNameRef.current.value.trim();

        console.log(groupName);
        
        alert(` "${groupName}" Group is Created`);

        history.push('/chautaro-meet/join-meet')


    }

    return (
        <AuthorizedHomeBase>
            <article className={classes.meet_create_parent_container}>
                <header className={classes.header_meet_create}>
                   <span>Create Your Group</span>
                </header>

                <section className={classes.meet_form_container}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="groupname">Group Name</label>
                        <input type="text" name="groupname" id="groupname" placeholder="Your group name" ref={groupNameRef} />
                        <br />
                        <button>Create</button>
                    </form> 
                    <span className={classes.join_other_group}>Want to join other Group?
                        <Link to="/chautaro-meet/join-meet">Click Here</Link>
                    </span>
                </section>
                
            </article>
        </AuthorizedHomeBase>
    )
}

export default CreateChautaroMeet
