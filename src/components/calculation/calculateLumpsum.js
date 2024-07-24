// Function to calculate lump sum amount
export function calculateLumpsum(principal, annualRate, years) {
    // Convert annual rate from percentage to a decimal
    let rateDecimal = annualRate / 100;

    // Calculate the lump sum amount using the formula: A = P(1 + r)^n
    let lumpSum = principal * Math.pow((1 + rateDecimal), years);

    //calculate only return
    let totalReturn = lumpSum - principal

    // Return the calculated lump sum
    return [principal, totalReturn.toFixed(2), lumpSum.toFixed(2)];
}