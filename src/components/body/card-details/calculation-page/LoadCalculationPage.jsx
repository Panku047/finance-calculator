import React, {useEffect, useState} from "react";

import CAGRCalculator from "./CAGRCalculator";
import CAGRPercentageCalculator from "./CAGRPercentageCalculator";
import SIPCalculator from "./SIPCalculator";
import PPFCalculator from "./PPFCalculator"
import MFCalculator from "./MFCalculator"
import LumpsumCalculator from "./LumpsumCalculator"

const LoadCalculationPage = ({cardClicked}) =>{
    const[calcScreen, setCalcScreen] = useState()
    useEffect(() => {
        setCalcScreen(cardClicked);
    }, [cardClicked]);
    switch(calcScreen){
        case 'CAGR':
          return <CAGRCalculator />;
        case 'CAGRP':
          return <CAGRPercentageCalculator />;
        case 'PPF':
          return <PPFCalculator />;
        case 'LUMPSUM':
          return <LumpsumCalculator />;
        case 'SIP':
          return <SIPCalculator />;
        case 'MF':
            return <MFCalculator />;
        default:
          return <div>Default Page</div>;
    }
}

export default LoadCalculationPage;