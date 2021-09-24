import React from 'react';
import styles from './Preguntas.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';


export function RoundOne(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form className="row g-3 needs-validation">
                                <h2>Ronda 1 - Wordpress</h2>
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p1">¿Wordpress permite instalar complementos hechos por terceros?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="no">No</option>
                                        <option value="solo-personalizados-propios">Solo personalizados propios</option>
                                        <option value="si">Si</option>
                                        <option value="si-en-com">Si pero en Wordpress.com</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p1">¿Cual es el motor de base de datos que usa Wordpress?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="sql">Sql Server</option>
                                        <option value="mongo-db">Mongo DB</option>
                                        <option value="mysql">MySql</option>
                                        <option value="postgresql">PostgreSQL</option>
                                    </select>
                                </div>

                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p1">¿En qué Lenguaje de programación esta construido Wordpress?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="java">Java</option>
                                        <option value="php">Php</option>
                                        <option value="c#">C#</option>
                                        <option value="c">C</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p1">¿Cuántos tipos de WordPress hay?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="5">5</option>
                                        <option value="1">1</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p1">¿Cómo accedo a los paneles de administración?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="http://misitio.es/wp-register.php">http://misitio.es/wp-register.php</option>
                                        <option value="http://misitio.es/wp-login.php">http://misitio.es/wp-login.php</option>
                                        <option value="http://misitio.es/wp-admin/">http://misitio.es/wp-admin/</option>
                                        <option value="http://misitio.es/admin">http://misitio.es/admin</option>
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