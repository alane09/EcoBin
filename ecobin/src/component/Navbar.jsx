import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="imageBox">
                    <a href="index.html">
                        <img src="logo.png" alt="" className="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
                    </a>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="nav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to='/home' className="nav-link"><strong>ACCEUIL</strong></Link>
                        </li>


                        <li className="nav-item">
                            <Link to='/realtimedata' className="nav-link"><strong>Données en Temps Réel  </strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/olddata' className="nav-link"><strong>Anciennes Données</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/futurpred' className="nav-link"><strong>Futur Prédiction</strong></Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}
export default Navbar;
