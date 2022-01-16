import React from 'react';
import PDF from './Brian Gomez Resume.pdf';

function Resume() {
    return (
        <div id="skills" >
            <div className="container-skill">
                <h1>Skills</h1>
                <p>
                    <a href={PDF} download={'Brian Gomez Resume'}>Download Resume</a>
                </p>
                <h4>HTML</h4>
                <div className="container">
                    <div className="skills html">90%</div>
                </div>

                <h4>CSS</h4>
                <div className="container">
                    <div className="skills css">80%</div>
                </div>

                <h4>JavaScript</h4>
                <div className="container">
                    <div className="skills js">80%</div>
                </div>

                <h4>JQuery</h4>
                <div className="container">
                    <div className="skills jq">75%</div>
                </div>

                <h4>React.js</h4>
                <div className="container">
                    <div className="skills react" id="div1">50%</div>
                </div>

                <h4>Bootstrap</h4>
                <div className="container">
                    <div className="skills bootstrap" id="div1">85%</div>
                </div>
            </div>
            <div className="container-skill">
                <h4 id='back-end'>APIs</h4>
                <div className="container">
                    <div className="skills api">65%</div>
                </div>

                <h4>Node.js</h4>
                <div className="container">
                    <div className="skills node">70%</div>
                </div>

                <h4>Express.js</h4>
                <div className="container">
                    <div className="skills express">70%</div>
                </div>

                <h4>MySQL</h4>
                <div className="container">
                    <div className="skills mysql">70%</div>
                </div>

                <h4>GraphQL</h4>
                <div className="container">
                    <div className="skills graphql" id="div1">40%</div>
                </div>

                <h4>Sequelize</h4>
                <div className="container">
                    <div className="skills sequelize" id="div1">75%</div>
                </div>
            </div>
        </div>
    )
}

export default Resume;