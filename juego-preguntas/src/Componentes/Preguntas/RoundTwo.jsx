import React from 'react';
import styles from './Preguntas.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';


export function RoundTwo(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form className="row g-3 needs-validation" >
                                <h2>Ronda 2 - HTML</h2>
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p2">¿Qué es el H1?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="etiqueta-encabezado">Es la etiqueta que se usa como titulo o encabezado principal de una página web.</option>
                                        <option value="etiqueta-tabla">Es la etiqueta que se usa para tablas.</option>
                                        <option value="etiqueta-formulario">Es la etiqueta que se usa para formularios.</option>
                                        <option value="etiqueta-listas">Es la etiqueta que se usa para listas.</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p2">¿Cual es la etiqueta que se usa para el Encabezado de una Tabla?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="li">Li</option>
                                        <option value="td">Td</option>
                                        <option value="th">Th</option>
                                        <option value="tr">Tr</option>
                                    </select>
                                </div>

                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p2">¿Como se declara una Clase en HTML?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="class">Class</option>
                                        <option value="clase">Clase</option>
                                        <option value="classname">ClassName</option>
                                        <option value="nameclass">NameClass</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p2">¿Cúal es la etiqueta para usar CSS en HTML?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="css">Css</option>
                                        <option value="estilos">Estilos</option>
                                        <option value="styles">Style</option>
                                        <option value="stylecss">StyleCss</option>
                                    </select>
                                </div>
                                    
                                <div className={styles.preguntas}>
                                    <label  htmlFor="wp-p2">¿Cómo instalar Bootstrap linkiado?</label>
                                    <select className="form-select">
                                        <option value="">Seleccione...</option>
                                        <option value="descargando-en-html">Hay que descargarlo en el HTML por un comando que tiene  HTML.</option>
                                        <option value="por-cdn">Por medio de la CDN propia de Boostrap.</option>
                                        <option value="por-css">No es en el HTML, se descarga en el archivo CSS.</option>
                                        <option value="ninguna-anteriores">Ninguna de las anteriores.</option>
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