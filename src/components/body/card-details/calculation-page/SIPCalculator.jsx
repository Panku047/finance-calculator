import React, {useState } from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import './CAGRCalculator.css'
import InputComponent from "../../../lib/InputComponent";
import InputYearComponent from "../../../lib/InputYearComponent";
import {calculateSIP} from '../../../calculation/calculateSIP'

const SIPCalculator = () =>{
    const[monthalyInvestment, setMonthalyInvestment] = useState('');
    const[expectedReturn, setExpectedReturn] = useState('');
    const[years, setYears] = useState('')
    const[investedAmt, setInvestedAmt] = useState('')
    const[estimatedReturn, setEstimatedReturn] = useState('')
    const[totalAmt, setTotalAmt] = useState('');

    const handleMonthlyInvestmentFromChild = (value) => {
        setMonthalyInvestment(value); 
    };
    const handleReturnFromChild = (value) => {
        setExpectedReturn(value); 
    };
    const handleYearFromChild = (value) => {
        setYears(value); 
    };

    const calculateSIPValue = () =>{
        let value = calculateSIP(monthalyInvestment, expectedReturn,years)
        console.log(value)
        setInvestedAmt(value[0])
        setEstimatedReturn(value[1])
        setTotalAmt(value[2])
    }
    return(
        <div className="cagr-comp">
           <h3>SIP Calculator</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="60%" margin="auto" mt={5}>
                <InputComponent 
                    lableName='Monthly Investment' 
                    onInputChange={handleMonthlyInvestmentFromChild}
                />
                <InputYearComponent
                    lableName='Return Rate PA'  
                    onInputChange={handleReturnFromChild} 
                />
                <InputYearComponent lableName="Years" onInputChange={handleYearFromChild} />
            </Box>
           </div>
            <div className="calculate-btn">
                <Button 
                    variant="contained" 
                    onClick={calculateSIPValue}
                >
                    Calculate
                </Button>
            </div>
            {totalAmt ? 
                <div className="sip-result">
                    <p>Invested Amount: {investedAmt}</p>
                    <p>Return Earned: {estimatedReturn}</p>
                    <p>Total Amount: {totalAmt}</p>
                </div> : ''
            }
        </div>
    );
}

export default SIPCalculator;