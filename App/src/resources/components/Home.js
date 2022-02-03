import React, {useEffect,useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import Form from './Form';

const Home = () => {
    const [index, setIndex] = useState("NOV/009197/18");
    const [value_input,setValue_input] = useState ({value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",col2_value1:"",col2_value2:"",col2_value3:"",col2_value4:"",col2_value5:"",col2_value6:"",col2_value7:"",
    col3_value1:"",col3_value2:"",col3_value3:"",col3_value4:"",col3_value5:"",col3_value6:"",col3_value7:"",col3_value8:"",col3_value9:"",col3_value10:"",col3_value11:"",col4_value1:"",col4_value2:"",col4_value3:""})
    const change_index = (el) => {
        setIndex(el);
    }
    const changeValueHendel=(e)=>{
        const{name, value}=e.target
        
        setValue_input(poprzedni=>{
            return{
                ...poprzedni, [name]:value
            }}) 
    }
    const save_localStorage = () => {
        window.localStorage.setItem("my_local",JSON.stringify(value_input))
    }
    useEffect(()=>{
        console.log(JSON.parse(window.localStorage.getItem('my_local')))
        if(JSON.parse(window.localStorage.getItem('my_local'))!=null){
            setValue_input(JSON.parse(window.localStorage.getItem('my_local')))
        }
        else{
            setValue_input(value_input);
        }
        
    },[])

    
    return (
        <>
            <Header index={index} save_localStorage={save_localStorage}/>
            <Slider change_index={change_index}/>
            <Form changeValueHendel={changeValueHendel} value_input={value_input} />
        </>
    )
}
export default Home;