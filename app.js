const fromEuroToDollar = (valueInEuro) => {
  let valueInDollar = valueInEuro * 1.2;
  return parseFloat(valueInDollar.toFixed(2));
};

const fromDollarToYen = (valueInDollar) => {
  let valueInYen = (valueInDollar * 127.9) / 1.2;
  return parseFloat(valueInYen.toFixed(2));
};

const fromYenToPound = (valueInYen) => {
  let valueInPound = (valueInYen * 0.8) / 127.9;
  return parseFloat(valueInPound.toFixed(2));
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
