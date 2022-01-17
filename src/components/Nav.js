//Controls the functionality or how to access each tab(Home, About, etc.)
import React from 'react';

function NavBar(props) {
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];    
    return (
        <div>
            <ul id="nav-bar" className="nav navbar">
                {tabs.map(currentTab => (
                    <li key={currentTab} >
                        <a
                            href={'#' + currentTab.toLowerCase()}
                            onClick={() => props.handlePageChange(currentTab)}
                            className={

                                props.currentPage === currentTab ? `nav-link active text-success` : 'nav-link'
                            }
                        >
                            {currentTab}
                        </a>
                    </li>
                ))
                }
            </ul >
        </div>
    );
}

export default NavBar;