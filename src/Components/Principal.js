import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

import "../style/principal.css"


function Principal() {
    const [value, setValue] = useState(1000);
    return (
        <>
            <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
                <Form.Label className='principal-from-label' >Kredi Miktarı</Form.Label>
                <Form.Control value={value} onChange={(e)=>{setValue(e.target.value)}} id='deneme' className='principal-from-control mt-3' type="number" placeholder="Kredi Miktarını giriniz..." />                
                <Form.Range onChange={(e)=>{setValue(e.target.value)}} id='range-slider' className='principal-range-slider mt-3' />
            </Form.Group>         
       

        </>
    )
}

export default Principal