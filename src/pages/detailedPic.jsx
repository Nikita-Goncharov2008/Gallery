import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const DetailedPic = ({data}) => {
    console.log({data})
    let page = useParams().id
    let elem = data.find(item => item.id === page)
    let location = useLocation().pathname.split('/')[1]
    return (
        <>
            <Menu/>
                <div className="detailed-content">
                    <h3 className="detailed-title">{elem.title}</h3>
                    <img className = 'detailed-image'src={elem.image} alt={elem.title} />
                    <p className="detailed-description">{elem.description}</p>
                    <Link to = {location == 'photoshop'? '/photoshop':'/illustrator'}>Get back</Link>
                </div>
            <Footer/>
        </>
    );
}

export default DetailedPic;
