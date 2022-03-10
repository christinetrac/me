import React from 'react';
import styles from './Projects.module.css';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { dimension, buddyLinks } from "../../Constants/constants";

export default function Dimension(props) {
    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.container}>
                <div className={styles.title}>{dimension.title}</div>
                <div className={styles.description}>{dimension.subtitle}</div>
                <button
                    onClick={() => {
                        window.open(dimension.github, "_blank");
                    }}
                >
                    See the Github
                </button>
                <button
                    onClick={() => {
                        window.open(dimension.devpost, "_blank");
                    }}
                >
                    See the Devpost
                </button>
                <div className={styles.gifContainer}>
                    {dimension.gifs.map(gif => (
                        <img src={gif} className={styles.dimensionGif} alt="gif"/>
                    ))}
                </div>
                <div className={styles.subtitle}>Technologies</div>
                <div className={styles.pillContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>react native</div>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>three.js</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>javascript</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>css</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>python</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>express</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>cassandra</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>node.js</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>figma</div>
                </div>
                <div className={styles.subtitle}>Responsibilities</div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>frontend dev</div>
                    <div className={styles.pillName}>
                        Christine Trac
                        &&nbsp;
                        <a href={buddyLinks.jacob}>
                            Jacob Nishimura
                        </a>
                    </div>
                </div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>backend dev</div>
                    <div className={styles.pillName}>
                        <a href={buddyLinks.andrew}>
                            Andrew Choi
                        </a>
                    </div>
                </div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>designer</div>
                    <div className={styles.pillName}>
                        <a href={buddyLinks.rachel}>Rachel Pun</a>
                    </div>
                </div>
                <div className={styles.subtitle}>Highlights</div>
                <div className={styles.highlight}>
                    {dimension.highlights}
                </div>
            </div>
        </Background>
    )
}
