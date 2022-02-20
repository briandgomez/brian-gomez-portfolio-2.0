import React, { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { validateEmail } from "./helpers";
import '../style.css'

function ContactForm() {
    //Initial values of name, email, & message set to ''
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //Destructure all 3 key-pair values to be empty using formState.
    //Each input field is set to an initial value of '' or emptied
    const { name, email, message } = formState
    //errorMessage = ''(initial value), setErrorMessage = x(updated value)
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if (event.target.name === 'Email') {
            //Determines if given email is valid or not
            const isValid = validateEmail(event.target.value)
            console.log(isValid);
            //Invalid email
            if (!isValid) {
                setErrorMessage('Email given is invalid')
            } else {
                setErrorMessage('')
            }
        }
        else {
            //Nothing is provided for name, email, or message
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage: ', errorMessage);

        //If inputs are valid( aka no error message appears) update setFormState with the given valid inputs
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <h1 data-testid="h1tag" id="contact">Contact Me</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: 'x-large' }}>
                        <p>
                            Email: briandgomez98@gmail.com
                            <br />
                            Phone Number: 9087648798
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <form id="form" className="col-4 text-center rounded border-dark p-5" action="#!" onSubmit={handleSubmit}>
                            <div>
                                {/*name input*/}
                                <label htmlFor="name">Name:</label>
                                <input name="Name" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                {/*email input*/}
                                <label htmlFor="email">Email address:</label>
                                <input name="Email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="E-mail" defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                {/*message text area*/}
                                <label htmlFor="message">Message:</label>
                                <textarea name="Message" rows="7" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="Message" defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="erro-text">{errorMessage}</p>
                                </div>
                            )}
                            <button className="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Submit</button>
                        </form>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

export default ContactForm;