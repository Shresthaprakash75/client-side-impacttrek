// src/App.js
import React from 'react';
import type { HeadFC } from "gatsby"

import Header from '../components/header';
import Footer from '../components/footer';

function BookTrek() {
    return (
        <>
            <Header />
            <main className='container'>
                <ul>
                    <li>Trek Info</li>
                    <li>Client Info</li>
                    <li>Payment Info</li>
                </ul>
            </main>
            <Footer />
        </>

    );
}

export default BookTrek;
export const Head: HeadFC = () => <title>Impact trek | Booking</title>