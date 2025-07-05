import React from 'react';
import Menu from '../components/Menu';
import photoshop from '../assets/images/icons/photoshop.svg'
import illustrator from '../assets/images/icons/adobe-illustrator-icon.svg'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-page'>
            <Menu/>
            <div className="home-content">
                <div className="home-content__icons">
                    <Link to='/photoshop'><img className='icons' src={photoshop} alt="photoshop icon" /> </Link>
                    <Link to ='/illustrator'><img className='icons' src={illustrator} alt="photosop icon" /></Link>
                </div>
                <p>This website was created as a portfolio to showcase my work in Photoshop and Adobe Illustrator. I hope you enjoy exploring my projects — feel free to use the images above to help navigate through the site.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
