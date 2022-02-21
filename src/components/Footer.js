import React from "react";
import { AnimatePresence, motion } from 'framer-motion'

function Footer() {
    return (
        <footer id="footer">
            <ul className="nav navbar">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ borderRadius: '50px', background: 'white' }}
                >
                    <li>
                        <a href="https://github.com/briandgomez"><img src="https://img.icons8.com/color/48/000000/github--v1.png" /></a>
                    </li>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ borderRadius: '50px', background: 'white' }}
                >
                    <li>
                        <a href="https://www.linkedin.com/in/brian-gomez-8a5a85211"><img src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                    </li>
                </motion.button>
            </ul>
        </footer >
    )
}

export default Footer;