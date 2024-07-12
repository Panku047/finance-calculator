export const calculateCAGR = (initialValue, finalValue, years) =>{
    let fvByIv = calculatefVByIv(finalValue, initialValue);
    let power = calculateDivision(years);
    let cagr = calculateCAGRFunction(fvByIv, power);
    if(isNaN(cagr) || cagr === 'Infinity'){
        return 'Invalid Input'
    }else{
        return cagr +'%';
    }
}

function calculateDivision(years) {
    return 1 / years;
}

function calculatefVByIv(fv, iv) {
    return fv / iv;
}

function calculateCAGRFunction(fvByIv, power) {
    return ((Math.pow(fvByIv, power) - 1) * 100).toFixed(2);
}

