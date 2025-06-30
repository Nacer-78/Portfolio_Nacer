import { useEffect } from 'react';

import Card1 from './picture/Card1_First-Portfolio.png';
import Card2 from './picture/Card2_Projet_tutore.png';
import Card3 from './picture/Card3_Monitoring.png';

export default function My_projects () {

    return (
        
        <div className="carousel_wrapper">

            <div className="container_projects">

                <input type="radio" name="slider" id="item_1" defaultChecked />
                <input type="radio" name="slider" id="item_2" />
                <input type="radio" name="slider" id="item_3" />

                <div className="player">

                    <div className="upper_part">

                        <div className="info_area" id="test">

                            <label>
                                
                                <div className="carousel_title">
                                    <a href="#">Premier portfolio</a>
                                </div>

                            </label>

                            <label>

                                <div className="carousel_title">
                                    <a href="#">Site UMI</a>
                                </div>

                            </label>

                            <label>

                                <div className="carousel_title">
                                    <a href="#">Le monitoring</a>
                                </div>

                            </label>
                            
                        </div>

                    </div>

                </div>
                
                <div className="cards">
                    
                    <label className="card" htmlFor="item_1" id="project_1">

                        <img className="cover_project" src={Card1} alt="song" />

                        <p className="carousel_description">
                            Ce projet marque le tout début de mon aventure dans le développement web. Réalisé durant ma licence professionnelle, ce 
                            portfolio a été entièrement codé à la main en HTML, CSS et JavaScript, sans l'aide d'aucun framework. L'objectif principal 
                            était de me familiariser avec les bases du front-end tout en mettant en avant mon parcours et mes premières compétences. 
                            Simple mais efficace, ce projet témoigne de mes débuts et de ma volonté d'apprendre.
                        </p>

                    </label>

                    <label className="card" htmlFor="item_2" id="project_2">

                        <img className="cover_project" src={Card2} alt="song" />

                        <p className="carousel_description">
                            Conception d'un site vitrine pour un particulier proposant des services autour des unités mobiles et incendies (UMI). Ce 
                            projet avait pour but de valoriser son activité et de lui offrir une présence en ligne professionnelle. La version présentée 
                            ici est celle en phase de développement, car le site final mis en ligne sur un serveur a depuis été fermé. Ce projet m'a 
                            permis d'aborder les aspects pratiques de la création de site pour un client réel, avec ses besoins spécifiques et ses 
                            contraintes.
                        </p>

                    </label>

                    <label className="card" htmlFor="item_3" id="project_3">

                        <img className="cover_project" src={Card3} alt="song" />

                        <p className="carousel_description">
                            Dans le cadre de mon alternance en licence professionnelle, l'entreprise m'a confié la refonte complète d'un outil de 
                            monitoring vieillissant. Ce site avait pour mission de détecter et alerter le pôle informatique en cas de dysfonctionnements 
                            sur divers services. J'ai été chargé de moderniser l'interface, améliorer l'ergonomie et renforcer la lisibilité des alertes. 
                            Ce projet m'a permis de travailler sur un outil en production, utilisé quotidiennement par l'équipe informatique, avec de 
                            vraies responsabilités. Ayant quitté l'entreprise à la fin de mon contrat, je n'ai malheureusement plus accès au site final. 
                            À la place, je présente le rapport de ma soutenance qui détaille le projet, les enjeux, ainsi que les solutions techniques 
                            mises en place.
                        </p>

                    </label>

                </div>

            </div>

        </div>

    )

}