const driver = {
  driverLicense: "C",
  licenseIssued: new Date().getFullYear() - 5, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.9,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car
function canRentACar(driverToTest) {
  let result;

  if (driverToTest.driverLicense.substring(0, 1) === "B"
   && driverToTest.licenseIssued <= new Date().getFullYear() - 2
   && (driverToTest.numberOfAccident === 0 || driverToTest.bonus >= 0.7)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(canRentACar(driver));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
