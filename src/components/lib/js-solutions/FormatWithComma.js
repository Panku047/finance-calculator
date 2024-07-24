export function formatNumberWithIndianCommas(number) {
    let x = number.toString().split('.');
    let y = x[0];
    let lastThree = y.substring(y.length - 3);
    let otherNumbers = y.substring(0, y.length - 3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    if (x.length > 1) {
        result += '.' + x[1];
    }
    return result;
}