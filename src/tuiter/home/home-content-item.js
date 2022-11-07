import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TuitItem from "../tuits/TuitsList";


const HomeContentItem = (
    {
        content = { _id: 123, avatarIcon: "spacex.png",handle: "spacex", userName: "SpaceX",
            title: "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon.",
            time: "23h",   image: "danda.jpg" ,comment: 595, retweet:  1168, like: "11.1k" }
    }
) => {
    return(
        <TuitItem/>
    );
};
export default HomeContentItem;