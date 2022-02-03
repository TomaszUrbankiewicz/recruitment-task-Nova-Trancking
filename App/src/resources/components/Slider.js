import React, { useState} from "react";
import foto from '../img/boxes.png'

const Slider = (props) => {
    const el_slider = [{ pole1: "AFRRO", pole2: "NOV/006142/18", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/006133/18", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/009145/10", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/006145/18", pole3: "wprowadzono" },
    { pole1: "AFRRO", pole2: "NOV/006176/44", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/006122/23", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/006162/12", pole3: "usunięto" }, { pole1: "AFRRO", pole2: "NOV/006112/56", pole3: "wprowadzono" },
    { pole1: "WOOSE", pole2: "NOV/006112/11", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/006767/16", pole3: "wprowadzono" },
    { pole1: "AFRRO", pole2: "NOV/005567/19", pole3: "wprowadzono" }, { pole1: "AFRRO", pole2: "NOV/004378/32", pole3: "usunięto" },
    { pole1: "WOOSE", pole2: "NOV/004344/18", pole3: "usunięto" }, { pole1: "AFRRO", pole2: "NOV/004343/18", pole3: "wprowadzono" }]
    const [activ, setActiv] = useState (1);
    const add_activ = (e) => {
        setActiv(e.currentTarget.id)
        const span = e.currentTarget.querySelector(".second");
        props.change_index(span.innerText)
    }

    return (
        <div className='slider'>
                {el_slider.map((el, key) => {
                    return (
                        <div key={key} id={key+1} onClick={add_activ} className={(activ == (key+1)) ? "box_el_slider box_el_slider--activ" : "box_el_slider "}>
                            <div className='box_index'>
                                <span className='first'>{el.pole1}</span>-<span className="second">{el.pole2}</span>
                            </div>
                            <div className='box_img'>
                                <img className="boxes_img" src={foto} alt="save" />
                                <span >{el.pole3}</span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default Slider;