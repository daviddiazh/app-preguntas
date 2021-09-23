import React from "react";
import styles from './Preguntas.module.css';

import { RoundOne } from "./RoundOne";
import { RoundTwo } from "./RoundTwo";
import { RoundThree } from "./RoundThree";
import { RoundFour } from "./RoundFour";
import { RoundFive } from "./RoundFive";

import 'bootstrap/dist/css/bootstrap.min.css';


export function Preguntas(){
    return(
        <>
            <div className={styles.round1}>
                <RoundOne />
            </div>

            <div className={styles.round2}>
                <RoundTwo />
            </div>


            <div className={styles.round3}>
                <RoundThree />
            </div>

            <div className={styles.round4}>
                <RoundFour />
            </div>

            <div className={styles.round5}>
                <RoundFive />
            </div>
            
        </>
    )
}