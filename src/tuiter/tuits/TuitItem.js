import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = (
    {
        post =   {
            _id: 34,
            topic: "Tesla",
            userName: "Tesla",
            time: "2h",
            title: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver.",
            image: "tesla.jpg",
            liked: true,
            replies: 135,
            retuits: 432,
            likes: 2345,
            handle: "@tesla",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${post.image}`} className="rounded-circle" height={48} />
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div className="fw-bolder">{post.userName}</div>
                    <div className="float-left text-secondary">{post.handle} - {post.time}</div>
                    <div>{post.title}</div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-3">*/}
                    {/*        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>{post.comment}</div>*/}
                    {/*    <div className="col-3">*/}
                    {/*        <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>{post.retweet}*/}
                    {/*    </div>*/}
                    {/*    <div className="col-3"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>{post.like}</div>*/}
                    {/*    <div className="col-3"><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></div>*/}
                    {/*</div>*/}
                    <TuitStats> liked={post.liked} likes={post.likes} replies={post.replies} retuits={post.retuits}
                        </TuitStats>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;