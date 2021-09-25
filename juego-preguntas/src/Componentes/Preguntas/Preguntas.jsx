import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../database";


export function Preguntas() {

    const [questions, setQuestions] = useState([]);
    const docs = [];



    const getQuestion = async () => {
        await db.collection("question").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setQuestions(docs);
        });
    };

    useEffect(() => {
        getQuestion();
    }, []);



    return (
        <>
            <div className="container">
                <div className="row">
                    {questions.map((question) => (
                        <div key={question.id} className="">
                            <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                                <form className="row g-3 needs-validation" >
                                    <h4>{question.question}</h4>
                                    <option>Ronda/Categoría -  {question.category}</option>
                                    <select name="" id="">
                                        <option>{question.respond}</option>
                                        <option>{question.respond1}</option>
                                        <option>{question.respond2}</option>
                                        <option>{question.respond3}</option>
                                        <option>{question.respond4}</option>
                                    </select>
                                    
                                    <button type="submit" className="btn btn-primary fw-bold">Enviar</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
