import React from 'react';

const FormBoxInput3 = (props) => {
    return (
        <div className='columns_3 box_columns'>
            <div className='box_input'>
                <label htmlFor="fname">Oddział realizujący*</label>
                <input type="text" id="fname" name="col3_value1" value={props.value_input.col3_value1} onChange={props.changeValueHendel} />
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                <label  className='label' htmlFor="fname">Dział zlecający</label>
                <select id="dział_zlecający" name="col3_value2" value={props.value_input.col3_value2} onChange={props.changeValueHendel}>
                    <option value="ROAD">ROAD</option>
                    <option value="opcja 2">opcja 2</option>
                    <option value="opcja 3">opcja 3</option>
                    <option value="opcja 4">opcja 4</option>
                </select>
                </div>
                <div className='box_input'>
                <label  className='label' htmlFor="fname">Dział zlecający</label>
                <select id="dział_zlecający2" name="col3_value3" value={props.value_input.col3_value3} onChange={props.changeValueHendel}>
                    <option value="AC">AC</option>
                    <option value="opcja 2">opcja 2</option>
                    <option value="opcja 3">opcja 3</option>
                    <option value="opcja 4">opcja 4</option>
                </select>
                </div>
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label htmlFor="fname">Data odprawy</label>
                    <input type="text" id="fname" name="col3_value4" value={props.value_input.col3_value4} onChange={props.changeValueHendel} />
                </div>
                <div className='box_input'>
                    <label className='label' htmlFor="fname">kod UC przeznaczenia</label>
                    <input type="number" id="fname" name="col3_value5" value={props.value_input.col3_value5} onChange={props.changeValueHendel} />
                </div>
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Klijent/Dłużnik celny</label>
                <input type="text" id="fname" name="col3_value6" value={props.value_input.col3_value6} onChange={props.changeValueHendel} />
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Odwóz</label>
                <input type="text" id="fname" name="col3_value6" value={props.value_input.col3_value7} onChange={props.changeValueHendel} />
            </div>
            <div className='box_input'>
                <label htmlFor="fname">Ładunki</label>
                <input type="text" id="fname" name="col3_value7" value={props.value_input.col3_value8} onChange={props.changeValueHendel}/>
            </div>
            <div className='box_input2'>
                <div className='box_input'>
                    <label  className='label' htmlFor="fname">Wartość ładunku</label>
                    <input type="text" id="fname" name="col3_value9" value={props.value_input.col3_value9} onChange={props.changeValueHendel} />
                </div>
                <div className='box_input'>
                    <label className='label' htmlFor="fname">Koszt obsługi wewnętrznej</label>
                    <input type="number" id="fname" name="col3_value10" value={props.value_input.col3_value10} onChange={props.changeValueHendel} />
                </div>
            </div>
            <div className='box_input box_input2_smal'>
                <label htmlFor="fname">Waluta</label>
                        <select id="Waluta" name="col3_value11" value={props.value_input.col3_value11} onChange={props.changeValueHendel}>
                            <option value="PLN">PLN</option>
                            <option value="opcja 2">opcja 2</option>
                            <option value="opcja 3">opcja 3</option>
                            <option value="opcja 4">opcja 4</option>
                        </select>
                </div>
        </div>
    )
}
export default FormBoxInput3;