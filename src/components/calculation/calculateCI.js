function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // JavaScript months are 0-based
}
function convertToDDMMYYYY(inputDate){
    let parts = inputDate.split('-')
    let newFromDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return newFromDate;
}
function calculateDateDifference(fromDateStr, toDateStr) {
    const datePattern = /^\d{2}-\d{2}-\d{4}$/;
  
    // Validate date format
    if (!datePattern.test(fromDateStr) || !datePattern.test(toDateStr)) {
      return "Please enter dates in the format dd-mm-yyyy.";
    }
    const fromDate = parseDate(fromDateStr);
    const toDate = parseDate(toDateStr);
    // Validate that from date is not greater than to date
    if (fromDate > toDate) {
      return "From date should not be greater than to date.";
    }
    const timeDifference = toDate - fromDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    return daysDifference;
}
export const calculateCIYears = (princialAmt, expectedReturn, years) =>{
    const timesCompoundedPerYear = 1;
    const annualRate = expectedReturn/100;
    let amount = princialAmt * Math.pow((1 + annualRate / timesCompoundedPerYear), timesCompoundedPerYear * years);
    let onlyReturn = amount - princialAmt;
    return [amount.toFixed(2), onlyReturn.toFixed(2)]
}

export const calculateCIDates = (princialAmt, expectedReturn, fromDate, toDate) =>{
    let newFromDate = convertToDDMMYYYY(fromDate);
    let newToDate = convertToDDMMYYYY(toDate);
    const days = calculateDateDifference(newFromDate, newToDate);
    const compoundingFrequency = 1;
    const years = days / 365;
    const annualRate = expectedReturn/100;
    // Calculate compound interest
    const amount = princialAmt * Math.pow((1 + annualRate / compoundingFrequency), compoundingFrequency * years);
    const onlyReturn = amount - princialAmt;
    return [amount.toFixed(2), days, newFromDate, newToDate, onlyReturn.toFixed(2)];
}

