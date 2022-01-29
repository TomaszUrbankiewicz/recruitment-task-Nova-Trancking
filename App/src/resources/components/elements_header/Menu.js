import React, { useState,useEffect } from "react";
import foto_1 from '../../img/left-arrow.png';
import foto_2 from '../../img/save.png';

const Menu = (props) => {
    const [activ_border, setActiv_border] = useState (3);
    const array_li = props.array_li
    const add_activ_border = (e) => {
        setActiv_border(e.target.id)
    }

    return (
        <div className='menu'>
            <div className='menu__box_categories'>
                <div className='empty_box'></div>
                <div className='index'>
                <img className="arrow_img" src={foto_1} alt="save"/>
                <span>NN/0044T/TR</span>
                </div>
                <ul>
                    {array_li.map((el, key) => {
                        return(
                            
                            <li key={key} id={key+1} onClick={add_activ_border} className={(activ_border == (key+1)) ? "activ_border" : ""} >{el}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='menu__box_buttons'>
                <button>Stworz szablon</button>
                <button className='second_button'>Wystaw fakture</button>
                <button className='save_button'><img className="save_img" src={foto_2} alt="save"/> Zapisz</button>
            </div>
        </div>
    )
}
export default Menu;