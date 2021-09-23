import React from "react";

export function Admin(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="" className="row g-3 needs-validation" novalidate>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <tr>
                                <td>
                                    <input type="radio" name="site_name" value=""></input>
                                </td>
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