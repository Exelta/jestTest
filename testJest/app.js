let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
fromDollarToYen = (dollar) => {
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollar
}
fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}
fromYenToPound = (yen) => {
    return yen / (oneEuroIs.JPY / oneEuroIs.GBP)
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };


