import React, { useEffect } from "react";

import {CardData} from '../../../data/CardData'
import './LeftMenu.css'

const LeftMenu = ({cardClicked}) =>{
    return(
        <div className="container">
            <div className="left-side">
                <table className="navigation-table">
                <tbody>
                    {CardData.map((item, index) => (
                    <tr key={index}>
                        <td 
                            className='navigation-item'
                        >
                            {item.longTitle}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default LeftMenu;