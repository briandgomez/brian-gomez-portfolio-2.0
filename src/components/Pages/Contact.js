import React, { useState } from "react";
import { validateEmail } from "../helpers";

function ConatctForm() {
    return (
        <section>
            <h1 data-testid="h1tag" style={{ display: 'flex', justifyContent: 'center', padding: '35px' }}>Contact me</h1>
            <div className="row justify-content-center">
                <form class="col-4 text-center border rounded border-dark p-5" action="#!">
                    <div>
                        {/*name input*/}
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name" />
                    </div>
                    <div>
                        {/*email input*/}
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail" />
                    </div>
                    <div>
                        {/*message text area*/}
                        <label htmlFor="message">Message:</label>
                        <textarea type="text" rows="7" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="Message" />
                    </div>
                    <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ConatctForm;