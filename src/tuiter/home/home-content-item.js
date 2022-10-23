import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const HomeContentItem = (
    {
        content = { _id: 123, avatarIcon: "spacex.png",handle: "spacex", userName: "SpaceX",
            title: "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon.",
            time: "23h",   image: "danda.jpg" ,comment: 595, retweet:  1168, like: "11.1k" }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${content.avatarIcon}`} className="rounded-circle" height={48} />
                </div>
                <div className="col-10">
                    <div className="fw-bolder">{content.userName}</div>
                    <div className="float-left text-secondary">@{content.handle} - {content.time}</div>
                    <div>{content.title}</div>
                    <div className="rounded"><img src={`/images/${content.image}`} className="rounded" width={400}/></div>
                    <div className="row">
                        <div className="col-3">
                            <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>{content.comment}</div>
                        <div className="col-3"><FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>{content.retweet}</div>
                        <div className="col-3"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>{content.like}</div>
                        <div className="col-3"><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default HomeContentItem;