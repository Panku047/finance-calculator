import React, {useEffect, useState} from "react";

import CAGRCalculator from "./CAGRCalculator";
import CAGRPercentageCalculator from "./CAGRPercentageCalculator";

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
          return <div>Our Services</div>;
        case 'LUMPSUM':
          return <div>Contact Us</div>;
        case 'SIP':
          return <div>Read our Blog</div>;
        case 'LUMPSUM':
            return <div>Contact Us</div>;
        default:
          return <div>Default Page</div>;
    }
}

export default LoadCalculationPage;