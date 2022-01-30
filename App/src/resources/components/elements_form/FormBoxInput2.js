import React from 'react';

const FormBoxInput2 = () => {
    return (
        <div className='columns_2 box_columns'>
            <div className='box_input2'>
                <div className='box_input box_input_big'>
                <label for="fname">Typ odprawy*</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Jakub Malinowski</option>
                        <option value="saab">Jan Kowalski</option>
                        <option value="mercedes">Janusz Nowak</option>
                        <option value="audi">Sebastian Tygla</option>
                    </select>
                </div>
                <div className='box_input box_input_small'>
                    <label for="fname">Numer wniosku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
            </div>
            <div className='box_input'>
            <label for="fname">Typ odprawy*</label>
                <select name="cars" id="cars">
                    <option value="volvo">Urząd Celny III "Port lotniczy" w Warszawie</option>
                    <option value="saab">opcja 2</option>
                    <option value="mercedes">opcja 3</option>
                    <option value="audi">opcja 4</option>
                </select>
            </div>
            <div className='box_input2'>
                <div className='box_input box_input_big'>
                    <label for="fname">Numer wniosku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='box_input box_input_small'>
                    <label for="fname">Numer wniosku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
            </div>
            <div className='box_input2 box_input2_smal'>
                <div className='box_input '>
                    <label  className='label' for="fname">Numer wniosku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='box_input '>
                    <label  className='label' for="fname">Numer wniosku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
            </div>
        </div>
    )
}
export default FormBoxInput2;