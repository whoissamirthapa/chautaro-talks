import React, { useEffect } from "react";
import classes from "./DetailTalk.module.css";

const IndvDetailTalkHere = ({ message, me }) => {
    const [date, setDate] = React.useState({
        year: 0,
        month: 0,
        week: 0,
        day: 0,
        hour: 0,
        minute: 0,
    });

    useEffect(() => {
        if (message?.createdAt) {
            const newDate = new Date(message?.createdAt);
            const currentDate = new Date();
            const diff = currentDate.getTime() - newDate.getTime();
            const diffYear = Math.floor(diff / (1000 * 3600 * 24 * 365));
            const diffMonth = Math.floor(diff / (1000 * 3600 * 24 * 30));
            const diffWeek = Math.floor(diff / (1000 * 3600 * 24 * 7));
            const diffDays = Math.floor(diff / (1000 * 3600 * 24));
            const diffHours = Math.floor(diff / (1000 * 3600));
            const diffMinutes = Math.floor(diff / (1000 * 60));
            const diffSeconds = Math.floor(diff / 1000);

            if (diffYear > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffMonth > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffWeek > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffDays > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffHours > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffMinutes > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            } else if (diffSeconds > 0) {
                setDate({
                    year: diffYear,
                    month: diffMonth,
                    week: diffWeek,
                    day: diffDays,
                    hour: diffHours,
                    minute: diffMinutes,
                    second: diffSeconds,
                });
            }
        }
    }, [message]);
    return (
        <>
            <div
                className={
                    message?.sendBy?.toString() !== me?._id
                        ? classes.there__message
                        : classes.here__message
                }
            >
                <p>{message?.message}</p>
                <span className={classes.more_info_message}>
                    {
                        <span>
                            {date?.year > 0
                                ? `${date?.year} y`
                                : date?.month > 0 && date?.month < 12
                                ? `${date?.month} m`
                                : date?.week > 0 && date?.week < 4
                                ? `${date?.week} w`
                                : date?.day > 0 && date?.day < 30
                                ? `${date?.day} d`
                                : date?.hour > 0 && date?.hour < 24
                                ? `${date?.hour} h`
                                : date?.minute > 0 && date?.minute < 60
                                ? `${date?.minute} m`
                                : date?.second > 0 && date?.second < 60
                                ? `${date?.second} s`
                                : "now"}
                        </span>
                    }{" "}
                    ago
                    {/* -Jan 10, 2021 08:50AM */}
                </span>
            </div>
        </>
    );
};

export default IndvDetailTalkHere;
