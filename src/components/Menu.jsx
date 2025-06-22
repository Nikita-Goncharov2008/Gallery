import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to = '/'>Home</Link>
            <Link to = 'photoshop'>Photoshop</Link>
            <Link to = 'illustrator'>Illustrator</Link>
        </div>
    );
}

export default Menu;
