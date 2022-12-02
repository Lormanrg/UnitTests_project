const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

test("1 euro should be 1.2 dollars", () => {
  let result = fromEuroToDollar(50);
  expect(result).toBe(60);
});

test("1 dollar should be 0.01 yens", () => {
  let result = fromDollarToYen(60);
  expect(result).toBe(6395);
});

test("1 Yen should be 0.0063 pounds", () => {
  let result = fromYenToPound(50);
  expect(result).toBe(0.31);
});
