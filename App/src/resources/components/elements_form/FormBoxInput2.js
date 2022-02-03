import React from 'react';

const FormBoxInput2 = (props) => {
    return (
        <div className='columns_2 box_columns'>
            <div className='box_input2'>
                <div className='box_input box_input_big'>
                <label htmlFor="fname">Typ odprawy*</label>
                    <select  id="cars" name="value1" value={props.value_input.value1} onChange={props.changeValueHendel}>
                        <option value="Jakub Malinowski">Jakub Malinowski</option>
                        <option value="Jan Kowalski">Jan Kowalski</option>
                        <option value="Janusz Nowak">Janusz Nowak</option>
                        <option value="Sebastian Tygla">Sebastian Tygla</option>
                    </select>
                </div>
                <div className='box_input box_input_small'>
                    <label htmlFor="fname">Terminal ETA</label>
                    <input type="text" id="fname" name="col2_value1" value={props.value_input.col2_value1} onChange={props.changeValueHendel} />
                </div>
            </div>
            <div className='box_input'>
            <label htmlFor="fname">Typ odprawy*</label>
                <select id="cars" name="col2_value2" value={props.value_input.col2_value2} onChange={props.changeValueHendel}>
                    <option value='Urząd Celny III "Port lotniczy" w Warszawie'>Urząd Celny III "Port lotniczy" w Warszawie</option>
                    <option value="opcja 2">opcja 2</option>
                    <option value="opcja 3">opcja 3</option>
                    <option value="opcja 4">opcja 4</option>
                </select>
            </div>
            <div className='box_input2'>
                <div className='box_input box_input_big'>
                    <label htmlFor="fname">Kierowca</label>
                    <input type="text" id="fname" name="col2_value3" value={props.value_input.col2_value3} onChange={props.changeValueHendel} />
                </div>
                <div className='box_input box_input_small'>
                    <label className='label' htmlFor="fname">Numer prawa jazdy</label>
                    <input type="text" id="fname" name="col2_value4" value={props.value_input.col2_value4} onChange={props.changeValueHendel} />
                </div>
            </div>
            <div className='box_input2 box_input2_smal'>
                <div className='box_input '>
                    <label  className='label' htmlFor="fname">Pojazd</label>
                    <input type="text" id="fname" name="col2_value5" value={props.value_input.col2_value5} onChange={props.changeValueHendel} />
                </div>
                <div className='box_input '>
                    <label  className='label' htmlFor="fname">Przyczepa</label>
                    <input type="text" id="fname" name="col2_value6" value={props.value_input.col2_value6} onChange={props.changeValueHendel} />
                </div>
            </div>
        </div>
    )
}
export default FormBoxInput2;