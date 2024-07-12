import React, {useState} from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import './CAGRCalculator.css'
import InputPercantageComponent from "../../../lib/InputPercentageComponent";
import InputYearComponent from "../../../lib/InputYearComponent"
import {calculateCAGRPercentage} from "../../../calculation/calculateCAGRPercentage"

const CAGRPercentageCalculator = () =>{
    const[returnPercentage, setReturnPercentage] = useState('')
    const[years, setYears] = useState('')
    const[finalCAGR, setFinalCAGR] = useState('')
    const handlePercentageFromChild = (value) => {
        setReturnPercentage(value); 
    };
    const handleYearFromChild = (value) => {
        setYears(value); 
    };
    const calculateCAGRValue = () =>{
        let value = calculateCAGRPercentage(returnPercentage,years)
        setFinalCAGR(value)
    }
    return(
        <div className="cagr-comp">
           <h3>CAGR Calculator from return percentage</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="40%" margin="auto" mt={5}>
                <InputPercantageComponent 
                    lableName='Return in %' 
                    onInputChange={handlePercentageFromChild}
                />
                <InputYearComponent lableName="Years" onInputChange={handleYearFromChild} />
            </Box>
           </div>
            <div className="calculate-btn">
                <Button 
                    variant="contained" 
                    onClick={calculateCAGRValue}
                >
                    Calculate
                </Button>
            </div>
            {finalCAGR ? 
                <div className="cagr-result">
                    {finalCAGR}
                </div> : ''
            }
        </div>
    );
}

export default CAGRPercentageCalculator;