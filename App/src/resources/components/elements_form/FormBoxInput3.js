import React from 'react';

const FormBoxInput3 = () => {
    return (
        <div className='columns_3 box_columns'>
            <div className='box_input'>
                <label for="fname">Oddział realizujący*</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                <label  className='label' for="fname">Dział zlecający</label>
                <select name="cars" id="cars">
                    <option value="volvo">ROAD</option>
                    <option value="saab">opcja 2</option>
                    <option value="mercedes">opcja 3</option>
                    <option value="audi">opcja 4</option>
                </select>
                </div>
                <div className='box_input'>
                <label  className='label' for="fname">Dział zlecający</label>
                <select name="cars" id="cars">
                    <option value="volvo">AC</option>
                    <option value="saab">opcja 2</option>
                    <option value="mercedes">opcja 3</option>
                    <option value="audi">opcja 4</option>
                </select>
                </div>
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label for="fname">Data odprawy</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='box_input'>
                    <label className='label' for="fname">kod UC przeznaczenia</label>
                    <input type="number" id="fname" name="fname" />
                </div>
            </div>
            <div className='box_input'>
                <label for="fname">Klijent/Dłużnik celny</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input'>
                <label for="fname">Odwóz</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input'>
                <label for="fname">Ładunki</label>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label  className='label' for="fname">Wartość ładunku</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div className='box_input'>
                    <label className='label' for="fname">Koszt obsługi wewnętrznej</label>
                    <input type="number" id="fname" name="fname" />
                </div>
            </div>
            <div className='box_input box_input2_smal'>
                <label for="fname">Waluta</label>
                        <select name="cars" id="cars">
                            <option value="volvo">PLN</option>
                            <option value="saab">opcja 2</option>
                            <option value="mercedes">opcja 3</option>
                            <option value="audi">opcja 4</option>
                        </select>
                </div>
        </div>
    )
}
export default FormBoxInput3;