import { useState, useEffect } from "react";

export default function Contact_me () {

    const [time, setTime] = useState(

        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    )

    useEffect(() => {
        
        const interval = setInterval(() => {

            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

        }, 1000)

        return () => clearInterval(interval) // nettoyage du timer

    }, [])


    return (

        <>

            <h1 className="mt-[50px] text-2xl text-center underline min-[426px]:hidden"> Contactez-moi </h1>

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
                                    <span>{time}</span>
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
                                            <a href="https://www.linkedin.com/in/nacerallah-bouamama-12075b251/" target="_blank" rel="noopener noreferrer">
                                                <div className="linkedin__app">
                                                    <div className="linkedin__app__logo"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="application_phone">
                                            <a href="https://github.com/Nacer-78" target="_blank" rel="noopener noreferrer">
                                                <div className="github__app">
                                                    <div className="github__app__logo"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="application_phone">
                                            <a href="/Portfolio_Nacer/files/Nacerallah_BOUAMAMA_CV_2025_Flouter.pdf" target="_blank" rel="noopener noreferrer">
                                                <div className="cv__app">
                                                    <div className="cv__app__logo"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="application_phone">
                                            <a href="https://codepen.io/Nacer-78" target="_blank" rel="noopener noreferrer">
                                                <div className="codepen__app">
                                                    <div className="codepen__app__logo"></div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                                <div className="screen__time">
                                    <span>{time}</span>
                                </div>

                            </div>
                        
                        </div>

                    </div>

                </div>

            </div>
        
        </>

    )

}