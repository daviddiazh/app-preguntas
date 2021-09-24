import React from 'react';
import styles from './Preguntas.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';


export function RoundThree(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form className="row g-3 needs-validation" >
                                <h2>Ronda 3 - Desarrollo Web Front-end</h2>
                                <div className={styles.preguntas}>
                                    <label dataCategoria="round3" htmlFor="wp-p3">¿Es React JS una Librería o Framework?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="framework">Es un Framework</option>
                                        <option value="libreria">Es una Librería</option>
                                        <option value="los-dos">Los Dos</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p3">¿Es Angular JS una Librería o Framework?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="framework">Es un Framework</option>
                                        <option value="libreria">Es una Librería</option>
                                        <option value="los-dos">Los Dos</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>

                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p3">¿Qué lenguaje de programación soportan los Navegadores?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="java">Java</option>
                                        <option value="php">Php</option>
                                        <option value="javascript">Javascript</option>
                                        <option value="c">C</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p3">¿Qué es una PWA?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="pagina-internet">Es una página de internet</option>
                                        <option value="lenguaje-programación">Es un lenguaje de programación</option>
                                        <option value="app-mobile">Una app mobile</option>
                                        <option value="app-web-progresiva">Una aplicación web progresiva es un tipo de software de aplicación que se entrega a través de la web, creado utilizando tecnologías web comunes como HTML, CSS y JavaScript. Está destinado a funcionar en cualquier plataforma que use un navegador compatible con los estándares.</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p3">¿Qué es JSX?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="codigo-javascript">Es un código de JavaScript</option>
                                        <option value="iniciales-javascript">Son las iniciales de JavaScript</option>
                                        <option value="similar-html">Estructura similar a HTML pero que NO lo es, y se usa en React.</option>
                                        <option value="codigo-react">Es un código de React JS</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-warning fw-bold">Enviar</button>
                                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}