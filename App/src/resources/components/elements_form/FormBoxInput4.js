import React from 'react';

const FormBoxInput4 = () => {
    return (
        <div className='columns_4 box_columns'>
        <div className='box_input box_input2_smal'>
            <label  className='label' for="fname">Numer WinSAD</label>
            <input type="text" id="fname" name="fname" />
        </div>
        <div className='box_input'>
            <label for="fname">Status celny</label>
            <input type="text" id="fname" name="fname" />
        </div>
        <div className='box_input'>
            <label for="fname">PWD/OGL/MRN</label>
            <input type="text" id="fname" name="fname" />
        </div>
        <div className='box_input'>
            <label  className='label' for="fname">w dkumentach SAD historycznych</label>
            <button>Sprawdz Status teraz</button>
        </div>
    </div>
    )
}
export default FormBoxInput4;