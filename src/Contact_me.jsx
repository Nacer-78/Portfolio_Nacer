import { Link } from 'react-router-dom';

export default function Contact_me () {

    return (
        
        <div className="container_contact_me">
        
            <div className="scene">

                <div className="scene__title">
                    <span>
                        Contactez-moi
                    </span>
                </div>

                <div className="phone__wrapper">

                    <div className="phone__frame">

                        <div className="camera">
                            <div className="camera__lens"></div>
                        </div>

                        <div className="screen">

                            <div className="time">
                                <span>11:11</span>
                            </div>

                            <div className="battery">
                                <div className="battery__life"></div>
                            </div>

                            <div className="screen__active">

                                <div className="applications__wrapper">

                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>
                                    <div className="application_phone"></div>

                                </div>
            
                                <div className="favorite__applications">

                                    <div className="application_phone">
                                        <Link to="https://www.linkedin.com/in/nacerallah-bouamama-12075b251/">
                                            <div className="linkedin__app">
                                                <div className="linkedin__app__logo"></div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="application_phone">
                                        <Link to="https://github.com/Nacer-78">
                                            <div className="github__app">
                                                <div className="github__app__logo"></div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="application_phone">
                                        <div className="cv__app">
                                            <div className="cv__app__logo"></div>
                                        </div>
                                    </div>

                                    <div className="application_phone">
                                        <Link to="https://codepen.io/Nacer-78">
                                            <div className="codepen__app">
                                                <div className="codepen__app__logo"></div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                            <div className="screen__time">
                                <span>11:11</span>
                            </div>

                        </div>
                    
                    </div>

                </div>

            </div>

        </div>

    )

}