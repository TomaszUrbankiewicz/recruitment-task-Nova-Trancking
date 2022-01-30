import React from 'react';

const FormBoxInput1 = () => {
    return (
        <div className='columns_1 box_columns'>
            <div className='box_input'>
                <label for="fname">Numer wniosku</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label for="fname">Teczka</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='box_input'>
                    <label for="fname">PIN</label>
                    <input type="number" id="fname" name="fname" />
                </div>
            </div>
            <div className='box_input'>
                <label for="fname">Użytkownik zlecający</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input'>
                <label for="fname">Typ odprawy*</label>
                <select name="cars" id="cars">
                    <option value="volvo">Uproszczona</option>
                    <option value="saab">opcja 2</option>
                    <option value="mercedes">opcja 3</option>
                    <option value="audi">opcja 4</option>
                </select>
            </div>
            <div className='box_input'>
                <label for="fname">Armator</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input'>
                <label for="fname">Kontenery</label>
                <input type="text" id="fname" name="fname" />
            </div>
        </div>
    )
}
export default FormBoxInput1;