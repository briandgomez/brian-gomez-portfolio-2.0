import React from "react";

function About() {
    return (
        <section>
            <h1 style={{ display: 'flex', justifyContent: 'center', padding: '35px' }}>About Me</h1>
            <div style={{ display: 'flex', margin: '0px 70px' }}>
                <img
                    src={require('./engineer.jpg')}
                    width='400'
                    height='400'
                    style={{
                        border: '5px solid black',
                        borderRadius: 300
                    }}
                />
                <p style={{
                    textAlign: 'center',
                    margin: '0px 50px',
                    border: '5px solid',
                    padding: '105px 30px',
                    borderRadius: '30px'
                }}>
                    I am a recent Rutgers University graduate with a Bachelors in Mechanical Engineering and a certificate in Energy.
                    I am currently in the Rutgers Coding Bootcamp where I am learning technical skills and how to create web applications using the latest technologies.
                    Proficient in the following: HTML, CSS, Javascript, Bootstrap, Github, and OOP. More than willing to learn new technologies and skills while on the job.
                    Feel free to contact me with any questions.
                </p>
            </div>
        </section >
    )
}

export default About;