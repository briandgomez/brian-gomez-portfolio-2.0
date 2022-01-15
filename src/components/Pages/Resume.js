import React from 'react';
import PDF from './Brian-Gomez-Resume.pdf';

function Resume() {
    return (
        <p style={{ display: 'flex', justifyContent: 'center', padding: '35px' }}>
            <a href={PDF} download={'Brian Gomez Resume'}>Download Resume</a>
        </p>
    )
}

export default Resume;
