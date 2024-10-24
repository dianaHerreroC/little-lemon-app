import logo from './assets/Logo.svg';

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Little lemon logo" width="90%" height="90%"></img>
        </header>
    );
};
export default Header;