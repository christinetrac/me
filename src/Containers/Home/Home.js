import React, { useState } from 'react';
import Slider from "react-slick";
import styles from './Home.module.css';
import resume from '../../Assets/ChristineTrac_Resume.pdf';
import leftArrow from '../../Assets/arrow_left.svg';
import rightArrow from '../../Assets/arrow_right.svg';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { miniProjects } from "../../Constants/constants";

export default function Home(props) {
    const [index, setIndex] = useState(0);

    const LeftArrow = ({ currentSlide, slideCount, style, ...props }) => (
        <img src={leftArrow} alt="previous" style={{...style, display: index === 0 && 'none'}} {...props} />
    );

    const RightArrow = ({ currentSlide, slideCount, style, ...props }) => (
        <img src={rightArrow} alt="next" style={{...style, display: index === 2.9 && 'none'}} {...props} />
    );
    console.log(index);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        beforeChange: (current, next) => setIndex(next)
    };

    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.introContainer}>
                <div className={styles.title}>Nice to meet you! I’m Christine.</div>
                <div className={styles.subtitle}>
                    An experienced <span>Frontend Engineer</span> with a passion for UI and software.
                    Currently a 3rd year Computer Engineering student at the University of Waterloo.
                </div>
                <button
                    onClick={() => {
                        window.open(resume, "_blank");
                    }}
                >
                    See My Resume
                </button>
            </div>
            <Slider {...settings} className={styles.slider}>
                {miniProjects.map((project, i) => (
                    <div key={project.name} className={styles.cardContainer}>
                        <div className={[styles.card, `card${i}`].join(" ")}>
                            <div className={styles.tag}>
                                {project.tag}
                            </div>
                            <img className={styles.mockup} src={project.mockup} alt={project.name}/>
                        </div>
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
