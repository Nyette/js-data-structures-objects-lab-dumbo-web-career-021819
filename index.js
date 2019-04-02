// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '11 Broadway'
};


function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {
    name: 'Sam',
    address: '11 Broadway'
  };
  newDriver[key] = value;
  return newDriver;
};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};


function deleteFromDriverByKey(driver, key) {
  const newDriver = {
    name: 'Sam',
    address: '11 Broadway'
  };
  delete newDriver[key];
  return newDriver;
};


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
