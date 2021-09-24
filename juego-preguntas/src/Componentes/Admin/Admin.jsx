import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../database"


const Admin = () =>{

const initialStateValues = {
        question: '',
        id: '',
        category: '',
        respond1: '',
        respond2: '',
        respond3: '',
        respond4: '',
        respond_correct: ''
    }

    const [values, setValues] = useState(initialStateValues);

    

    function handleOptionChange(e){
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ( !values.id) {
              await db.collection("question").doc().set(values);
              toast("New Question Add", {
                type: "success",
              });
            } else {
              await db.collection("question").doc(values.id).update(values);
              toast("Question Updated Successfully", {
                type: "info",
              });
            }
          } catch (error) {
            console.error(error);
          }
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                            <form onSubmit={handleSubmit}  className="row g-3 needs-validation" novalidate>
                                <select onChange={handleOptionChange} name="category" value={values.category} id="categoria">
                                    <option value="">Seleccionar...</option>
                                    <option value="ronda1">Ronda1</option>
                                    <option value="ronda2">Ronda2</option>
                                    <option value="ronda3">Ronda3</option>
                                    <option value="Ronda4">Ronda4</option>
                                    <option value="Ronda5">Ronda5</option>
                                </select>

                                <input onChange={handleOptionChange}  type="text" name="question" value={values.question} placeholder="Ingrese aquí la pregunta." />
                                <input onChange={handleOptionChange}  type="text" name="respond1" value={values.respond1} placeholder="Ingrese aquí la respuesta 1."/>
                                <input onChange={handleOptionChange}  type="text" name="respond2" value={values.respond2} placeholder="Ingrese aquí la respuesta 2."/>
                                <input onChange={handleOptionChange}  type="text" name="respond3" value={values.respond3} placeholder="Ingrese aquí la respuesta 3."/>
                                <input onChange={handleOptionChange}  type="text" name="respond4" values={values.respond4} placeholder="Ingrese aquí la respuesta 4."/>
                                <input onChange={handleOptionChange}  type="text" name="respond_correct" value={values.respond_correct} placeholder="Ingrese aquí el número de la respuesta correcta. Ej: respuesta1"></input>
                                <button type="submit" className="btn btn-warning 
                                fw-bold">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;