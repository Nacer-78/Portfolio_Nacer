import GT7 from './picture/Gran_turimso_7.jpg';
import RL from './picture/Rocket_league.jpg';
import GTA6 from './picture/GTA_6.jpg';
import F1 from './picture/F1.png';
import EO31 from './picture/Esteban_Ocon.jpg';

export default function Hobbies () {

    return (

        <>
        
            <h1 className="mt-[50px] text-[30px] text-center underline"> Jeux-vidéos Playstation 5 </h1>

            <div className="mt-[50px] grid grid-cols-3">

                <div className="flex justify-end">
                    <a href="https://www.gran-turismo.com/fr/gt7/top/" target="_blank" rel="noopener noreferrer">
                        <img src={GT7} className="w-[200px] h-[200px] picture_hobbies" alt="GT7"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.rocketleague.com/fr/" target="_blank" rel="noopener noreferrer">
                        <img src={RL} className="w-[200px] h-[200px] picture_hobbies" alt="Rocket League"/>
                    </a>
                </div>
                <div className="flex justify-start">
                    <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer">
                        <img src={GTA6} className="w-[200px] h-[200px] picture_hobbies" alt="GTA 6"/>
                    </a>
                </div>

            </div>

            <div className="m-[50px] text-[15px]">

                <h2 className="mb-[5px] underline"> Gran Turismo 7 : </h2>

                <p className="mb-[20px]"> Fidèle à la licence depuis le quatrième opus sur Playstation 2. C'est grâce à ce jeu exceptionnel que j'ai développé cette passion pour l'automobile. </p>

                <h2 className="mb-[5px] underline"> Rocket League : </h2>

                <p className="mb-[20px]"> Jeu unique en son genre qui mélange voiture et football. Ce jeu à l'air simple mais demande des compétences accrues. </p>

                <h2 className="mb-[5px] underline"> GTA 6 : </h2>

                <p className="mb-[20px]"> Tout simplement le meilleur jeu de tout les temps qui sortira le 26 mai 2026. </p>

            </div>

            <h1 className="mt-[75px] text-[30px] text-center underline"> Formule 1 </h1>

            <div className="mt-[50px] grid grid-cols-2 gap-10 lg:gap-30">

                <div className="flex justify-end">
                    <a href="https://www.formula1.com/" target="_blank" rel="noopener noreferrer">
                        <img src={F1} className="w-[200px] h-[200px] picture_hobbies" alt="Formule 1"/>
                    </a>
                </div>
                <div className="flex justify-start">
                    <a href="https://fr.esteban-ocon.com/" target="_blank" rel="noopener noreferrer">
                        <img src={EO31} className="w-[200px] h-[200px] picture_hobbies" alt="Esteban Ocon"/>
                    </a>
                </div>

            </div>

            <div className="m-[50px] pb-[50px] text-[15px]">

                <h2 className="mb-[5px] underline"> Formule 1 : </h2>

                <p className="mb-[20px]"> Etant passionné par l'automobile, la passion pour ce sport a naturellement émergé en 2020 durant le covid, depuis je ne loupe plus aucun grand prix. Un sport qui démontre des capacités athlétiques pour des pilotes qui conduisent des monoplaces à plus de 300km/h ! </p>

                <h2 className="mb-[5px] underline"> Esteban Ocon : </h2>

                <p className="mb-[20px]"> Mon pilote préféré est sans hésitation Esteban Ocon. Son histoire est aussi inspirante que touchante : issu d'un milieu modeste, son père a tout sacrifié pour lui permettre de vivre son rêve, allant jusqu'à vendre la maison familiale pour financer sa carrière. Esteban n'a jamais eu la voie facile, et pourtant, il a su montrer un véritable talent, notamment en battant Max Verstappen dans les catégories juniors. Aujourd'hui encore, il est souvent considéré comme le mal aimé de la F1, sous-estimé malgré ses performances. Il doit sans cesse se dépasser pour prouver sa valeur, et c'est justement cette combativité, cette humilité et cette détermination qui m'inspirent profondément. </p>

            </div>


        </>

    )

}