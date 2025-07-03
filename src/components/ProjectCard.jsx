import React from 'react';

const ProjectCard = ({id, title, image, description}) => {
    return (
        <div className='card-container'>
            <p className='card-title'>{title}</p>
            <img className = 'card-image' src={image} alt={title} />
            <p className='card-description'>{description}</p>
        </div>
    );
}

export default ProjectCard;
