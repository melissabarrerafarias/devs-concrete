import '../footer.css';

function Footer() {
    return (
        <div id="footer" className="row">
            <div id="footer-left" className="col-md-6">
                <h1>Dev's Concrete</h1>
                <div>
                    <p>Dev's Concrete LLC is a certified and licensed company
                        by the state of Washington. Our company is insured and dedicated to delivering high-quality
                        results. For further information, visit the Services section or contact us. <p className="footer-contact">Phone: <a href="tel:(360) 581-1138">(360) 581-1138</a> / Email: <a href="mailto:devsconcrete@gmail.com">devsconcrete@gmail.com</a></p></p>

                </div>
            </div>
            <div id="footer-right" className="col-md-6">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#what-we-do">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer; 