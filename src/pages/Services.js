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
                                    <p>Concrete demolition is a specialized service that involves the safe and
                                        efficient removal of concrete structures or components. The service we offer includes expertise,
                                        equipment, waste management, and more. 
                                    </p>
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
                                    <p>We can remove and replace deteriorated or damaged
                                        concrete surfaces, such as driveways, sidewalks, patios, or other concrete structures. We 
                                        can assess and evaluate your project needs. 
                                    </p>
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
                                    <p>We specialize in concrete work that involves horizontal surfaces such as
                                        driveways, sidewalks, patios, floors, and foundations. We promise precision, technique, 
                                        and a beautiful finish. 
                                    </p>
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
                                    <p>Aggregate work involves the use of various types of aggregates, your choice of crushed
                                        stone, gravel or sand, in concrete mixtures or for other construction purposes. We do
                                        site preparation and grading, as well as placement and finishing. 
                                    </p>
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
                                    <p>Stamped concrete is a popular decorative technique that involves impressing 
                                        patterns or textures onto freshly poured concrete, mimicking the appearance
                                        of materials like stone, brick, or tile. We offer expertise, variety, and
                                        attention to detail when performing this service. 
                                    </p>
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
                                    <p className="services-desc">Broom finishing is a method used to create 
                                    a textured surface on concrete. It involves using a broom to create uniform grooves
                                    or lines on the surface of freshly poured concrete. We use appropriate broom 
                                    selection, deliver a consistent design, and work with precise timing and 
                                    coordination.  </p>
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