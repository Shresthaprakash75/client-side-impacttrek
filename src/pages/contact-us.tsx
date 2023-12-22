// src/App.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function ContactUs() {
    return (
        <>
            <Header />
            <main className='container'>
                <ul>
                    <li>Little info about this servic.</li>
                    <li>Pay Us</li>
                </ul>
            </main>
            <Footer />
        </>

    );
}

export default ContactUs;
