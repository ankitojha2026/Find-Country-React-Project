
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaGlobe, FaPhone } from 'react-icons/fa';
import '../../App.css';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <header className="Header bg-dark text-white">
            <div className="logo-container">
                <NavLink to="/">
                    <img src="/Images/logo.png" alt="Logo" width="50px" />
                </NavLink>
            </div>

            <nav className="nav-container">
                <ul className="nav-list d-flex gap-3 align-items-center ">
                    <li>
                        <NavLink to="/" className="NavLink">
                            <span className="iconof"><FaHome /></span>
                            <span className="textof">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="NavLink">
                            <span className="iconof"><FaInfoCircle /></span>
                            <span className="textof">About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/country" className="NavLink">
                            <span className="iconof"><FaGlobe /></span>
                            <span className="textof">Country</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="NavLink">
                            <span className="iconof"><FaPhone /></span>
                            <span className="textof">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}
        </header>
    );
};

export default Header;
