// src/App.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function PlanTreks() {
    return (
        <>
            <Header />
            <main className='container'>
                <ul>
                    <li>Choose Trek</li>
                    <li>Filter</li>
                    <li>List of all treks</li>
                    <li>Footer</li>
                </ul>
            </main>
            <Footer />
        </>

    );
}

export default PlanTreks;
