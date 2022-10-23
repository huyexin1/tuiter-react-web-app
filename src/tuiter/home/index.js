import React from "react";
import contentArray from './content.json';
import HomeContentItem from "./home-content-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                contentArray.map(content =>
                    <HomeContentItem
                        key={content._id}
                        content={content}/>
                )
            }
        </ul>
    );
};

export default HomeComponent;