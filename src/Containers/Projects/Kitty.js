import React from 'react';
import styles from './Projects.module.css';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { kitty, buddyLinks } from "../../Constants/constants";

export default function Kitty(props) {
    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.container}>
                <div className={styles.title}>{kitty.title}</div>
                <div className={styles.description}>{kitty.subtitle}</div>
                <button
                    onClick={() => {
                        window.open(kitty.github, "_blank");
                    }}
                >
                    See the Github
                </button>
                <button
                    onClick={() => {
                        window.open(kitty.devpost, "_blank");
                    }}
                >
                    See the Devpost
                </button>
                <div className={styles.gifContainer}>
                    {kitty.gifs.map(gif => (
                        <img src={gif} className={styles.gif} alt="gif"/>
                    ))}
                </div>
                <div className={styles.subtitle}>Technologies</div>
                <div className={styles.pillContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>react native</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>javascript</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>css</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>figma</div>
                </div>
                <div className={styles.subtitle}>Responsibilities</div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>frontend dev</div>
                    <div className={styles.pillName}>
                        Christine Trac
                    </div>
                </div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>designer</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>illustrator</div>
                    <div className={styles.pillName}>
                        <a href={buddyLinks.rachel}>Rachel Pun</a>
                    </div>
                </div>
                <div className={styles.subtitle}>Highlights</div>
                <div className={styles.highlight}>
                    {kitty.highlights}
                </div>
            </div>
        </Background>
    )
}
