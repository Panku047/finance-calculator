import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

import './CAGRCalculator.css'
import InputComponent from "../../../lib/InputComponent";
import InputYearComponent from "../../../lib/InputYearComponent";
import {formatNumberWithIndianCommas} from '../../../lib/js-solutions/FormatWithComma'
import InputPercantageComponent from "../../../lib/InputPercentageComponent";
import DatePicker from '../../../lib/date-picker/DatePicker'
import {calculateCIYears, calculateCIDates} from '../../../calculation/calculateCI'

const CICalculator = () =>{
    const[principalAmt, setPrincipalAmt] = useState('');
    const[expectedReturn, setExpectedReturn] = useState('');
    const[years, setYears] = useState('')
    const[totalPrincipalAmt, setTotalPrincipalAmt] = useState('')
    const[estimatedReturn, setEstimatedReturn] = useState('')
    const[totalAmt, setTotalAmt] = useState('');
    const[estimatedReturnYear, setEstimatedReturnYear] = useState('')
    const[totalAmtYear, setTotalAmtYear] = useState('');
    const[disableCalculateBtn, setDisableCalculateBtn] = useState(true)
    const[useCalendar, setUseCalendar] = useState(false)
    const[fromDate, setFromDate] = useState('')
    const[toDate, setToDate] = useState('')
    const[newFromDate, setNewFromDate] = useState('')
    const[newToDate, setNewToDate] = useState('')
    const[days, setDays] = useState('')
    const[result, setResult] = useState(false)

    const handleMonthlyInvestmentFromChild = (value) => {
        setPrincipalAmt(value); 
    };
    const handleYearFromChild = (value) => {
        setYears(value); 
    };
    const handlePercentageFromChild = (value) => {
        setExpectedReturn(value); 
    };
    const handleFromDateFromChild = (value) =>{
        setFromDate(value)
    }
    const handleToDateFromChild = (value) =>{
        setToDate(value)
    }

    useEffect(() =>{
        if((principalAmt && expectedReturn) && (years || (fromDate && toDate))){
            setDisableCalculateBtn(false)
        }
        else{
            setDisableCalculateBtn(true)
        }
    },[principalAmt, expectedReturn, years, fromDate, toDate])

    const openDatePicker = () =>{
        setUseCalendar(!useCalendar)
    }

    const calculateCIValue = () =>{
        if(useCalendar){
            if(principalAmt && expectedReturn && fromDate && toDate){
                setResult(true)
                let value = calculateCIDates(principalAmt, expectedReturn,fromDate, toDate)
                let formatedPrincipalAmt = formatNumberWithIndianCommas(principalAmt);
                let formattedInterestlAmt = formatNumberWithIndianCommas(value[4]);
                let formattedTotalAmt = formatNumberWithIndianCommas(value[0]);
                setNewFromDate(value[2])
                setNewToDate(value[3])
                setDays(value[1])
                setTotalPrincipalAmt(formatedPrincipalAmt)
                setEstimatedReturn(formattedInterestlAmt)
                setTotalAmt(formattedTotalAmt)
            }
        }else{
            if(principalAmt && expectedReturn && years){
                setResult(true)
                let value = calculateCIYears(principalAmt, expectedReturn, years)
                let formatedPrincipalAmt = formatNumberWithIndianCommas(principalAmt);
                let formattedInterestlAmt =  formatNumberWithIndianCommas(value[1]);
                let formattedTotalAmt = formatNumberWithIndianCommas(value[0]);
                setTotalPrincipalAmt(formatedPrincipalAmt)
                setEstimatedReturnYear(formattedInterestlAmt)
                setTotalAmtYear(formattedTotalAmt)
            }
        }
    }
    return(
        <div className="cagr-comp">
           <h3>Compound Interest Calculator</h3>
           <div>
            <Box display="flex" flexDirection="row" gap={4} width="95%" margin="auto" mt={5}>
                <InputComponent 
                    labelName='Principal Amount' 
                    onInputChange={handleMonthlyInvestmentFromChild}
                />
                <InputPercantageComponent 
                    labelName='Interest Rate %' 
                    onInputChange={handlePercentageFromChild}
                />
                {useCalendar ? 
                    <>
                        <DatePicker 
                            onInputChange={handleFromDateFromChild} 
                            labelName='From' 
                            currentValue={fromDate} 
                        /> 
                        <DatePicker 
                            onInputChange={handleToDateFromChild} 
                            labelName='To' 
                            currentValue={toDate} 
                        />
                    </> : 
                        <InputYearComponent 
                            onInputChange={handleYearFromChild} 
                            labelName='Years' 
                            currentValue={years} 
                        />
                }
            </Box>
           </div>
           <div className="use-calendar-btn">
            <Button 
                onClick={openDatePicker} 
            >
                {useCalendar? 'Use input field for Years' : 'Use Calendar to select date range'}
            </Button>
           </div>
            <div className="calculate-btn">
                <Button 
                    variant="contained" 
                    onClick={calculateCIValue}
                    disabled={disableCalculateBtn}
                >
                    Calculate
                </Button>
            </div>
            {result ? 
                <div className="sip-result">
                    <p><span className="label">Invested Amount</span> <span>₹{totalPrincipalAmt}</span></p>
                    {useCalendar ? 
                    <div className="des-text-message">
                        <p><span className="label">Return Earned</span> <span>₹{estimatedReturn}</span></p>
                        <p><span className="label">Total Amount</span> <span>₹{totalAmt}</span></p>
                        Selected Date Range: {newFromDate} to {newToDate}, totaling: {days} days
                    </div>
                    : 
                    <div className="des-text-message">
                        <p><span className="label">Return Earned</span> <span>₹{estimatedReturnYear}</span></p>
                        <p><span className="label">Total Amount</span> <span>₹{totalAmtYear}</span></p>
                        Selected option year: {years}
                    </div>
                    }
                </div> : ''
            }
        </div>
    );
}

export default CICalculator;