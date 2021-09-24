import React from 'react';
import styles from './Preguntas.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';


export function RoundFive(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form  className="row g-3 needs-validation" >
                                <h2>Ronda 5 - Comandos en Terminal</h2>
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p5">¿Con cual de los siguientes comandos miro la ubicación actual de directorios?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="pwd">Pwd</option>
                                        <option value="ls">Ls</option>
                                        <option value="cd">Cd</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p5">¿Con cual de los siguientes comandos me devuelvo un directorio?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="pwd">Pwd</option>
                                        <option value="ls">Ls</option>
                                        <option value="cd">Cd</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>

                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p5">¿Con cual de los siguientes comandos listo los archivos de un Directorio?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="pwd">Pwd</option>
                                        <option value="ls">Ls</option>
                                        <option value="cd">Cd</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p5">¿Cual comando me sirve para crear un Directorio?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="pwd">Pwd</option>
                                        <option value="ls">Ls</option>
                                        <option value="mkdir">Mkdir</option>
                                        <option value="ninguno">Ninguno</option>
                                    </select>
                                </div>
                                
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p5">¿Cual comando me sirve Cancelar un comando que se encuentra en ejecución?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="ctrl-c">Ctrl + C</option>
                                        <option value="ls">Ls</option>
                                        <option value="mkdir">Mkdir</option>
                                        <option value="ninguno">Ninguno</option>
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