import React, { useRef, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import AuthorizedHomeBase from '../../../components/AuthorizedHomeBase/AuthorizedHomeBase';

import classes from './DetailTalk.module.css';

function DetailTalk() {

    const [myMessage, setMyMessage] = useState([]);

    const messageRef = useRef();

    let { id } = useParams()
    const history = useHistory();

    const handleSubmit = e =>{
        e.preventDefault();
        const message = messageRef.current.value.trim();
        if(message.length <= 0){
            return;
        }
        setMyMessage(prevState=>{
            return [ ...prevState, message]
        });
        
        console.log(message);
    }

    return (
        <AuthorizedHomeBase>
            <div>
                <button onClick={()=>history.goBack()}>GO back</button>

            </div>

            <div className={classes.detail_talk_container}>
                <header className={classes.sent_name_detail_talk}> 
                    <div className={classes.detail_talk_img}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt={`user${id}`} />
                    </div>
                    <div className={classes.detail_talk_name}>
                        <p>John Doe</p>
                    </div>
                </header>

                {/*----------------- Message container ------------------*/}
                <section className={classes.detail__message}>
                    <div className={classes.here__message}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                            </p>
                        <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                        </div>
                    <div className={classes.there__message}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolorum ad. Eius dolorem cupiditate accusantium. Et illo explicabo quae quaerat.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>    
                        </div>
                    <div className={classes.here__message}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odit iste dicta fugiat nihil quis quam atque omnis distinctio enim.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                        </div>
                    <div className={classes.there__message}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolorum ad. Eius dolorem cupiditate accusantium. Et illo explicabo quae quaerat.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>    
                        </div>
                    <div className={classes.here__message}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odit iste dicta fugiat nihil quis quam atque omnis distinctio enim.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                        </div>
                    <div className={classes.there__message}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolorum ad. Eius dolorem cupiditate accusantium. Et illo explicabo quae quaerat.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>    
                        </div>
                    <div className={classes.here__message}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odit iste dicta fugiat nihil quis quam atque omnis distinctio enim.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                        </div>
                    <div className={classes.there__message}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolorum ad. Eius dolorem cupiditate accusantium. Et illo explicabo quae quaerat.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>    
                        </div>
                    <div className={classes.here__message}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odit iste dicta fugiat nihil quis quam atque omnis distinctio enim.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                        </div>
                    <div className={classes.there__message}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolorum ad. Eius dolorem cupiditate accusantium. Et illo explicabo quae quaerat.
                            </p>
                            <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>    
                        </div>
                    
                    {
                        myMessage.map((message, index) =>(
                                <div className={classes.here__message} key={index}>
                                    <p>
                                    {message}
                                    </p>
                                    <span className={classes.more_info_message}>-Jan 10, 2021 08:50AM</span>
                                </div>
                        
                        ))
                    }

                </section>
                <div className={classes.input__message}>
                        <form onSubmit={handleSubmit}>
                            <textarea name="message" rows="3" placeholder="Your message..." ref={messageRef}>
                            </textarea>
                            <button><i className="fas fa-paper-plane"></i> Send</button>
                        </form>
                    </div>
                
            </div>
        </AuthorizedHomeBase>
        
    )
}

export default DetailTalk
