// src/App.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'gatsby';
import type { HeadFC } from "gatsby"

function ContactUs() {
    return (
        <>
            <Header />
            <main className='container'>
                <ul>
                    <li>Welcome
                        <ul>
                            <li>Thanks for wanting to know about us</li>
                        </ul>
                    </li>
                    <li>About the Founder
                        <ul>
                            <li>My background</li>
                            {/* who am I? */}
                            {/* Little info about me and my love of trekking in the mountains of Nepal */}
                            {/* I've been managing treks since 2013 unofficially */}
                            {/* I am software engineer  */}
                            {/* I love mountains. I love trekking. Makes me happy. Healthy escape from city life. I love managing. I love software development. */}
                            {/* I built this site by myself. And every process you see on impacttrek */}
                            {/* building business */}
                            <li>Trek I am Leading this year
                                <ul>
                                    <li>EBC trek, Jan 24 [ Book now ] [ learn more ]</li>
                                    <li>Three pass trek, Jan 24 [ Book now ] [ learn more ]</li>

                                </ul>
                            </li>
                            <li>Follow Me : Twitter | Instagram | </li>
                        </ul>
                    </li>

                    <li>About Impacttrek
                        <ul>
                            <li>Our Story : How Impacttrek Started</li>
                            <li>About Impacttrek
                                <ul>
                                    <li>How Impacttrek functions</li>
                                    <li>
                                        <Link to="/choose-trek" className="nav-link">Treks we manage</Link>
                                    </li>
                                    <li>How Impacttrek is different than other trekking agency 
                                        <ul>
                                            <li>Transparent</li>
                                            {/* : Our ways of doing business is open */}
                                            <li>People Driven</li>
                                            {/* for trekkers i.e. clients and trekking guide */}

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="/contact-us" className="nav-link">Come talk to us</Link></li>
                        </ul>
                    </li>
                </ul>
            </main>
            <Footer />
        </>

    );
}

export default ContactUs;
export const Head: HeadFC = () => <title>Impact trek | About Us</title>