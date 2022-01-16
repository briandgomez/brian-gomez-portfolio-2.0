//Renders the images
import React from "react";
import ImageList from "./Projects";

function Portfolio(props) {
    const {imageName = {}} = props;
    return (
        <div>
            <h1 id="portfolio">My Work</h1>
            <ImageList name={imageName.name}/>
        </div>
    );
}

export default Portfolio;