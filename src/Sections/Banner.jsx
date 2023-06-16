import React from 'react'
import png from '../img/SD-Advance.png';
import globalimg from '../img/global_services_img.png';
import formimage from '../img/Layer 3.png'
import formimage2 from '../img/Layer 2.png'
import { Link } from 'react-router-dom';
function Banner() {
    return (
        <section>
            <div className="container">
                <div className="main-domain">
                    <div className="heading-domains">
                        <h1 className='headingtext'>Use our <span>domains</span> for your Services</h1>
                    </div>
                    <div className="pic-domains">
                        <img src={png} alt="" />
                    </div>
                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut harum eius enim
                            facilis, consequatur, numquam tempore adipisci optio amet modi sed illo voluptas aliquid!
                            aut harum eius enim facilis, consequatur</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Banner }

// section 2------

function About_Us() {
    return (
        <>
            <div className="outer">
                <div className="inner"></div>
            </div>
            {/* /// inner style */}
            <section className="about-main">
                <div className="container">
                    <div className="about">
                        <div className="aboutus-text">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti deserunt earum
                                neque sit tempore consequatur quis et aliquam. Culpa ad officiis magnam suscipit
                                reprehenderit exercitationem voluptatibus nulla, quasi quos.voluptatibus nulla, quasi
                                quosnulla, quasi quos..</p>
                            <Link to="/contact">
                                <button type="btn" className="contact">Contact Us</button>
                            </Link>

                        </div>
                        <div className="about-pic">
                            <img src={globalimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { About_Us }

function Leasing_Blew() {
    return (
        <>
            <section className="back">
                <div className="container">
                    <div className="blew-domains">
                        <h3>Leasing Blew <span className="domains-bold">Domains</span> </h3>
                        <p>If User lease domain upto 5 years then we can give 100% right to buyer</p>
                        <div className="btn-search">
                            <button><input type="text" placeholder="Search for your domain here" />
                                <span className="leasing-com">.com</span>
                                <span className="search-blew-btn"> Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Leasing_Blew }


function Domains_dolor() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="domains-dolor">
                        <div className="domains-dolor-text">
                            <span className="domains-bold text-domains-bold">Domains</span>
                            <p>$25000/yr</p>
                            <span className="search-blew-btn dolor-btn"> Select</span>
                        </div>
                        <div className="dolor-list-all">
                            <div className="domains-lis">
                                <ul>
                                    <li>10Winds.com</li>
                                    <li>50yuyan.com</li>
                                    <li>mettlestufe.com</li>
                                    <li>invatalimbi.com</li>
                                    <li>lingufree.com</li>
                                    <li>lingufree.com</li>
                                    <li>desidosa.com</li>
                                    <li>goethe.in</li>
                                    <li>mettlestufe.de</li>
                                </ul>
                            </div>
                            <div className="domains-lis nth-list">
                                <ul>
                                    <li>10Winds.com</li>
                                    <li>50yuyan.com</li>
                                    <li>mettlestufe.com</li>
                                    <li>invatalimbi.com</li>
                                    <li>lingufree.com</li>
                                    <li>lingufree.com</li>
                                    <li>desidosa.com</li>
                                    <li>goethe.in</li>
                                    <li>mettlestufe.de</li>
                                </ul>
                            </div>
                            <div className="domains-lis">
                                <ul>
                                    <li>10Winds.com</li>
                                    <li>50yuyan.com</li>
                                    <li>mettlestufe.com</li>
                                    <li>invatalimbi.com</li>
                                    <li>lingufree.com</li>
                                    <li>lingufree.com</li>
                                    <li>desidosa.com</li>
                                    <li>goethe.in</li>
                                    <li>mettlestufe.de</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Domains_dolor }

function FormData() {
    return (
        <>
            <section>
                <div className="fill-details-main">
                    <div className="container">
                        <div className="fill-details">
                            <div className=" details-text">
                                <h3>Fill your details</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore iusto maiores facere.
                                    Commodi adipisci qui ipsum itaque sapiente, obcaecati consequatur, architecto,
                                </p>
                                <div className="pic-domains-info">
                                    <img src={formimage} alt="" />
                                </div>
                            </div>
                            <div className="form-text">

                                <form action="">
                                    <label for="">Full Name</label>
                                    <input type="text" placeholder="pankaj kumar " />
                                    <label for="">Mail</label>
                                    <input type="text" placeholder="pankaj@803gmail.com" />
                                    <label for="">Message</label>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </form>
                                <button>send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { FormData }

function Feedback() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="clients-main">
                        <div className="clients-feedback">
                            <div className="clients">
                                <h5>Clinents Feedback</h5>
                                <h4>What Do People Say About Us ?</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam ratione ipsa ad
                                    obcaecati exercitationem eos cumque libero .deserunt voluptatibus deserunt voluptatibus
                                </p>
                            </div>
                            <div className="clients-text">
                                <span><i className="fa fa-quote-left"></i></span>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, commodi
                                    necessitatibus. Excepturi architecto, provident expedita ea impedit incidunt, doloribus
                                    laboriosam a minus, unde dicta porro tempora explicabo repellendus hic neque!
                                </p>
                                <span className="right-icon-fdubble-qupte  right-side"><i className="fa fa-quote-left"></i></span>
                                <div className="clients-pic-info">
                                    <div className="clients-pic">
                                        <img src={formimage2} alt="" />
                                        <div className="icon-left-right">

                                            <i className="fa fa-chevron-left"></i>
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </div>
                                    <div className="clients-name">
                                        <div className="clients-name-set">
                                            <a href="#">Janny</a>
                                            <a href="#"><span>USA.</span>Newyork</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Feedback }