import { useRef, useState, useEffect } from 'react'

import file_certificate from './picture/file_certificate.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Certification () {

    const itemsRef = useRef([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const moveLeft = () => {
        setCurrentIndex(prev => (prev - 1 + itemsRef.current.length) % itemsRef.current.length)
    }

    const moveRight = () => {
        setCurrentIndex(prev => (prev + 1) % itemsRef.current.length)
    }

    useEffect(() => {

        // Retirer toutes les classes actives
        itemsRef.current.forEach((item, index) => {
        if (item) {
            item.classList.remove('active_certification')
        }
        })

        // Ajouter la classe active à l'élément courant
        if (itemsRef.current[currentIndex]) {
            itemsRef.current[currentIndex].classList.add('active_certification')
        }
    }, [currentIndex])

    return (
        
        <div className="container_certification">

            <div className="carousel_certifications">

                <div className="carousel__nav">

                    <span id="moveLeft" className="carousel__arrow" onClick={moveLeft}>
                        <FontAwesomeIcon icon={faArrowLeft} />  
                    </span>

                    <span id="moveRight" className="carousel__arrow" onClick={moveRight}>
                        <FontAwesomeIcon icon={faArrowRight} />  
                    </span>

                </div>

                <div className="carousel_item_certification carousel_item_1" ref={(el) => (itemsRef.current[0] = el)}>

                    <div className="carousel_item__image">
                        <img src={file_certificate} alt="diplome" className="carousel_item__diploma" />
                    </div>

                    <div className="carousel_item__info">

                        <div className="carousel_item__container">

                            <h2 className="carousel_item__subtitle"> 2019/2021 2 ans </h2>
                            <h1 className="carousel_item__title"> BTS SNIR </h1>
                            <p className="carousel_item__description">Mon tout premier diplôme, c'est un BTS Systèmes Numériques - Informatique et Réseaux, que j'ai décroché au lycée Jules Ferry à Versailles. Pendant deux ans, j'ai pu toucher à pas mal de choses, entre la programmation et l'administration réseau, ce qui m'a permis de construire une bonne base technique pour la suite de mon parcours.</p>
                            <a href="#" className="carousel_item__btn"> 29 Rue du Maréchal Joffre, 78000 Versailles</a>
                        
                        </div>

                    </div>
                </div>

                <div className="carousel_item_certification carousel_item_2" ref={(el) => (itemsRef.current[1] = el)}>

                    <div className="carousel_item__image">
                        <img src={file_certificate} alt="diplome" className="carousel_item__diploma" />
                    </div>

                    <div className="carousel_item__info">

                        <div className="carousel_item__container">
                            
                            <h2 className="carousel_item__subtitle"> 2022/2023 1 an </h2>
                            <h1 className="carousel_item__title">LP MIAW</h1>
                            <p className="carousel_item__description">Mon second diplôme est une Licence Professionnelle Métiers de l'Informatique - Applications Web, obtenue à l'IUT d'Évry. Cette formation intensive d'un an m'a permis de me spécialiser pleinement dans le développement web, un domaine qui me passionne particulièrement. Ce choix marque également la fin de mon parcours académique, avec pour objectif clair de m'orienter vers une carrière de développeur front-end.</p>
                            <a href="#" className="carousel_item__btn">25 Cr Mgr Roméro, 91000 Évry-Courcouronnes</a>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>

    )

}