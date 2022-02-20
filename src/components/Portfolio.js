//Renders the images
import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import ImageList from "./Projects";

function Portfolio(props) {
    const { imageName = {} } = props;
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <h1 id="portfolio">My Work</h1>
                    <ImageList name={imageName.name} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Portfolio;