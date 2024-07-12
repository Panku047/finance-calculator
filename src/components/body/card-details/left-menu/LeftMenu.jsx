import React from "react";

import {CardData} from '../../../data/CardData'
import './LeftMenu.css'
import { Link } from "react-router-dom";

const LeftMenu = () =>{
    const optionClicked = (page) =>{
        sessionStorage.setItem("cardActive", page)
    }
    let activePage = sessionStorage.getItem('cardActive')
    return(
        <div className="container">
            <div className="left-side">
                <table className="navigation-table">
                <tbody>
                    {CardData.map((item, index) => (
                    <Link onClick={() => optionClicked(item.page)} style={{textDecoration:'none'}} to={{ pathname: item.path}}>
                    <tr key={index}>
                        <td 
                            className={item.page === activePage ? 'navigation-item-clicked' : 'navigation-item'}
                        >
                            {item.longTitle}
                        </td>
                    </tr>
                    </Link>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default LeftMenu;