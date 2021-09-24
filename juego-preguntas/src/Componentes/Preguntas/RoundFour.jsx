import React from 'react';
import styles from './Preguntas.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';


export function RoundFour(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form className="row g-3 needs-validation" >
                                <h2>Ronda 4 - JavaScript</h2>
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p4">¿Qué es una Variable?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="se-usa-en-html">Es una etiqueta que se usa en HTML.</option>
                                        <option value="espacio-en-memoria">Es un espacio en memoria donde se guardan datos que se pueden modificar en el transcurso del algoritmo.</option>
                                        <option value="es-un-tipo-dato">Es un tipo de dato</option>
                                        <option value="no-se-modifica">Es un espacio en memoria donde se guardan datos que NO se pueden modificar.</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p4">¿Cual SI es un tipo de dato?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="for">For</option>
                                        <option value="const">Const</option>
                                        <option value="mysql">Boolean</option>
                                        <option value="variable">Variable</option>
                                    </select>
                                </div>

                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p4">¿Qué significa ===?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="3-iguales">3 iguales.</option>
                                        <option value="estricto">Que es estricto y debe ser el mismo valor y tipo de dato.</option>
                                        <option value="no-importa-estricto">No tiene que ser estricto el tipo de dato y el valor.</option>
                                        <option value="c">Significa igual. ej: A es igual a 10</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p4">¿Para qué sirve la función isNaN?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="java-igual-javascript">Para saber si es Java o Javascript.</option>
                                        <option value="para-ciclos">Para crear ciclos.</option>
                                        <option value="para-condiciones">Se usa para crear una condición.</option>
                                        <option value="si-no-es-numero">La función isNan devuelve verdadero si el argumento no es un número porque de lo contrario arrojaría un falso.</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p4">¿Qué empresa desarrolló Javascript?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="netscape">Netscape</option>
                                        <option value="microsoft">Microsoft</option>
                                        <option value="ibm">Ibm</option>
                                        <option value="google">Google</option>
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