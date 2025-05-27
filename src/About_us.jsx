import Me from './picture/Me.png';
import School_career from './picture/about_us_school_career.jpg';
import Why_front_end from './picture/about_us_why_front_end.jpg';
import Personnality from './picture/about_us_personnality.png';

import Golf_8 from './picture/golf_8.svg';



export default function About_us () {
    
    return (
    
        <div className="p-[50px]">

            <img src={Me} className="

                rounded-[100%] 
                border-solid 
                border-[3px] 
                border-white 
                w-[150px] 
                h-[150px] 
                ml-auto 
                mr-auto 
                mb-[50px]

            " alt="Me"/>

            <p className="mb-[50px]">

                Je m'appelle Nacerallah Bouamama, mais tout le monde m'appelle Nacer.
                <br/>
                J'ai 25 ans et je réside à Freneuse, une petite ville dans les Yvelines, pas très loin de la Normandie.
                <br/>
                Actuellement, je vis chez mes parents et je me consacre pleinement à mon évolution en tant que développeur front-end, en travaillant sur des projets personnels et en perfectionnant mes compétences.

            </p>

            <img src={School_career} className="

                rounded-[100%] 
                border-solid 
                border-[3px] 
                border-white 
                w-[150px] 
                h-[150px] 
                ml-auto 
                mr-auto 
                mb-[50px]

            " alt="School_career"/>

            <p className="mb-[50px]">

                Mon parcours académique et professionnel a connu plusieurs évolutions. J'ai commencé par trois années en Bac Pro Pilote de Ligne de Production (PLP), puis j'ai effectué une année en Bac Pro Maintenance des Équipements Industriels (MEI) après un redoublement, bien que mon Bac PLP ait été validé grâce à mes bons résultats. Cependant, le monde industriel ne me correspondant pas, j'ai décidé de me réorienter vers l'informatique, un domaine qui me passionne et qui est en constante évolution.
                <br/>
                <br/>
                J'ai donc poursuivi mes études avec un BTS Systèmes Numériques Informatique et Réseaux (SNIR), qui alliait à la fois la programmation et les réseaux. Après cela, j'ai connu une année sabbatique en service civique, car mes vœux pour une Licence Développement Web ont été refusés, faute d'avoir postulé dans suffisamment d'établissements. Heureusement, l'Université d'Évry (91) a accepté ma candidature pendant cette année, et j'ai pu intégrer une Licence Professionnelle Développement Web.
                <br/>
                <br/>
                Cette année de licence a été particulièrement éprouvante en raison d'un trajet quotidien de 5h30 aller-retour, ce qui m'a demandé une grande rigueur et une forte endurance. Après mes études, j'ai pris deux ans de pause pour faire face à des problèmes personnels, passer mon permis de conduire, me reconstruire et me préparer à intégrer le monde du travail avec des projets personnels en développement web.   

            </p>

            <img src={Why_front_end} className="

                rounded-[100%] 
                border-solid 
                border-[3px] 
                border-white 
                w-[150px] 
                h-[150px] 
                ml-auto 
                mr-auto 
                mb-[50px]

            " alt="Why_front_end"/>

            <p className="mb-[50px]">

                Je suis passionné par le métier de développeur front-end, car il me permet de donner vie à une maquette, d'apporter du design moderne et interactif, et de créer des interfaces fluides et agréables pour les utilisateurs. Ce que j'aime particulièrement, c'est la satisfaction des clients et des utilisateurs, lorsqu'ils voient un site bien conçu qui répond à leurs attentes.
                <br/>
                <br/>
                D'un point de vue personnel, je suis aussi un grand passionné d'automobile depuis mon enfance, et je suis de très près la Formule 1. Cet univers de vitesse, de précision et d'innovation m'inspire beaucoup dans ma manière de travailler et de chercher toujours à m'améliorer en tant que développeur.


            </p>

            <img src={Personnality} className="

                rounded-[100%] 
                border-solid 
                border-[3px] 
                border-white 
                w-[150px] 
                h-[150px] 
                ml-auto 
                mr-auto 
                mb-[50px]

            " alt="Personnality"/>

            <p className="mb-[50px]">

                Je me décris comme quelqu'un de sérieux, car lorsque je m'engage dans un projet, je donne toute mon énergie pour le mener à bien. Ma curiosité me pousse constamment à explorer de nouvelles technologies et à apprendre de nouvelles choses.
                <br/>
                <br/>
                J'ai un fort esprit d'équipe, car je crois que la collaboration est essentielle pour avancer efficacement et atteindre des objectifs communs. En tant que personne organisée, je fais en sorte de travailler méthodiquement pour éviter les erreurs et optimiser mon efficacité.
                <br/>
                <br/>
                De nature calme, je sais rester concentré et ne pas me laisser perturber par les distractions extérieures. Enfin, je suis minutieux, car j'aime prendre soin des détails, que ce soit dans mon code ou dans mes interfaces, afin d'atteindre un résultat propre et professionnel.


            </p>

            <div className="car_zone mt-[100px] grid grid-cols-3 gap-4">

                <div className="col-span-1">
                    <img src={Golf_8} className="w-[300px] h-[125px]"/> {/* 500 200 */ }
                </div>

                <div className="col-span-2">

                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="place-items-center">
                        <button> 1 </button>

                        </div>
                        <button> 2 </button>
                        <button> 3 </button>
                        <button> 4 </button>
                    </div>
                    
                </div>

            </div>

            <hr className="mb-[5px] border-[2px] border-solid border-white"/>
            <hr className="border-[2px] border-solid border-white"/>

        </div>
    
    )
  
  }