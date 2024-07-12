export const calculateCAGRPercentage = (returnPercentage, years) =>{
    let fvByIv = calculatefVByIv(returnPercentage);
    let power = calculateDivision(years);
    let cagr = calculateCAGRFunction(fvByIv, power);
    if(isNaN(cagr) || cagr === 'Infinity'){
        return 'Invalid Input'
    }else{
        return cagr +'%';
    }
}

function calculatefVByIv(returnPercentage){
    let fv = Number(returnPercentage) + 100;
    return fv/100
}
function calculateDivision(years) {
    return 1 / years;
}

function calculateCAGRFunction(fvByIv, power) {
    return ((Math.pow(fvByIv, power) - 1) * 100).toFixed(2);
}