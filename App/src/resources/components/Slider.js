import React, { useState,useEffect } from "react";
import foto from '../img/boxes.png'

const Slider = () => {
    const el_slider = [{ pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/009197/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" },
    { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/009197/18", pole3: "usunięto" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" },
    { pole1: "WOOSE", pole2: "NOV/009197/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" },
    { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/009197/18", pole3: "usunięto" }, { pole1: "AFRRO", pole2: "NOV/009197/18", pole3: "wprowadzono" }]

    const [activ, setActiv] = useState (1);
    const add_activ = (e) => {
        setActiv(e.target.id)
        console.log(e.target)
    }

    return (
        <div className='slider'>
                {el_slider.map((el, key) => {
                    return (
                        <div key={key} id={key+1} onClick={add_activ} className={(activ == (key+1)) ? "box_el_slider box_el_slider--activ" : "box_el_slider "}>
                            <div className='box_index'>
                                <span className='first'>{el.pole1}</span>-<span>{el.pole2}</span>
                            </div>
                            <div className='box_img'>
                                <img className="boxes_img" src={foto} alt="save" />
                                <span>{el.pole3}</span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default Slider;