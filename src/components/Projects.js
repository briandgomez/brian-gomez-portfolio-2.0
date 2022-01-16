//Functionality of displaying the images
import React, { useState } from "react";

const ImageList = () => {
    const [photos] = useState([
        {
            id: 1,
            src: require('../images/notetaker.png'),
            name: 'Notetaker',
            github: 'https://github.com/briandgomez/C11-Note-Taker',

        },
        {
            id: 2,
            src: require('../images/regex.png'),
            name: 'Regex',
            github: 'https://gist.github.com/briandgomez/9412c2023e0c115bc6ea1dcb2e141d46',
    
        },
        {
            id: 3,
            src: require('../images/e-commerce.png'),
            name: 'E-Commerce',
            github: 'https://github.com/briandgomez/C13-E-Commerce/blob/main/README.md'
    
        },
        {
            id: 4,
            src: require('../images/social-api.png'),
            name: 'Social-API',
            github: 'https://watch.screencastify.com/v/66uOcuwXyZzFlDMNqHzz',
    
        },
        {
            id: 5,
            src: require('../images/team-generator.png'),
            name: 'Team Generator',
            github: 'https://github.com/briandgomez/C10-Team-Profile-Generator',
    
        },
        {
            id: 6,
            src: require('../images/employee-tracker.png'),
            name: 'Employee Tracker',
            github: 'https://github.com/briandgomez/C12-Employee-Tracker/blob/main/README.md',
    
        }
    ]);

    return (
        <div className="row">
            {photos.map(item => (
                <div className="col-6 d-flex justify-content-center">
                    <div>
                        <p className="text-center text-uppercase font-weight-bold">{item.name}</p>
                        <a href={item.github}>
                        <img
                            className="mb-5 rounded border border-danger"
                            src={item.src}
                            key={item.id}
                            width={'600px'}
                            height={'300px'}
                        />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageList;
