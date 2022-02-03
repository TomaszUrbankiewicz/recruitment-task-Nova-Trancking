import React, { useState } from 'react';
import Nav from './elements_header/Nav';
import Menu from './elements_header/Menu';


const Header = (props) => {

    const array_li =[ ["Orders","Documents","Complaints","Finanses","Invoices","Messages","Routes"],
                ["Tablica ","Tablica ","Tablica","Tablica "],
                ["Trasy","Trasy","testtest","testtest"],
                ["Planer","Planer","Planer","Planer","Planer"],
                ["Szablony","Szablony","Szablony","Szablony","Szablony"]
]
const [number_array, setNumber_array]= useState(0)

const change_number_array = (el) => {
    setNumber_array(el-1)
}

    return (
        <header>
            <Nav change_number_array={change_number_array}/>
            <Menu array_li={array_li[number_array]} index_props={props.index} save_localStorage={props.save_localStorage}/>
        </header>
    )
}
export default Header;