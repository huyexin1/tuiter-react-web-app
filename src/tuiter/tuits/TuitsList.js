import React from "react";
import TuitItem from "./TuitItem";
import TuitStats from "./TuitStats";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitItem key={post._id} post={post}>
                        <TuitStats key={post._id} post={post}/>
                    </TuitItem>
                )
            }
        </ul>
    );
};
export default TuitsList;