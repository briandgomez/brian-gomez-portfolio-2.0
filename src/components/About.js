import React from "react";
import { AnimatePresence, motion } from 'framer-motion'

import '../style.css'

function About() {
    return (
        <section>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <h1 id="about">About Me</h1>
                    <div id="graphics">
                        <img
                            id="software"
                            src={require('../images/profile.jpg')}
                            width='400'
                            height='400'
                            alt="Description about myself"
                        />
                        <p id="bio">
                            Hi my name is Brian Gomez. I am a recent coding bootcamp and Rutgers University graduate.
                            I enjoy using Javascript, React, GraphQL and other technologies to create creative applications.
                            My goal is to continue to learn new skills in both back-end and front-end to improve the quality of my applications.
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    )
}

export default About;