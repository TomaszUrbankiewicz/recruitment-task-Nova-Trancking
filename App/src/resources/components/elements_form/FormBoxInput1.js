import React from 'react';


const FormBoxInput1 = (props) => {

    return (
        <div className='columns_1 box_columns'>
            <div className='box_input'>
                <label htmlFor="fname">Numer wniosku</label>
                <input type="text" id="fname" name="value1" value={props.value_input.value1} onChange={props.changeValueHendel}/>
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label htmlFor="fname">Teczka</label>
                    <input type="text" id="fname" name="value2" value={props.value_input.value2} onChange={props.changeValueHendel}/>
                </div>
                <div className='box_input'>
                    <label htmlFor="fname">PIN</label>
                    <input type="number" id="fname" name="value3" value={props.value_input.value3} onChange={props.changeValueHendel}/>
                </div>
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Użytkownik zlecający</label>
                <input type="text" id="fname" name="value4" value={props.value_input.value4} onChange={props.changeValueHendel}/>
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Typ odprawy*</label>
                <select  id="typ_odbioru" name="value5" value={props.value_input.value5} onChange={props.changeValueHendel}>
                    <option value="Uproszczona">Uproszczona</option>
                    <option value="opcja 2">opcja 2</option>
                    <option value="opcja 3">opcja 3</option>
                    <option value="opcja 4">opcja 4</option>
                </select>
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Armator</label>
                <input type="text" id="fname" name="value6" value={props.value_input.value6} onChange={props.changeValueHendel} />
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Kontenery</label>
                <input type="text" id="fname"  name="value7" value={props.value_input.value7} onChange={props.changeValueHendel}/>
            </div>
        </div>
    )
}
export default FormBoxInput1;