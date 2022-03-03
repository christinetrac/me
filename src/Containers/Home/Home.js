import React from 'react';
import styles from './Home.module.css';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";

export default function Home(props) {
    return (
        <Background>
            <Navigation {...props} />
        </Background>
    )
}
