import React, { useState } from "react";
import Tabs from './Tabs';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

function Header() {
    //Sets 'currentPage' to an initial value of 'About'
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <div>
                <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
                <div>{renderPage(currentPage)}</div>
            </div>
        </div>
    );
}

export default Header;