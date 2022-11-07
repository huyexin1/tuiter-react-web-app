import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart, faRetweet, faShare} from "@fortawesome/free-solid-svg-icons";

const TuitStats = (
    {
        // post = {
        //     _id: 34,
        //     topic: "Tesla",
        //     userName: "Tesla",
        //     time: "2h",
        //     title: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver.",
        //     image: "tesla.jpg",
        //     liked: true,
        //     replies: 13,
        //     retuits: 432,
        //     likes: 2345,
        //     handle: "@tesla",
        //     tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        // }
        liked= true,
        replies = 13,
        retuits= 432,
        likes = 2345,

    }
) => {
    return(
        <div className="row">
            <div className="col-3">
                <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>{replies}</div>
            <div className="col-3">
                <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>{retuits}
            </div>
            <div className="col-3">
                <FontAwesomeIcon className={`wd-right-margin ${liked === true ? 'text-danger' : ''}`} icon={faHeart}></FontAwesomeIcon>{likes}
            </div>
            <div className="col-3"><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></div>
        </div>
    );
};

export default TuitStats;