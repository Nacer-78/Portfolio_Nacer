import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faGitAlt, faFigma, faWordpress  } from '@fortawesome/free-brands-svg-icons';
import { faTabletScreenButton, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Skills () {

    const skills = [

        { title: 'HTML', icon: faHtml5, level: '100%' },
        { title: 'CSS', icon: faCss3Alt, level: '80%' },
        { title: 'JS', icon: faSquareJs, level: '60%' },
        { title: 'React', icon: faReact, level: '50%' },
        { title: 'Git', icon: faGitAlt, level: '50%' },
        { title: 'Figma', icon: faFigma, level: '70%' },
        { title: 'Responsive', icon: faTabletScreenButton, level: '40%' },
        { title: 'Débogage', icon: faCircleXmark, level: '40%' },
        { title: 'CMS', icon: faWordpress, level: '60%' }

    ];

    const bar_skills = useRef([]);

    const handleButtonClick = (index) => {

        const bar = bar_skills.current[index]

        if (bar) {

            bar.classList.remove('bar_fill')
            void bar.offsetWidth
            bar.classList.add('bar_fill')

            bar.style.width = skills[index].level

        }

    };

    return (
        
        <div>

            <div className="m-[50px]">

                { skills.map((skill, index) => (

                    <div key={index} className="mt-[100px]">

                        <h1 className="text-3xl underline">{skill.title}</h1>

                        <div className="mt-[25px] grid grid-cols-5 gap-4 items-center">

                            <div className="pl-[0px] lg:pl-[25px]">
                                <button onClick={() => handleButtonClick(index)} className="w-[150px] h-[150px] flex items-center justify-center text-[75px] border-[2px] border-solid border-white rounded-full cursor-pointer button_skills"> 
                                    <FontAwesomeIcon icon={skill.icon} />
                                </button>
                            </div>

                            <div className="col-span-4 container_bar_skills">

                                <div className="bar">
                                    <div ref={(el) => (bar_skills.current[index] = el)} style={{ width: "0%" }}></div>
                                </div>

                            </div>

                        </div>

                    </div>

               ))}

            </div>

        </div>

    )

}