import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header () {

    const location = useLocation()

    const pages = [

        { path: "/", title: "Bienvenue sur mon portfolio !" },
        { path: "/about_us", title: "Qui suis-je ?" },
        { path: "/my_projects", title: "Mes projets" },
        { path: "/skills", title: "Compétences" },
        { path: "/contact_me", title: "Contact" },
        { path: "/certification", title: "Certifications" },
        { path: "/hobbies", title: "Loisirs" }

    ];

    const currentPage = pages.findIndex((page) => page.path === location.pathname)
    const prevPage = pages[currentPage - 1]
    const nextPage = pages[currentPage + 1]
    const currentTitlePage = pages[currentPage]?.title || "Bienvenue sur mon portfolio !"

    // Si on est sur la Home, pas de flèches
    if (location.pathname === "/") {

        return (

            <header className="
                h-[75px]
                bg-[url('picture/Pattern_header.svg')] 
                bg-cover 
                bg-center 
                bg-no-repeat  
                border-solid 
                border-[3px] 
                border-white
                flex 
                items-center
                justify-center
            ">
                <h1 className="text-center text-3xl font-bold">{currentTitlePage}</h1>
            </header>

        )

    }

    // Pour les autres pages : flèches + titre
    return (

        <header className="
            h-[75px]
            bg-[url('picture/Pattern_header.svg')] 
            bg-cover 
            bg-center 
            bg-no-repeat  
            border-solid 
            border-[3px] 
            border-white
            flex 
            items-center
            justify-center
            gap-6
        ">

            {/* Flèche gauche */}
            { prevPage && (

                <Link to={prevPage.path}>
                    <FontAwesomeIcon icon={faArrowLeft} className="text-3xl cursor-pointer" />
                </Link>

            )}

            {/* Titre dynamique */}
            <h1 className="text-center text-3xl font-bold">{currentTitlePage}</h1>

            {/* Flèche droite */}
            {nextPage && (

                <Link to={nextPage.path}>
                    <FontAwesomeIcon icon={faArrowRight} className="text-3xl cursor-pointer" />
                </Link>

            )}

        </header>
    );
  
}