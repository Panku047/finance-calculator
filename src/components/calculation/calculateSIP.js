export function calculateSIP(sipAmount, annualRate, years) {
    // Convert annual rate to monthly rate
    let monthlyRate = annualRate / 12 / 100;

    // Total number of payments (investment period in months)
    let totalPayments = years * 12;

    //calculate total investment amount
    let totalInvestmentAmt = sipAmount * years * 12

    // Calculate the future value of the SIP investments
    let accumulatedAmount = sipAmount * (Math.pow(1 + monthlyRate, totalPayments) - 1) / monthlyRate * (1 + monthlyRate);

    //calculate only return
    let totalReturn = accumulatedAmount - totalInvestmentAmt

    return [totalInvestmentAmt,totalReturn.toFixed(0), accumulatedAmount.toFixed(1)];
}

