import logo2 from './assets/Logo 2.png';

function Footer(){
    return(
        <footer className="footer">
            <div>
                <img src={logo2} alt="Little lemon logo" height="100%"></img>
            </div>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="#orderOnline">Order online</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media links</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Tripadvisor</li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;