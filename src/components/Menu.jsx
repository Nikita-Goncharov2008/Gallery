import React from 'react';
import {Link}  from 'react-router-dom';

const Menu = () => {
    
        
return(
        <menu  className='menu'>
            <nav className='menu-navigation'>
                <Link to = '/'>Home</Link>
                <Link to = '/photoshop'>Photoshop</Link>
                <Link to = '/illustrator'>Illustrator</Link>
            </nav>
        </menu>
)

        
    
    
    
}

export default Menu;
