import React from "react";
import '../services.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

function Services() {
    return (
        <main>
            <section>
                <div className="services-carousel">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
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
                            hi
                        </div>
                        <div className="col-md-6 services-options">
                            hello
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 services-options">
                            hi
                        </div>
                        <div className="col-md-6 services-options">
                            hello
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 services-options">
                            hi
                        </div>
                        <div className="col-md-6 services-options">
                            hello
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
};

export default Services; 