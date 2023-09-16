import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ loggedIn, email, onSignOut }) {

    const location = useLocation();

    return (
        <header className="page-content header">
            {loggedIn ? (
            <>
                <a href="/" className="header__link">
                <img
                    className="logo header__logo"
                    src={logo}
                    alt="Логотип Место"
                />
                </a>
                <div className="header__navigate">
                    <p className="header__email">{email}</p>
                <Link to='/signin' className='header__link-exit'>
                    <p className='header__navigate-title' onClick={onSignOut}>Выйти</p>
                </Link>
                </div>
            </>
) : (
            <>
                <a href="/" className="header__link">
                <img
                    className="logo header__logo"
                    src={logo}
                    alt="Логотип Место"
                />
                </a>
                {location.pathname === "/signup" ? (
                    <div className="header__group">
                        <Link className="header__navigate-title" to="signin">Войти</Link>
                    </div>
                     ) : null}
                {location.pathname === "/signin" ? (
                    <div className="header__group">
                        <Link className="header__navigate-title" to="signup">Регистрация</Link>
                    </div>
                    ) : null}
            </>
)}
            
            
      </header>
  )};
  
  export default Header