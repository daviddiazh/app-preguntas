import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../database";


export function Preguntas() {

    const initialStateRespuesta = {
        id: '',
        respuesta_correcta: ''
    }

    const [respuesta, setRespuesta] = useState(initialStateRespuesta);


    function handleOptionChangeRespuesta(e) {
        const { name, value } = e.target;
        setRespuesta({ ...respuesta, [name]: value })
    }

    const handleSubmitRespuesta = async (e) => {
        e.preventDefault();
        console.log(respuesta);
    }


    const [questions, setQuestions] = useState([]);
    const docs = [];
    var docsF = [];


    const getQuestion = async () => {
        await db.collection("question").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });

            docsF = docs.filter(x => x.category === 'Wordpress')
            setQuestions(docsF);
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
                                <form className="row g-3 needs-validation" onSubmit={handleSubmitRespuesta} >
                                    <h4>{question.question}</h4>
                                    <option>Ronda/Categoría -  {question.category}</option>
                                    <select name="respuesta_correcta" id="" value={respuesta.respuesta_correcta} onChange={handleOptionChangeRespuesta}>
                                        <option>{question.respond}</option>
                                        <option value={respuesta.respond1}>{question.respond1}</option>
                                        <option value={respuesta.respond2}>{question.respond2}</option>
                                        <option value={respuesta.respond3}>{question.respond3}</option>
                                        <option value={respuesta.respond4}>{question.respond4}</option>
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