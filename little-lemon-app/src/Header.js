import logo from './assets/Logo.svg';

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Little lemon logo" width="100%"></img>
        </header>
    );
};
export default Header;