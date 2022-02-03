import React from 'react';

const Tabela = () => {

    const array_table = [["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"],["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"], ["Fracht grogowy", "WyjaSniony ze spedytorem", "1650.00 PLN/14 Tona", "56.00", "23%", "237.00", "1650.00 PLN", "1650.00", "1650.00"]]
    return (
        <>
            <div className='box_bottons'>
                <button>Przychody</button>
                <button>Należność celno-podatkowa</button>
                <button>Rozliczenia wewnętrzne</button>
            </div>
            <div className='box_p'>
                <p>Lista zawiera tylko przychody z działu agencji celnej</p>
            </div>
            <div className='box_table'>
                <div className='thead thead_backg'>
                    <div className='th_1'><span>Nazwa towaru / Usługi</span></div>
                    <div className='th_2'><span>Oddział</span></div>
                    <div className='th_3'><span>Netto cena/ilość</span></div>
                    <div className='th_4'><span>Netto kwota</span></div>
                    <div className='th_5'><span>Stawka VAT</span></div>
                    <div className='th_6'><span>Roznica</span></div>
                    <div className='th_7'><span>Rzeczywista</span> <span>cena NETTO</span></div>
                    <div className='th_8'><span>Kurs NETTO</span></div>
                    <div className='th_9'><span>KURS brutto</span></div>
                </div>
                    {array_table.map((el, key) => {
                        return (
                            <div key={key} className='thead'>
                            <div className='th_1'><span>{el[0]}</span></div>
                            <div className='th_2'><span>{el[1]}</span></div>
                            <div className='th_3'><span>{el[2]}</span></div>
                            <div className='th_4'><span>{el[3]}</span></div>
                            <div className='th_5'><span>{el[4]}</span></div>
                            <div className='th_6'><span>{el[5]}</span></div>
                            <div className='th_7'><span>{el[6]}</span></div>
                            <div className='th_8'><span>{el[7]}</span></div>
                            <div className='th_9'><span>{el[8]}</span></div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}
export default Tabela;