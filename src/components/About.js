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
                            src={require('./engineer.jpg')}
                            width='400'
                            height='400'
                            alt="Description about myself"
                        />
                        <p id="bio">
                            I am a recent Rutgers University graduate with a Bachelors in Mechanical Engineering and a certificate in Energy.
                            I am currently in the Rutgers Coding Bootcamp where I am learning technical skills and how to create web applications using the latest technologies.
                            Proficient in the following: HTML, CSS, Javascript, Bootstrap, Github, and OOP. More than willing to learn new technologies and skills while on the job.
                            Feel free to contact me with any questions.
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    )
}

export default About;