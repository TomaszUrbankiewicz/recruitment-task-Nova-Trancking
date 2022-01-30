import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import Form from './Form';

const Home = () => {
    const [index, setIndex] = useState("NOV/009197/18");

    const change_index = (el) => {
        setIndex(el);
    }
    return (
        <>
            <Header index={index}/>
            <Slider change_index={change_index}/>
            <Form/>
        </>
    )
}
export default Home;