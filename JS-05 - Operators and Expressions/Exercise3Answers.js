function numberRange(number) {
    if (number < 0) {
        console.log(number + " is less than 0");
    }
    else if (number <= 25) {
        console.log(number + " is between 0 and 25");
    }
    else if (number <= 100) {
        console.log(number + " is between 26 and 100");
    }
    else {
        console.log(number + " is greater than 100");
    }
}

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'
