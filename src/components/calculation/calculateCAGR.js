export const calculateCAGR = (initialValue, finalValue, years) =>{
    let fvByIv = calculatefVByIv(finalValue, initialValue);
    let power = calculateDivision(years);
    let cagr = calculateCAGRFunction(fvByIv, power);
    return cagr;
}

function calculateDivision(years) {
    return 1 / years;
}

function calculatefVByIv(fv, iv) {
    return fv / iv;
}

function calculateCAGRFunction(fvByIv, power) {
    // if (typeof fvByIv !== 'number' || typeof power !== 'number' || isNaN(fvByIv) || isNaN(power)) {
    //     return "Something went wrong!!!";
    // }
    return ((Math.pow(fvByIv, power) - 1) * 100).toFixed(2);
}

