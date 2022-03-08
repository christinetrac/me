import React from 'react';
import Background from "../../Components/Background/Background";
import Navigation from "../../Components/Navigation/Navigation";

export default function Acnh(props) {
    return (
        <Background>
            <Navigation {...props} />
        </Background>
    )
}
