import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to={'/'}><h1>Tintash Movies</h1></Link>
            <button>Add a Movie</button>
        </header>
    );
}

export default Header;