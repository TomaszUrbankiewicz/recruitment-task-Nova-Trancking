import React from 'react';
import FormBoxInput1 from './elements_form/FormBoxInput1';
import FormBoxInput2 from './elements_form/FormBoxInput2';
import FormBoxInput3 from './elements_form/FormBoxInput3';
import FormBoxInput4 from './elements_form/FormBoxInput4';
import Tabela from './elements_form/Tabela';

const Form = (props) => {
    return (
        <form>
            <div className='columns_form'>
                <FormBoxInput1 value_input={props.value_input} changeValueHendel={props.changeValueHendel}/>
                <FormBoxInput2 value_input={props.value_input} changeValueHendel={props.changeValueHendel}/>
                <FormBoxInput3 value_input={props.value_input} changeValueHendel={props.changeValueHendel}/>
                <FormBoxInput4 value_input={props.value_input} changeValueHendel={props.changeValueHendel}/>
            </div>
            <div className='table_form'>
                <Tabela/>
            </div>
        </form>
    )
}
export default Form;