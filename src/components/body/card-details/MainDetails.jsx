import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import LeftMenu from "./left-menu/LeftMenu";
import LoadCalculationPage from './calculation-page/LoadCalculationPage'

const MainDetails = ({clicked}) =>{
    const containerStyle = {
        display: 'flex',
        // height: '100vh',
        marginLeft: '1%',
        marginTop: '1%'
      };
      const leftSideStyle = {
        width: '24%',
      };
    
      const rightSideStyle = {
        width: '75%',
      };
    return(
        <div>
            <div style={containerStyle}>
                <div style={leftSideStyle}>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <Button variant="contained">Back</Button>
                    </Link>
                    <LeftMenu cardClicked={clicked} />
                </div>
                <div style={rightSideStyle}>
                    <LoadCalculationPage cardClicked={clicked}/>
                </div>
            </div>
        </div>
    );
}

export default MainDetails;