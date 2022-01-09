//Controls the functionality or how to access each tab(Home, About, etc.)
import React from 'react';

function Tabs(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
    return (
        <ul className="nav navbar">
            {tabs.map(currentTab => (
                <li className="navbar-dark" key={currentTab} >
                    <a
                        href={'#' + currentTab.toLowerCase()}
                        onClick={() => props.handlePageChange(currentTab)}
                        className={
                            props.currentPage === currentTab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {currentTab}
                    </a>
                </li>
            ))
            }
        </ul >
    );
}

export default Tabs;