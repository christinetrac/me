import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from './Home.module.css';
import resume from '../../Assets/ChristineTrac_Resume.pdf';
import leftArrow from '../../Assets/arrow_left.svg';
import rightArrow from '../../Assets/arrow_right.svg';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { projects } from "../../Constants/constants";

export default function Home(props) {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [index, setIndex] = useState(0);

    const LeftArrow = ({ currentSlide, slideCount, style, ...props }) => (
        <img
            src={leftArrow}
            alt="previous"
            style={{...style, display: index === 0 && 'none'}}
            {...props}
        />
    );

    const RightArrow = ({ currentSlide, slideCount, style, ...props }) => (
        <img
            src={rightArrow}
            alt="next"
            style={{...style, display: index === lastIndex() && 'none'}}
            {...props}
        />
    );

    const lastIndex = () => {
        if(windowSize.width > 2500){
            return 0.9000000000000004;
        } else if (windowSize.width > 2100){
            return 1.5;
        } else if (windowSize.width > 1700){
            return 2.5;
        } else if (windowSize.width > 1500){
            return 2.9;
        } else if (windowSize.width > 1250){
            return 3.4;
        } else if (windowSize.width > 1120){
            return 3.8;
        } else if (windowSize.width > 950){
            return 3.9;
        } else if (windowSize.width > 850){
            return 4.1;
        } else {
            return 0;
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5.1,
        slidesToScroll: 1,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 4.5,
                }
            },
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3.1,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1.9,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1.7,
                    arrows: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1.5,
                    arrows: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1.3,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                    arrows: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.4,
                    arrows: false
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1.3,
                    arrows: false
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.2,
                    arrows: false
                }
            },
            {
                breakpoint: 405,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.05,
                    arrows: false
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    };

    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.introContainer}>
                <div className={styles.title}>Nice to meet you! I’m Christine.</div>
                <div className={styles.subtitle}>
                    An experienced <span>Frontend Engineer</span> with a passion for UI and software.
                    Currently in junior year studying Computer Engineering at the University of Waterloo.
                    Open to Winter 2023 internship opportunities. 
                </div>
                <button
                    className={props.isMobile && styles.noMargin}
                    onClick={() => {
                        window.open(resume, "_blank");
                    }}
                >
                    See My Resume
                </button>
            </div>
            <Slider {...settings} className={styles.slider}>
                {projects.map((project, i) => (
                    <div className={styles.cardContainer}>
                        <Link to={project.to} key={project.name}>
                            <div className={[styles.card, `card${i}`].join(" ")}>
                                <div className={styles.tag}>
                                    {project.tag}
                                </div>
                                <img className={styles.mockup} src={project.mockup} alt={project.name}/>
                            </div>
                        </Link>
                        <div className={styles.name}>
                            {project.name}
                        </div>
                        <div className={styles.description}>
                            {project.description}
                        </div>
                    </div>
                ))}
            </Slider>
        </Background>
    )
}
