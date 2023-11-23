import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItem from 'UIComponents/NavItem/NavItem';
import styles from './NavBar.module.scss';
import logo from 'assets/icons/logo.png';
import cart from 'assets/icons/shopping-cart.png';
// import Button from 'UIComponents/Button/Button';
import Search from 'UIComponents/Search/Search';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className={styles.container}>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/home">
                    <img src={logo} alt="logo" className={styles.img} />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={styles.navList}>
                        <NavItem title="Home" />
                        <NavItem title="Category" />
                    </div>
                </div>
                <Search />
                <Link to="/cart">
                <img src={cart} alt="cart" className={styles.cart}/>
                </Link>
            </div>
        </nav>
    );
}
