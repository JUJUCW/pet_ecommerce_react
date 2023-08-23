import styles from './Breadcrumb.module.scss';
import { Link, useLocation } from 'react-router-dom';
// import logo from 'assets/icons/logo.png';

export default function Breadcrumb() {
    const location = useLocation();
    return (
        <div className={styles.container}>
            {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/main">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="/category">Category</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="/product">Product</a>
                    </li>
                </ol>
            </nav> */}
            {/* <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="react-router-breadcrumb" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category">
                                Category
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/electronics"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Electronics
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/electronics/mobile">
                                    Mobile Phone
                                </Link>
                                <Link className="dropdown-item" to="/electronics/desktop">
                                    Desktop PC
                                </Link>
                                <Link className="dropdown-item" to="/electronics/laptop">
                                    Laptop
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
                    Home
                </Link>
                <span className="breadcrumb-arrow">&gt;</span>
                <Link
                    to="/dogs"
                    className={location.pathname.startsWith('/dogs') ? 'breadcrumb-active' : 'breadcrumb-not-active'}
                >
                    Dog
                </Link>
                <span className="breadcrumb-arrow">&gt;</span>
                <Link
                    to="/dogs/Small Dog"
                    className={location.pathname === '/dogs/Small Dog' ? 'breadcrumb-active' : 'breadcrumb-not-active'}
                >
                    Small Dog
                </Link>
            </nav>
        </div>
    );
}
