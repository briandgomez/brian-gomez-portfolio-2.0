//Controls the functionality or how to access each tab(Home, About, etc.)
import React from 'react';
import { motion } from 'framer-motion';

function NavBar(props) {
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];
    return (
        <div>
            <ul id="nav-bar" className="nav navbar">
                {tabs.map(currentTab => (
                    <li key={currentTab} >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ borderRadius: '30px', background: 'white'}}
                        >
                            <a
                                href={'#' + currentTab.toLowerCase()}
                                onClick={() => props.handlePageChange(currentTab)}
                                className={

                                    props.currentPage === currentTab ? `nav-link active text-success` : 'nav-link'
                                }
                            >
                                {currentTab}
                            </a>
                        </motion.button>
                    </li>
                ))
                }
            </ul >
        </div>
    );
}

export default NavBar;