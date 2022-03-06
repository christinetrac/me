import React from 'react';
import styles from './Home.module.css';
import resume from '../../Assets/ChristineTrac_Resume.pdf';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";

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
        </Background>
    )
}
