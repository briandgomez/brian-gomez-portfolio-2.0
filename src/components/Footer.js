import React from "react";

function Footer() {
    return (
        <footer className="footer" style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            textAlign: 'center'
        }}>
            <ul className="nav navbar">
                <li>
                    <a href="https://github.com/briandgomez"><img src="https://img.icons8.com/color/48/000000/github--v1.png" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brian-gomez-8a5a85211"><img src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/16557739/brian-gomez"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" /></a>
                </li>
            </ul>
        </footer >
    )
}

export default Footer;