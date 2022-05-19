// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2);

const returnLastTwoDrivers = array => array.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return fare => fare * num;
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectedDrivers) {
    return selectedDrivers(drivers);

}

