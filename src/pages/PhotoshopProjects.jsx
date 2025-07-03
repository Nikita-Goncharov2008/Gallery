import React from 'react';
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import DetailedPic from './detailedPic';


const PhotoshopProjects = ({data}) => {
    if (!data) return <p>No img found</p>
    return(
        <>
        <Menu/>
        <div className='card-galery'>
            {data.map(elem=>(<Link key={elem.id} to={`/photoshop/${elem.id}`}><ProjectCard id = {elem.id} title = {elem.title} description = {elem.description} image = {elem.image} /></Link>))}
        </div>
        <Footer/>
        </>
    )



        
}

export default PhotoshopProjects;
