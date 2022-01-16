import React, { useState } from "react";
import Nav from './Nav';
import About from './About';
import ContactForm from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    //Sets 'currentPage' to an initial value of 'About'
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <ContactForm />;
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
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                <div>{renderPage(currentPage)}</div>
            </div>
        </div>
    );
}

export default Header;