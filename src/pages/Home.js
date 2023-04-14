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
                        We're Awesome
                    </div>
                    <div class="col-md-4">
                        We're Reliable
                    </div>
                    <div class="col-md-4">
                        We're Skilled
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

        </main>
    )
};

export default Homepage; 