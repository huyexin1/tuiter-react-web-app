import React from "react";
const PostSummaryItem = (
    {
        post = { _id: 123, topic: "Space", userName: "SpaceX",
            title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            time: "2h",   image: "tesla.jpg" }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-8">
                    <div className="text-secondary">{post.userName} - {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-4">
                    <img src={`/images/${post.image}`} className="float-end rounded"  height="100px"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;