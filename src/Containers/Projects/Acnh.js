import React from 'react';
import styles from './Projects.module.css';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { acnh } from "../../Constants/constants";

export default function Acnh(props) {
    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.container}>
                <div className={styles.title}>{acnh.title}</div>
                <div className={styles.description}>{acnh.subtitle}</div>
                <button
                    onClick={() => {
                        window.open(acnh.github, "_blank");
                    }}
                >
                    See the Github
                </button>
                <button
                    onClick={() => {
                        window.open(acnh.figma, "_blank");
                    }}
                >
                    See the Figma
                </button>
                <div className={styles.gifContainer}>
                    {acnh.gifs.map(gif => (
                        <img src={gif} className={styles.gif} alt="gif"/>
                    ))}
                </div>
                <div className={styles.subtitle}>Technologies</div>
                <div className={styles.pillContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>react native</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>javascript</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>css</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>rest api</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>figma</div>
                </div>
                <div className={styles.subtitle}>Responsibilities</div>
                <div className={styles.pillContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>frontend dev</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>designer</div>
                </div>
                <div className={styles.subtitle}>Highlights</div>
                <div className={styles.highlight}>
                    {acnh.highlights[0]}
                </div>
                <div className={styles.highlight}>
                    {acnh.highlights[1]}
                </div>
            </div>
        </Background>
    )
}
