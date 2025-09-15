import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

        <div className="flex items-center justify-center mt-[50px] mb-[50px]">
            <div className="grid grid-cols-3 gap-4">

                <Link to={"/about_us"} className="icons initial_position" data-tooltip="Qui suis je ?">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={Qui_suis_je} className="home_page_icons" alt="Qui suis je"/>
                        <img src={Qui_suis_je_hover} className="home_page_icons_hover" alt="Qui suis je"/>
                    </div>
                </Link>

                <Link to={"/my_projects"} className="icons initial_position" data-tooltip="Mes projets">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={My_projects} className="home_page_icons" alt="Mes projets"/>
                        <img src={My_projects_hover} className="home_page_icons_hover" alt="Mes projets"/>
                    </div>
                </Link>

                <Link to={"/skills"} className="icons initial_position" data-tooltip="Mes compétences">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={Skills} className="home_page_icons" alt="Mes compétences"/>
                        <img src={Skills_hover} className="home_page_icons_hover" alt="Mes compétences"/>
                    </div>
                </Link>

                <Link to={"/contact_me"} className="icons initial_position" data-tooltip="Contactez-moi" data-tooltip-location="bottom">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={Contact_me} className="home_page_icons" alt="Contactez-moi"/>
                        <img src={Contact_me_hover} className="home_page_icons_hover" alt="Contactez-moi"/>
                    </div>
                </Link>

                <Link to={"/certification"} className="icons initial_position" data-tooltip="Certification" data-tooltip-location="bottom">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={Certification} className="home_page_icons" alt="Certification"/>
                        <img src={Certification_hover} className="home_page_icons_hover" alt="Certification"/>
                    </div>
                </Link>

                <Link to={"/hobbies"} className="icons initial_position" data-tooltip="Loisir" data-tooltip-location="bottom">
                    <div className="Image_hover w-[250px] h-[250px]">
                        <img src={Loisir} className="home_page_icons" alt="Loisir"/>
                        <img src={Loisir_hover} className="home_page_icons_hover" alt="Loisir"/>
                    </div>
                </Link>

            </div>
        </div>

    )
  
}