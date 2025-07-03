import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const DetailedPic = ({data}) => {
    console.log({data})
    let page = useParams().id
    let elem = data.find(item => item.id == page)
    console.log(elem)
    return (
        <>
            <Menu/>
                <div className="detailed-content">
                    <p className="title">{elem.title}</p>
                    <img src={elem.image} alt={elem.title} />
                    <p className="detailed-description">{elem.description}</p>
                </div>
            <Footer/>
        </>
    );
}

export default DetailedPic;
