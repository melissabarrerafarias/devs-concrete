import React from "react";
import '../services.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

import jackhammer from '../assets/images/jackhammer.png';
import replace from '../assets/images/exchange.png';
import specialist from '../assets/images/expert.png';
import aggregate from '../assets/images/sand.png';
import stamp from '../assets/images/paving.png';
import broom from '../assets/images/pattern.png';

function Services() {
    return (
        <main id="services">
            <section>
                <h1 className="text-center pt-5">Services</h1>
                <div className="services-carousel">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-interval="100">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img4} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div>
                    <div className="row">

                        <div className="col-md-6 services-options">
                            <div className="row">
                                <div className="col-md-4 services-icons">
                                    <img src={jackhammer} />
                                </div>
                                <div className="col-md-8">
                                    <h3>Concrete Demolition</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 services-options">
                            <div className="row">
                                <div className="col-md-4  services-icons">
                                    <img src={replace} />
                                </div>
                                <div className="col-md-8">
                                    <h3>Concrete Replacement</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 services-options">
                            <div className="row">
                                <div className="col-md-4 services-icons">
                                    <img src={specialist} />
                                </div>
                                <div className="col-md-8">
                                    <h3> Flatwork Specialists</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-6 services-options">
                            <div className="row">
                                <div className="col-md-4 services-icons">
                                    <img src={aggregate} />
                                </div>
                                <div className="col-md-8">
                                    <h3>Aggregate</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 services-options">
                            <div className="row">
                                <div className="col-md-4 services-icons">
                                    <img src={stamp} />
                                </div>
                                <div className="col-md-8">
                                    <h3>Stamp</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 services-options mb-5">
                            <div className="row">
                                <div className="col-md-4 services-icons">
                                    <img src={broom} />
                                </div>
                                <div className="col-md-8">
                                    <h3>Broom Finish</h3>
                                    <p className="services-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
};

export default Services; 