import React from 'react';
import FormBoxInput1 from './elements_form/FormBoxInput1';
import FormBoxInput2 from './elements_form/FormBoxInput2';
import FormBoxInput3 from './elements_form/FormBoxInput3';
import FormBoxInput4 from './elements_form/FormBoxInput4';
import Tabela from './elements_form/Tabela';

const Form = () => {
    return (
        <form>
            <div className='columns_form'>
                <FormBoxInput1/>
                <FormBoxInput2/>
                <FormBoxInput3/>
                <FormBoxInput4/>
            </div>
            <div className='table_form'>
                <Tabela/>
            </div>
        </form>
    )
}
export default Form;