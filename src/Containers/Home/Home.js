import React from 'react';
import Slider from "react-slick";
import styles from './Home.module.css';
import resume from '../../Assets/ChristineTrac_Resume.pdf';
import leftArrow from '../../Assets/arrow-left.svg';
import rightArrow from '../../Assets/arrow_right.svg';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { miniProjects } from "../../Constants/constants";

const LeftArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={leftArrow} alt="previous" {...props} />
);

const RightArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={rightArrow} alt="next" {...props} />
);

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
};

export default function Home(props) {
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
                    <div key={project.name} className={[styles.card, `card${i}`].join(" ")}>
                        {project.name}
                    </div>
                ))}
            </Slider>
        </Background>
    )
}
