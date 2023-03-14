import React, { memo, useEffect, useRef } from "react";
import IndvDetailTalkHere from "../../page/talks/detail-talk/indvDetailTalk";
import classes from "../../page/Meet/meet-room/MeetRoom.module.css";
const MessageContainer = ({ myMessage, me, room }) => {
    const groupTalkRef = useRef();

    useEffect(() => {
        groupTalkRef.current.scrollTop = groupTalkRef.current.scrollHeight;
    }, [myMessage]);

    return (
        <>
            <section className={classes.detail__message} ref={groupTalkRef}>
                <div className={classes.here__message}>
                    <p>
                        Your message will be here or in this section. Lorem
                        ipsum dolor,
                    </p>
                    <span className={classes.more_info_message}>
                        -Jan 10, 2021 08:50AM
                    </span>
                </div>
                <div className={classes.there__message}>
                    <p>
                        Message from {room ? "Others" : "Other"} will be here.
                        Enim, dolorum ad. Eillo explicabo quae quaerat.
                    </p>
                    <span className={classes.more_info_message}>
                        -Jan 10, 2021 08:50AM
                    </span>
                </div>

                {myMessage?.map((message, _index) => (
                    <IndvDetailTalkHere
                        message={message}
                        me={me}
                        key={message?._id}
                        room={room}
                    />
                ))}
            </section>
        </>
    );
};

export default memo(MessageContainer);
