import '../home.css';
import heroLogo from "../assets/images/logo-homepage.PNG";
import homepageImg2 from '../assets/images/homepage-img2.jpg';
import locations from '../assets/images/locations.png';

function Homepage() {
    return (
        <main>
            <div class="hero">
                <div className="hero-logo">
                    <img src={heroLogo} />
                    <h1>Dev's Concrete</h1>
                    <button>Request a Free Estimate</button>
                </div>
            </div>

            <div id="what-we-do" className="text-center">
                <div class="row">
                    <div class="col-md-6">
                        <img src={homepageImg2} />
                    </div>
                    <div class="col-md-6">
                        <h1>WHAT WE DO</h1>
                    </div>
                </div>
            </div>

            <div id="why-choose-us" className="text-center">

                <h1>WHY CHOOSE US</h1>
                <div class="row">
                    <div class="col-md-4">
                        <i class="fa-solid fa-user-group"></i>
                        <h2>We're Experienced</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div class="col-md-4">
                        <i class="fa-regular fa-handshake"></i>
                        <h2>We're Reliable</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div class="col-md-4">
                        <i class="fa-solid fa-hammer"></i>
                        <h2>We're Skilled</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
            </div>

            <div id="where-we-serve" className="text-center">
                <h1>WHERE WE SERVE</h1>
                <img src={locations} />
                <div className="location-pins">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-1"><i class="fa-solid fa-location-dot"></i></div>
                        <div class="col-md-1"><i class="fa-solid fa-location-dot"></i></div>
                        <div class="col-md-1"><i class="fa-solid fa-map-location-dot"></i></div>
                        <div class="col-md-1"><i class="fa-solid fa-location-dot"></i></div>
                        <div class="col-md-1"><i class="fa-solid fa-location-dot"></i></div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-1">Mason County</div>
                        <div class="col-md-1">Pacific County</div>
                        <div class="col-md-1">Grays Harbor County</div>
                        <div class="col-md-1">Lewis County</div>
                        <div class="col-md-1">Thurston County</div>
                    </div>
                </div>
            </div>


            <div id="contact">
                <h1 className="text-center">Contact</h1>
                <div className="row">

                    <div className="col-md-6">
                        <div className="contact-info">
                            <row>
                                <div>Text - Call - Email</div>
                                <div> 
                                <i class="fa-solid fa-comment-sms"></i>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                <i class="fa-solid fa-at"></i>

                                </div>
                            </row>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Request</label>
                                <textarea type="text" class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    )
};

export default Homepage; 