import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const IllustratorProjects = ({data}) => {
    return (
        <>
        <Menu/>
            <div className="content-illustrator">
                <div className="card-galery">
                    {data.map(elem=>(<ProjectCard key={elem.id} id={elem.id} description={elem.description} title={elem.title} image={elem.image}/>))}
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default IllustratorProjects;
