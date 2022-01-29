import React, { useState } from "react";
import foto from "../../img/down-arrow.png";

const Nav = (props) => {
    const [show_szablony, setShow_szablony] = useState (false)
    const [active, setActive] = useState (1);

    const show_class_szablony = () => {
        setShow_szablony(true)
    }
    const hide_class_szablony = () => {
        setShow_szablony(false)
    }
    const add_active = (e) => {
        setActive(e.target.id)
        props.change_number_array(e.target.id)
    }

    return (
        <nav>
            <ul className="big_ul_list">
                <li className={(active == 1) ? "activ" : " "} ><a id="1" onClick={add_active} href='#'>Teczki Lista</a></li>
                <li className={(active == 2) ? "activ" : " "} ><a id="2" onClick={add_active} href='#'>Tablica zleceń</a></li>
                <li className={(active == 3) ? "activ" : " "} ><a id="3" onClick={add_active}  href='#'>Trasy</a></li>
                <li className={(active == 4) ? "activ" : " "} ><a id="4" onClick={add_active}  href='#'>Planer</a></li>
                <li onClick={show_class_szablony} onMouseLeave={hide_class_szablony} className={(active == 5) ? "activ" : " "} ><a  href='#'>Szablony</a>
                    <img className="arrow_img" src={foto} alt="down-arrow"/>
                    <ul  className={(show_szablony) ? "smal_ul_list" : "smal_ul_list--invisible"}>
                        <li onClick={hide_class_szablony} ><a id="5" onClick={add_active} href='#'>Szablon 1</a></li>
                        <li onClick={hide_class_szablony} ><a id="5" onClick={add_active} href='#'>Szablon 2</a></li>
                        <li onClick={hide_class_szablony} ><a id="5" onClick={add_active} href='#'>Szablon 3</a></li>
                        <li onClick={hide_class_szablony} ><a id="5" onClick={add_active} href='#'>Szablon 4</a></li>
                    </ul>
                </li>
            </ul>
            
        </nav>
    )
}
export default Nav;