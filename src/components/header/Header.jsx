import React from "react";

import './Header.css'
// import CustomizedMenus from '../body/more-option/CustomizedMenus'
import Logo from '../../../src/asset/logo.jpg'

const Header = () => {
    return(
        <div className="head">
           <h2 className="header-h2">Finance World
            <img className="head-log" alt="Logo" src={Logo} />
           </h2>
           {/* <h2 className="header-h2"><CustomizedMenus /></h2> */}
           <h2 className="header-h2-name">PK</h2>
        </div>
    );
}
export default Header;