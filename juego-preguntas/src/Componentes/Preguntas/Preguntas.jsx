import React, {useEffect, useState} from "react";
import styles from './Preguntas.module.css';

import { RoundOne } from "./RoundOne";
import { RoundTwo } from "./RoundTwo";
import { RoundThree } from "./RoundThree";
import { RoundFour } from "./RoundFour";
import { RoundFive } from "./RoundFive";

import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../database";




export function Preguntas(){

    const initialStateValues = {
        question: '',
        id: '',
        category: 'test',
        respond1: '',
        respond2: '',
        respond3: '',
        respond4: '',
        // guardar_categoria: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const getQuestion = async () => {
        await db.collection("question").onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setValues(docs);
         console.log(docs);
        });
      };
    
      useEffect(() => {
        getQuestion();
      }, []);

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