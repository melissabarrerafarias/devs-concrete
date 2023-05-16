import '../navbar.css';
// import heroLogo from '../assets/images/logo-homepage.PNG';
function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Dev's Concrete</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa-solid fa-circle-chevron-down"></i></span> {/*CHANGE ICON LATER*/}
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/services">Services</a>
                        <a class="nav-link" href="/#what-we-do">About</a>
                        <a class="nav-link" href="/#contact">Contact</a>
                    </div>
                </div>
                <a class="navbar-brand" id="navbar-brand-right" href="/">Dev's Conrete</a>
            </div>
        </nav>
    )
};

export default NavBar; 