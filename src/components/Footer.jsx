import React from 'react';
import resume from '../assets/docs/resum-frontend-developer.docx'
const Footer = () => {
    return (
        <div>
        <footer>
            <p className="resume">Link to download my resume - <a href={resume}>download</a></p>
            <p className="contacts">Contacts</p>
            <ul>
                <li>phone number - <span className="phone">+19347991668</span></li>
                <li>email - <span className = 'gmail'>nikitwork16@gmail.com</span></li>
                <li>GitHub - <span className="github">Nikita-Goncharov2008</span></li>
            </ul>
            <p className="copyright"><span className = 'copyright-year'></span>&#169; Nikita Goncharov</p>
        </footer>
        </div>
    );
}

export default Footer;
