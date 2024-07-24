import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import './CAGRCalculator.css'
import InputComponent from "../../../lib/InputComponent";
import InputYearComponent from "../../../lib/InputYearComponent";
import { calculateCAGR } from "../../../calculation/calculateCAGR";

const CAGRCalculator = () =>{
    const[initialValue, setInitialValue] = useState('');
    const[finalValue, setFinalValue] = useState('');
    const[years, setYears] = useState('')
    const[finalCAGR, setFinalCAGR] = useState('');
    const[disableCalculateBtn, setDisableCalculateBtn] = useState(true)

    const handleInitialValueFromChild = (value) => {
        setInitialValue(value); 
    };
    const handleFinalValueFromChild = (value) => {
        setFinalValue(value); 
    };
    const handleYearFromChild = (value) => {
        setYears(value); 
    };

    useEffect(() =>{
        if(initialValue && finalValue && years){
            setDisableCalculateBtn(false)
        }
        else{
            setDisableCalculateBtn(true)
        }
    },[initialValue, finalValue, years])
    const calculateCAGRValue = () =>{
        let value = calculateCAGR(initialValue, finalValue,years)
        setFinalCAGR(value)
    }
    return(
        <div className="cagr-comp">
           <h3>CAGR Calculator</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="80%" margin="auto" mt={5}>
                <InputComponent 
                    labelName='Initial Value' 
                    onInputChange={handleInitialValueFromChild}
                />
                <InputComponent 
                    labelName='Final Value'  
                    onInputChange={handleFinalValueFromChild} 
                />
                <InputYearComponent labelName="Years" onInputChange={handleYearFromChild} />
            </Box>
           </div>
            <div className="calculate-btn">
                <Button 
                    variant="contained" 
                    onClick={calculateCAGRValue}
                    disabled={disableCalculateBtn}
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

export default CAGRCalculator;