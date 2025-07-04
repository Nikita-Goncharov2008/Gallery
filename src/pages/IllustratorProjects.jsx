import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const IllustratorProjects = ({data}) => {
    return (
        <>
        <Menu/>
            <div className="content-illustrator">
                <div className="card-galery">
                    {data.map(elem=>(<Link key={elem.id} to={`/illustrator/${elem.id}`}><ProjectCard id = {elem.id} title = {elem.title} description = {elem.description} image = {elem.image} /></Link>))}
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default IllustratorProjects;
