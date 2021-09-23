import React, {useState} from "react";


export function Admin(){

    const initialStateValues = {
        question: '',
        id: '',
        category: '',
        respond1: '',
        respond2: '',
        respond3: '',
        respond4: '',
        // guardar_categoria: ''
    }

    const [values, setValues] = useState(initialStateValues);

    function handleOptionChange(e){
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values)
    }


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form  onSubmit={handleSubmit}  className="row g-3 needs-validation" novalidate>
                            <select name="category" id="categoria">
                            <option value="">Seleccionar...</option>
                                <option value={values.category}>Wordpress</option>
                                <option value={values.category}>HTML</option>
                                <option value={values.category}>JavasCript</option>
                                <option value={values.category}>Comandos en Terminal</option>
                            </select>
                            <input onChange={handleOptionChange}  type="text" name="question" value={values.question} />
                            <input onChange={handleOptionChange}  type="text" name="respond1" value={values.respond1} />
                            <input onChange={handleOptionChange}  type="text" name="respond2" value={values.respond2} />
                            <input onChange={handleOptionChange}  type="text" name="respond3" value={values.respond3} />
                            <input onChange={handleOptionChange}  type="text" name="respond4" values={values.respond4} />
                            <tr>
                            <td>
                                <input type="radio" name="site_name" value=""></input>
                            </td>
                        </tr>
                            <button type="submit" className="btn btn-warning 
                            fw-bold">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
