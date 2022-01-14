//Controls the functionality or how to access each tab(Home, About, etc.)
import React from 'react';

function NavBar(props) {
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];
    return (
        <ul className="nav navbar">
            {tabs.map(currentTab => (
                <li key={currentTab} >
                    <a
                        href={'#' + currentTab.toLowerCase()}
                        onClick={() => props.handlePageChange(currentTab)}
                        className={
                            props.currentPage === currentTab ? `nav-link active bg-secondary` : 'nav-link bg-danger'
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

export default NavBar;