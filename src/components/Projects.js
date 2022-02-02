//Functionality of displaying the images
import React, { useState } from "react";

const ImageList = () => {
    const [projects] = useState([
        {
            id: 1,
            src: require('../images/recipe-generator.jpg'),
            name: 'Recipe Generator',
            github: 'https://github.com/mital2021/Recipe-Generator',
            descripiton: ' Displays and suggests recipes based on cuisine provided by the user',
            link: 'https://mital2021.github.io/Recipe-Generator/'

        },
        {
            id: 2,
            src: require('../images/review.png'),
            name: 'Entertainment Review',
            github: 'https://github.com/NeXFP/EntertainmentReviewListProject',
            descripiton: 'Creates and displays post once user is logged in',
            link: 'https://entertainmentreview.herokuapp.com/'

        },
        {
            id: 3,
            src: require('../images/my-valentine.png'),
            name: 'My Valentine',
            github: 'https://github.com/jagydas/my-valentine/blob/main/README.md',
            descripiton: "E-commerce application that sells Valentine's Day related items",
            link: 'https://my-valentine-app.herokuapp.com/'
        }
    ])
    const [photos] = useState([
        {
            id: 4,
            src: require('../images/code-quiz.PNG'),
            name: 'Code Quiz',
            github: 'https://github.com/briandgomez/C4-Code-Quiz',
            descripiton: 'Quiz for web developers to hone their basic coding skills',
            link: 'https://briandgomez.github.io/C4-Code-Quiz/'

        },
        {
            id: 5,
            src: require('../images/password-generator.PNG'),
            name: 'Password Generator',
            github: 'https://github.com/briandgomez/C3-Password-Generator',
            descripiton: 'Generates random password based on user input',
            link: 'https://briandgomez.github.io/C3-Password-Generator/'

        },
        {
            id: 6,
            src: require('../images/weather-dashboard.PNG'),
            name: 'Weather Dashboard',
            github: 'https://github.com/briandgomez/C6-Weather-Dashboard',
            descripiton: ' Displays current and 5 day forecast for any state in the U.S.',
            link: 'https://briandgomez.github.io/C6-Weather-Dashboard/'

        },
        {
            id: 7,
            src: require('../images/scheduler.png'),
            name: 'Work Day Scheduler',
            github: 'https://github.com/briandgomez/C5-Work-Day-Scheduler',
            descripiton: 'Keeps track of important tasks and how close the deadline is for that particular task',
            link: 'https://briandgomez.github.io/C5-Work-Day-Scheduler/'

        },
        {
            id: 8,
            src: require('../images/readme-generator.png'),
            name: 'README Generator',
            github: 'https://github.com/briandgomez/C7-README-Generator',
            descripiton: 'Creates a README file based on user input',
            link: 'https://watch.screencastify.com/v/lrXifzrfmRMheaR8W9fc'

        },
        {
            id: 9,
            src: require('../images/team-generator.png'),
            name: 'Team Generator',
            github: 'https://github.com/briandgomez/C10-Team-Profile-Generator',
            descripiton: 'Creates a profile for each team member and displays their important information',
            link: 'https://watch.screencastify.com/v/ffMxLKeVl6u4Tmxpvgpw'

        },
        {
            id: 10,
            src: require('../images/notetaker.png'),
            name: 'Notetaker',
            github: 'https://github.com/briandgomez/C11-Note-Taker',
            descripiton: 'Allows users to create or delete "tasks" ',
            link: 'https://briangomez-notetaker-app.herokuapp.com/'

        },
        {
            id: 11,
            src: require('../images/employee-tracker.png'),
            name: 'Employee Tracker',
            github: 'https://github.com/briandgomez/C12-Employee-Tracker/blob/main/README.md',
            descripiton: 'Keeps track of important employee and company information',
            link: 'https://watch.screencastify.com/v/XR4mod1Qu42Zus6N20qV'
        },
        {
            id: 12,
            src: require('../images/e-commerce.png'),
            name: 'E-Commerce',
            github: 'https://github.com/briandgomez/C13-E-Commerce/blob/main/README.md',
            descripiton: 'Demonstrates how the back end of a e-commerce website works',
            link: "https://watch.screencastify.com/v/YZYkv9FWklMek0hSzOPc"

        },
        {
            id: 13,
            src: require('../images/regex.png'),
            name: 'Regex',
            github: 'https://gist.github.com/briandgomez/9412c2023e0c115bc6ea1dcb2e141d46',
            descripiton: 'Explains in detail what regular expressions are using an email as an example',
            link: 'https://gist.github.com/briandgomez/9412c2023e0c115bc6ea1dcb2e141d46'

        },
        {
            id: 14,
            src: require('../images/social-api.png'),
            name: 'Social-API',
            github: "https://github.com/briandgomez/Social-API",
            descripiton: 'Demonstrates how a social network application functions',
            link: 'https://watch.screencastify.com/v/66uOcuwXyZzFlDMNqHzz',

        },
        {
            id: 15,
            src: require('../images/pwa.png'),
            name: 'Progessive Web App',
            github: "https://github.com/briandgomez/pwa-budget-tracker",
            descripiton: 'Application that is capable of tracking transactions with or without an internet connection',
            link: 'https://bg-budget-tracker.herokuapp.com/',

        }
    ]);

    return (
        <div className="row">
            {projects.map(item => (
                <div className="effect col-6 d-flex justify-content-center">
                    <div>
                        <p className="d-flex justify-content-center" />
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
                            <h2 style={{ color: 'pink' }}>{item.name}</h2>
                            <p id="description">{item.descripiton}</p>
                            <div className="effect-btn">
                                <a className="btn" href={item.github}>Repo</a>
                                <br />
                                <br />
                                <a className="btn" href={item.link}>Deployed App</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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
                            <h2 style={{ color: 'pink' }}>{item.name}</h2>
                            <p id="description">{item.descripiton}</p>
                            <div className="effect-btn">
                                <a className="btn" href={item.github}>Repo</a>
                                <br />
                                <br />
                                <a className="btn" href={item.link}>Deployed App</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageList;
