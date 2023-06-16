import React from "react";
import '../ContectFolder/Contact.css';
function Contact() {
    return (
        <div className="BannerContact">
            <div className="container">
                <div className="contactText">
                    <div className="text-Contact-us">
                        <h2 className="contact-us-heading">Contact Us</h2>
                        <p className="contact-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto maiores facere.
                            Commodi adipisci qui ipsum itaque sapiente, obcaecati consequatur, architecto,
                        </p>
                    </div>
                    <div className="form-text form-text2">
                        <form className="Contact-style">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter Name " />

                             
                            <label htmlFor="email">Email Id</label>
                            <input type="text" placeholder="Enter your Email" />
                            <label htmlFor="email">Password</label>
                            <input  type="text" placeholder="Enter your Email" />

                           

                            <label htmlFor="message">Message</label>
                            <textarea type="password" placeholder="Enter your message" />
                            <button className="send">send</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
