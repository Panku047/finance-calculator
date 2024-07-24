import React, {useEffect, useState} from "react";

import CAGRCalculator from "./CAGRCalculator";
import CAGRPercentageCalculator from "./CAGRPercentageCalculator";
import SIPCalculator from "./SIPCalculator";
import AbsoluteCalculator from "./AbsoluteCalculator"
import CICalculator from "./CICalculator"
import LumpsumCalculator from "./LumpsumCalculator"
import RuleOf72 from "./RuleOf72";

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
        case 'ABSCAL':
          return <AbsoluteCalculator />;
        case 'LUMPSUM':
          return <LumpsumCalculator />;
        case 'SIP':
          return <SIPCalculator />;
        case 'MF':
            return <CICalculator />;
        case 'RULE72':
          return <RuleOf72 />;
        default:
          return <div>Default Page</div>;
    }
}

export default LoadCalculationPage;