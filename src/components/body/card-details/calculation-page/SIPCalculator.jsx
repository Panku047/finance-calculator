import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import './CAGRCalculator.css'
import InputComponent from "../../../lib/InputComponent";
import InputYearComponent from "../../../lib/InputYearComponent";
import {calculateSIP} from '../../../calculation/calculateSIP'
import {formatNumberWithIndianCommas} from '../../../lib/js-solutions/FormatWithComma'

const SIPCalculator = () =>{
    const[monthalyInvestment, setMonthalyInvestment] = useState('');
    const[expectedReturn, setExpectedReturn] = useState('');
    const[years, setYears] = useState('')
    const[investedAmt, setInvestedAmt] = useState('')
    const[estimatedReturn, setEstimatedReturn] = useState('')
    const[totalAmt, setTotalAmt] = useState('');
    const[disableCalculateBtn, setDisableCalculateBtn] = useState(true)

    const handleMonthlyInvestmentFromChild = (value) => {
        setMonthalyInvestment(value); 
    };
    const handleReturnFromChild = (value) => {
        setExpectedReturn(value); 
    };
    const handleYearFromChild = (value) => {
        setYears(value); 
    };

    useEffect(() =>{
        if(monthalyInvestment && expectedReturn && years){
            setDisableCalculateBtn(false)
        }
        else{
            setDisableCalculateBtn(true)
        }
    },[monthalyInvestment, expectedReturn, years])

    const calculateSIPValue = () =>{
        let value = calculateSIP(monthalyInvestment, expectedReturn,years)
        console.log(value)
        let formattedInvestedAmt = formatNumberWithIndianCommas(value[0]);
        let formattedInterestlAmt = formatNumberWithIndianCommas(value[1]);
        let formattedTotalAmt = formatNumberWithIndianCommas(value[2]);
        setInvestedAmt(formattedInvestedAmt)
        setEstimatedReturn(formattedInterestlAmt)
        setTotalAmt(formattedTotalAmt)
    }
    return(
        <div className="cagr-comp">
           <h3>SIP Calculator</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="60%" margin="auto" mt={5}>
                <InputComponent 
                    labelName='Monthly Investment' 
                    onInputChange={handleMonthlyInvestmentFromChild}
                />
                <InputYearComponent
                    labelName='Return Rate PA'  
                    onInputChange={handleReturnFromChild} 
                />
                <InputYearComponent labelName="Years" onInputChange={handleYearFromChild} />
            </Box>
           </div>
            <div className="calculate-btn">
                <Button 
                    variant="contained" 
                    onClick={calculateSIPValue}
                    disabled={disableCalculateBtn}
                >
                    Calculate
                </Button>
            </div>
            {totalAmt ? 
                <div className="sip-result">
                    <p><span className="label">Invested Amount</span> <span>₹{investedAmt}</span></p>
                    <p><span className="label">Return Earned</span> <span>₹{estimatedReturn}</span></p>
                    <p><span className="label">Total Amount</span> <span>₹{totalAmt}</span></p>
                </div> : ''
            }
        </div>
    );
}

export default SIPCalculator;