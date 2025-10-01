import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer () {
    
    return (

        <footer>
            <h1 className="m-[30px] text-center text-sm sm:text-3xl color_footer"> <FontAwesomeIcon icon={faCopyright} /> Developped by Nacerallah Bouamama </h1>
        </footer>
    
    )
  
}