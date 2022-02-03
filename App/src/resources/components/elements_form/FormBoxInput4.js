import React from 'react';

const FormBoxInput4 = (props) => {
    return (
        <div className='columns_4 box_columns'>
        <div className='box_input box_input2_smal'>
            <label  className='label' htmlFor="fname">Numer WinSAD</label>
            <input type="text" id="fname" name="col4_value1" value={props.value_input.col4_value1} onChange={props.changeValueHendel} />
        </div>
        <div className='box_input'>
            <label htmlFor="fname">Status celny</label>
            <input type="text" id="fname" name="col4_value2" value={props.value_input.col4_value2} onChange={props.changeValueHendel} />
        </div>
        <div className='box_input'>
            <label htmlFor="fname">PWD/OGL/MRN</label>
            <input type="text" id="fname" name="col4_value3" value={props.value_input.col4_value3} onChange={props.changeValueHendel} />
        </div>
        <div className='box_input'>
            <label  className='label' htmlFor="fname">w dkumentach SAD historycznych</label>
            <button>Sprawdz Status teraz</button>
        </div>
    </div>
    )
}
export default FormBoxInput4;