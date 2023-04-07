import '../home.css'; 
import heroLogo from "../assets/images/logo-homepage.PNG";

function Homepage() {
    return (
        <main>
            <div class="hero">
            <div className="hero-logo">
                        <img src={heroLogo}/>
                        <h1>Dev's Concrete</h1>
                        <button>Request a Free Estimate</button>
                    </div>
            </div>
        </main>
    )
}; 

export default Homepage; 