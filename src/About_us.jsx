import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Me from './picture/Me.png';
import School_career from './picture/about_us_school_career.jpg';
import Why_front_end from './picture/about_us_why_front_end.jpg';
import Personnality from './picture/about_us_personnality.png';

import Golf_8 from './picture/golf_8.svg';

import Accelerator_pedal from './picture/accelerator_pedal.svg';
import Accelerator_pedal_hover from './picture/accelerator_pedal_hover.svg';
import Brake_pedal from './picture/brake_pedal.svg';
import Brake_pedal_hover from './picture/brake_pedal_hover.svg';

import { useRef, useState, useEffect } from 'react';

export default function About_us () {

    const all_div_hidden = useRef([]);
    const golf_8 = useRef(null);
    const checkpoints = useRef([]);


    const [numberClicks, setNumberClicks] = useState(0);

    useEffect(() => {
        showDiv(numberClicks);
    }, [numberClicks]);

    const contents_div_hidden = [

        {
            src: Me,
            alt: "Me",
            text: `Je m'appelle Nacerallah Bouamama, mais tout le monde m'appelle Nacer.
                    
                    J'ai 25 ans et je réside à Freneuse, une petite ville dans les Yvelines, pas très loin de la Normandie.
                    
                    Actuellement, je vis chez mes parents et je me consacre pleinement à mon évolution en tant que développeur front-end, en travaillant sur des projets personnels et en perfectionnant mes compétences.`
        },
        {
            src: School_career,
            alt: "School career",
            text: `Mon parcours académique et professionnel a connu plusieurs évolutions. J'ai commencé par trois années en Bac Pro Pilote de Ligne de Production (PLP), puis j'ai effectué une année en Bac Pro Maintenance des Équipements Industriels (MEI) après un redoublement, bien que mon Bac PLP ait été validé grâce à mes bons résultats. Cependant, le monde industriel ne me correspondant pas, j'ai décidé de me réorienter vers l'informatique, un domaine qui me passionne et qui est en constante évolution.

                    J'ai donc poursuivi mes études avec un BTS Systèmes Numériques Informatique et Réseaux (SNIR), qui alliait à la fois la programmation et les réseaux. Après cela, j'ai connu une année sabbatique en service civique, car mes vœux pour une Licence Développement Web ont été refusés, faute d'avoir postulé dans suffisamment d'établissements. Heureusement, l'Université d'Évry (91) a accepté ma candidature pendant cette année, et j'ai pu intégrer une Licence Professionnelle Développement Web.

                    Cette année de licence a été particulièrement éprouvante en raison d'un trajet quotidien de 5h30 aller-retour, ce qui m'a demandé une grande rigueur et une forte endurance. Après mes études, j'ai pris deux ans de pause pour faire face à des problèmes personnels, passer mon permis de conduire, me reconstruire et me préparer à intégrer le monde du travail avec des projets personnels en développement web.`
        },
        {
            src: Why_front_end,
            alt: "Why front-end",
            text: `Je suis passionné par le métier de développeur front-end, car il me permet de donner vie à une maquette, d'apporter du design moderne et interactif, et de créer des interfaces fluides et agréables pour les utilisateurs. Ce que j'aime particulièrement, c'est la satisfaction des clients et des utilisateurs, lorsqu'ils voient un site bien conçu qui répond à leurs attentes.

                    D'un point de vue personnel, je suis aussi un grand passionné d'automobile depuis mon enfance, et je suis de très près la Formule 1. Cet univers de vitesse, de précision et d'innovation m'inspire beaucoup dans ma manière de travailler et de chercher toujours à m'améliorer en tant que développeur.`
        },
        {
            src: Personnality,
            alt: "Personnality",
            text: `Je me décris comme quelqu'un de sérieux, car lorsque je m'engage dans un projet, je donne toute mon énergie pour le mener à bien. Ma curiosité me pousse constamment à explorer de nouvelles technologies et à apprendre de nouvelles choses.
                
                    J'ai un fort esprit d'équipe, car je crois que la collaboration est essentielle pour avancer efficacement et atteindre des objectifs communs. En tant que personne organisée, je fais en sorte de travailler méthodiquement pour éviter les erreurs et optimiser mon efficacité.

                    De nature calme, je sais rester concentré et ne pas me laisser perturber par les distractions extérieures. Enfin, je suis minutieux, car j'aime prendre soin des détails, que ce soit dans mon code ou dans mes interfaces, afin d'atteindre un résultat propre et professionnel.`
        }
        
    ]

    const carMovements = [0, 575, 900, 1125]; // distance en px pour chaque étape

    function showDiv(indexToShow) {

        all_div_hidden.current.forEach((div_hidden, i) => {

            if (div_hidden) {
                div_hidden.classList.toggle('hidden', i !== indexToShow);
            }

        });

        // Déplacer la voiture (valeurs à adapter selon ton design)
        const distance = carMovements[indexToShow] || 0;
        golf_8.current.style.transform = `translateX(${distance}px)`;
        golf_8.current.style.transition = "transform 1s";

        // Masquer tous les checkpoints sauf ceux à venir
        checkpoints.current.forEach((checkpoint, i) => {

            if (checkpoint) {
                checkpoint.style.visibility = i < indexToShow ? 'hidden' : 'visible';
            }

        });

        // Supprimer la classe animée de tous les checkpoints
        checkpoints.current.forEach(checkpoint => {
            checkpoint?.classList.remove("checkpoints_golf_animate");
        });

        // Ajouter la classe animée uniquement au prochain
        if (checkpoints.current[indexToShow]) {
            checkpoints.current[indexToShow].classList.add("checkpoints_golf_animate");
        }


    }


    function checkPoints(e) {

        e.preventDefault();

        if (numberClicks < all_div_hidden.current.length - 1) {

            const newIndex = numberClicks + 1;

            setNumberClicks(newIndex);

            showDiv(newIndex);

        }
    }

    function checkPoints_reverse(e) {

        e.preventDefault();

        if (numberClicks > 0) {

            const newIndex = numberClicks - 1;

            setNumberClicks(newIndex);

            showDiv(newIndex);

        }
    }


    return (
    
        <div className="global_container p-[50px]">

            {contents_div_hidden.map((content, index) => (

                <div key={index} className="hidden" ref={div_hidden => (all_div_hidden.current[index] = div_hidden)}>

                    <img src={content.src} className="

                        rounded-[100%] 
                        border-solid 
                        border-[3px] 
                        border-white 
                        w-[150px] 
                        h-[150px] 
                        ml-auto 
                        mr-auto 
                        mb-[50px]

                    " alt={content.alt}/>

                    <p className="mb-[50px] whitespace-pre-line">

                        {content.text}

                    </p>
                    
                </div>

            ))}

            <div className="mt-[100px] grid grid-cols-3 gap-4 items-end ">

                <div className="col-span-1">
                    <img src={Golf_8} ref={golf_8} className="w-[300px] h-[125px] golf_8"/>
                </div>

                <div className="col-span-2 mb-[5px]">

                    <div className="grid grid-cols-3 gap-4 flex justify-end text-[60px]">

                        {[0, 1, 2].map((_, i) => (

                            <div className="flex justify-end" key={i}>
                                <p ref={el => checkpoints.current[i] = el} className="checkpoints_golf_animate">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </p>
                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <hr className="mb-[5px] border-[2px] border-solid border-white"/>
            <hr className="border-[2px] border-solid border-white"/>

            <div className="mt-[50px] grid grid-cols-2 gap-10 ">

                <div className="flex justify-end">
                    <button className="brake_pedal_button" onClick={checkPoints_reverse}>
                        <div className="Image_hover">
                        <img src={Brake_pedal} className="w-[150px] h-[150px] pedal_icons" alt="Brake pedal"/>
                        <img src={Brake_pedal_hover} className="w-[150px] h-[150px] pedal_icons_hover" alt="Brake pedal"/>
                        </div>
                    </button>
                </div>
                <div className="flex justify-start">
                    <button className="accelerator_pedal_button" onClick={checkPoints}>
                        <div className="Image_hover">
                            <img src={Accelerator_pedal} className="w-[150px] h-[150px] pedal_icons" alt="Accelerator pedal"/>
                            <img src={Accelerator_pedal_hover} className="w-[150px] h-[150px] pedal_icons_hover" alt="Accelerator pedal"/>
                        </div>
                    </button>
                </div>


            </div>

        </div>
    
    )
  
  }