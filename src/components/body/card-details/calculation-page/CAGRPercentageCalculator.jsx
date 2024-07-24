import React, {useState, useEffect} from "react";
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
    const[disableCalculateBtn, setDisableCalculateBtn] = useState(true)
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
    useEffect(() =>{
        if(returnPercentage && years){
            setDisableCalculateBtn(false)
        }
        else{
            setDisableCalculateBtn(true)
        }
    },[returnPercentage, years])
    return(
        <div className="cagr-comp">
           <h3>CAGR Calculator from return percentage</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="40%" margin="auto" mt={5}>
                <InputPercantageComponent 
                    labelName='Return in %' 
                    onInputChange={handlePercentageFromChild}
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

export default CAGRPercentageCalculator;