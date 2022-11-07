import React from "react";
import HomeContentItem from "./home-content-item";
import {useSelector} from "react-redux";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;