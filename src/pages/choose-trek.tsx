// src/App.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import type { HeadFC, PageProps } from "gatsby"

function PlanTreks() {
    return (
        <>
            <Header />
            <main className='container'>
                <ul>
                    <li>Choose Trek</li>
                    <li>Filter</li>
                    <ul>
                    <li>price wise : high, low</li>
                    <li>altitude wise : high, low</li>
                    <li>region wise : Everest, Annapurna, Langtang</li>
                    
                    </ul>
                    <li>List of all treks</li>
                    <li>Footer</li>
                </ul>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                            dy=".3em">Thumbnail</text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Get High 3 times</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Book Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Learn More</button>
                                            </div>
                                            <small className="text-body-secondary">max alt : 5406m</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                            dy=".3em">Thumbnail</text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Get High 3 times</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Book Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Learn More</button>
                                            </div>
                                            <small className="text-body-secondary">max alt : 5406m</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                            dy=".3em">Thumbnail</text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Get High 3 times</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Book Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Learn More</button>
                                            </div>
                                            <small className="text-body-secondary">max alt : 5406m</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                            dy=".3em">Thumbnail</text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Get High 3 times</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Book Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Learn More</button>
                                            </div>
                                            <small className="text-body-secondary">max alt : 5406m</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    );
}

export default PlanTreks;
export const Head: HeadFC = () => <title>Impacttrek | All Treks</title>