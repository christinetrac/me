import React from 'react';
import styles from './Projects.module.css';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";
import { friendle, buddyLinks } from "../../Constants/constants";

export default function Friendle(props) {
    return (
        <Background>
            <Navigation {...props} />
            <div className={styles.container}>
                <div className={styles.title}>{friendle.title}</div>
                <div className={styles.description}>{friendle.subtitle}</div>
                <button
                    onClick={() => {
                        window.open(friendle.github, "_blank");
                    }}
                >
                    See the Github
                </button>
                <button
                    onClick={() => {
                        window.open(friendle.devpost, "_blank");
                    }}
                >
                    See the Devpost
                </button>
                <div className={styles.gifContainer}>
                    {friendle.gifs.map(gif => (
                        <img src={gif} className={styles.gif} alt="gif"/>
                    ))}
                </div>
                <div className={styles.subtitle}>Technologies</div>
                <div className={styles.pillContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>react native</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>javascript</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>css</div>
                    <div className={styles.pill} style={{color: "#D690B2"}}>python</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>rest api</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>firebase</div>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>node.js</div>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>figma</div>
                </div>
                <div className={styles.subtitle}>Responsibilities</div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#74ACE0"}}>frontend dev</div>
                    <div className={styles.pillName}>Christine Trac</div>
                </div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#6FC6C1"}}>backend dev</div>
                    <div className={styles.pillName}>
                        <a href={buddyLinks.jacob}>
                            Jacob Nishimura
                        </a>&nbsp;&&nbsp;
                        <a href={buddyLinks.andrew}>
                            Andrew Choi
                        </a>
                    </div>
                </div>
                <div className={styles.pillRoleContainer}>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>designer</div>
                    <div className={styles.pill} style={{color: "#8F8BDB"}}>illustrator</div>
                    <div className={styles.pillName}>
                        <a href={buddyLinks.rachel}>Rachel Pun</a>
                    </div>
                </div>
                <div className={styles.subtitle}>Highlights</div>
                <div className={styles.highlight}>
                    {friendle.highlights}
                </div>
            </div>
        </Background>
    )
}
