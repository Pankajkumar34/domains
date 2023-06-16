import React from "react";
import FooterFifty from '../img/50.png'
function Footer() {
    return (

        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-text-logo-list">
                        <div className="logo-footer">
                            <img src={FooterFifty} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corporis laboriosam
                                quisquam non nam fugiat debitis inventore ad distinctio perspiciatis architecto tempora
                                officiis libero porro, quia ea eius voluptates hic.</p>
                            <div className="icons-footer">
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-facebook-f"></i>
                                <i className="fa fa-google-plus"></i>
                                <i className="fa fa-pinterest"></i>
                            </div>
                        </div>
                        <div className="footer-list">
                            <h4>Company</h4>
                            <div className="list-footer">
                                <ul>
                                    <li>About</li>
                                    <li>Our Team</li>
                                    <li>Our Services</li>
                                    <li>Contact</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-list-secound">
                            <h4>Hosting</h4>
                            <div className="list-footer">
                                <ul>
                                    <li>VPN Hosting</li>
                                    <li>Reseller Hosring</li>
                                    <li>SSD Hosting</li>
                                    <li>Dedicated Sever</li>
                                    <li>Web Hosting</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" form-text-footer">
                            <h4>subscribe</h4>

                            <div className="list-footer footer-icons-last">
                                <input type="text" placeholder="Enter your Email Id" />
                                <div className="icons-footer">
                                    <a href="#"><i className="fa fa-envelope"></i>pankaj@gmail.com</a>
                                </div>
                                <div className="icons-footer">
                                    <a href="#"><i className="fa fa-phone"></i> 8115809072 </a>
                                </div>

                                <div className="icons-footer">
                                    <a href="#"><i className="fa fa-map-marker"></i>
                                    </a>
                                    <p className="address"> johannes schuman,23 autumwood trail Beach .fl 32174</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )

}
export { Footer}