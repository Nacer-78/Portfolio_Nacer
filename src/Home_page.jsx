import { useEffect } from 'react';

import Qui_suis_je from './picture/Qui_suis_je.svg';
import Qui_suis_je_hover from './picture/Qui_suis_je_hover.svg';

import My_projects from './picture/My_projects.svg';
import My_projects_hover from './picture/My_projects_hover.svg';

import Skills from './picture/Skills.svg';
import Skills_hover from './picture/Skills_hover.svg';

import Contact_me from './picture/Contact_me.svg';
import Contact_me_hover from './picture/Contact_me_hover.svg';

import Certification from './picture/Certification.svg';
import Certification_hover from './picture/Certification_hover.svg';

import Loisir from './picture/Loisir.svg';
import Loisir_hover from './picture/Loisir_hover.svg';


export default function Home_page () {

    // useEffect(() => {

    //     const links = document.querySelectorAll('a.icons');

    //     links.forEach(link => link.classList.add("reset_position"));

    // }, []);

    useEffect(() => {

        const links = document.querySelectorAll('a.icons');
        
        // On ajoute d'abord la classe reset_position après un petit délai
        const timeout = setTimeout(() => {

        links.forEach(link => {

            link.classList.add("reset_position");
            link.classList.remove("initial_position");

        });

        }, 1000); // 1 seconde

        return () => clearTimeout(timeout);

    }, []);

    return (

        <div className="container mt-[50px] mb-[50px]">
            <div className="grid grid-cols-3 gap-4">

                <a href="#" className="icons initial_position" data-tooltip="Qui suis je ?">
                    <div className="Image_hover">
                        <img src={Qui_suis_je} className="home_page_icons" alt="Qui_suis_je"/>
                        <img src={Qui_suis_je_hover} className="home_page_icons_hover" alt="Qui_suis_je"/>
                    </div>
                </a>

                <a href="#" className="icons initial_position" data-tooltip="Mes projets">
                    <div className="Image_hover">
                        <img src={My_projects} className="home_page_icons" alt="My_projects"/>
                        <img src={My_projects_hover} className="home_page_icons_hover" alt="My_projects"/>
                    </div>
                </a>

                <a href="#" className="icons initial_position" data-tooltip="Mes compétences">
                    <div className="Image_hover">
                        <img src={Skills} className="home_page_icons" alt="Skills"/>
                        <img src={Skills_hover} className="home_page_icons_hover" alt="Skills"/>
                    </div>
                </a>

                <a href="#" className="icons initial_position" data-tooltip="Contactez-moi" data-tooltip-location="bottom">
                    <div className="Image_hover">
                        <img src={Contact_me} className="home_page_icons" alt="Contact_me"/>
                        <img src={Contact_me_hover} className="home_page_icons_hover" alt="Contact_me"/>
                    </div>
                </a>

                <a href="#" className="icons initial_position" data-tooltip="Certification" data-tooltip-location="bottom">
                    <div className="Image_hover">
                        <img src={Certification} className="home_page_icons" alt="Certification"/>
                        <img src={Certification_hover} className="home_page_icons_hover" alt="Certification"/>
                    </div>
                </a>

                <a href="#" className="icons initial_position" data-tooltip="Loisir" data-tooltip-location="bottom">
                    <div className="Image_hover">
                        <img src={Loisir} className="home_page_icons" alt="Loisir"/>
                        <img src={Loisir_hover} className="home_page_icons_hover" alt="Loisir"/>
                    </div>
                </a>

            </div>
        </div>

    )
  
}