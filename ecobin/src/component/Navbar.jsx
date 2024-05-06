import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="logo1.png" alt="Logo" className="logo" style={{ width: '150px', height: 'auto' }} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                <div className="nav-item-box">
                                    <strong>ACCEUIL</strong>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/realtimedata' className="nav-link">
                                <div className="nav-item-box">
                                    <strong>Données en Temps Réel</strong>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/olddata' className="nav-link">
                                <div className="nav-item-box">
                                    <strong>Anciennes Données</strong>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/futurpred' className="nav-link">
                                <div className="nav-item-box">
                                    <strong>Futur Prédiction</strong>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
