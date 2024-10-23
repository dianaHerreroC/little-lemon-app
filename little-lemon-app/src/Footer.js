import logo2 from './assets/Logo 2.png';

function Footer(){
    return(
        <footer className="footer">
            <img src={logo2} alt="Little lemon logo" width="90"></img>
            <div>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h2>Social Media links</h2>
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