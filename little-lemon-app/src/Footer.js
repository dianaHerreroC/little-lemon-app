import {Link} from 'react-router-dom';

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/">Order online</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
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