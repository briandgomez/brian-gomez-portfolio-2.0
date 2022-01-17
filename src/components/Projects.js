//Functionality of displaying the images
import React, { useState } from "react";

const ImageList = () => {
    const [photos] = useState([
        {
            id: 1,
            src: require('../images/notetaker.png'),
            name: 'Notetaker',
            github: 'https://github.com/briandgomez/C11-Note-Taker',
            descripiton: 'Allows users to create or delete "tasks" ',
            link: 'https://briangomez-notetaker-app.herokuapp.com/'

        },
        {
            id: 2,
            src: require('../images/regex.png'),
            name: 'Regex',
            github: 'https://gist.github.com/briandgomez/9412c2023e0c115bc6ea1dcb2e141d46',
            descripiton: 'Explains in detail what regular expressions are using an email as an example',
            link: 'https://gist.github.com/briandgomez/9412c2023e0c115bc6ea1dcb2e141d46'

        },
        {
            id: 3,
            src: require('../images/e-commerce.png'),
            name: 'E-Commerce',
            github: 'https://github.com/briandgomez/C13-E-Commerce/blob/main/README.md',
            descripiton: 'Demonstrates how the back end of a e-commerce website works',
            link: "https://watch.screencastify.com/v/YZYkv9FWklMek0hSzOPc"

        },
        {
            id: 4,
            src: require('../images/social-api.png'),
            name: 'Social-API',
            github: "https://github.com/briandgomez/Social-API",
            descripiton: 'Demonstrates how a social network application functions',
            link: 'https://watch.screencastify.com/v/66uOcuwXyZzFlDMNqHzz',

        },
        {
            id: 5,
            src: require('../images/team-generator.png'),
            name: 'Team Generator',
            github: 'https://github.com/briandgomez/C10-Team-Profile-Generator',
            descripiton: 'Creates a profile for each team member and displays their important information',
            link: 'https://watch.screencastify.com/v/ffMxLKeVl6u4Tmxpvgpw'

        },
        {
            id: 6,
            src: require('../images/employee-tracker.png'),
            name: 'Employee Tracker',
            github: 'https://github.com/briandgomez/C12-Employee-Tracker/blob/main/README.md',
            descripiton: 'Keeps track of important employee and company information',
            link: 'https://watch.screencastify.com/v/XR4mod1Qu42Zus6N20qV'
        }
    ]);

    return (
        <div className="row">
            {photos.map(item => (
                <div className="effect col-6 d-flex justify-content-center">
                    <div>
                        <p className="text-center text-uppercase font-weight-bold" />
                        <div className="effect-img">
                            <img
                                className="mb-5 rounded border border-danger"
                                key={item.id}
                                src={item.src}
                                width={'300px'}
                                height={'300px'}
                            />
                        </div>
                        <div className="effect-text">
                            <h2>{item.name}</h2>
                            <p>{item.descripiton}</p>
                            <div className="effect-btn">
                                <a className="btn" href={item.github}>Repo</a>
                                <br />
                                <br />
                                <a className="btn" href={item.link}>Deployed Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageList;
