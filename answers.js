function SettingandSwapping() {
   var myNumber = 42;
   var myName = 'Scott';
   var temp = myNumber;
   myNumber = myName;
   myName = temp;
}

function PrintandCount() {
    var sum = 0;
    for (var i = 512; i <= 4096; i++) {
        if (i % 5 === 0) {
            document.write(i);
            sum++;
        }
    }
    console.log(sum);
}

function Print() {
    for (var i = -52; i <= 1066; i++) {
        console.log(i);
    }
}

function MultiplesofSix() {
    var start = 0;
    while (start <= 60000) {
        if (start % 6 === 0) {
            console.log(start);
        }
        start++;
    }
}

function beCheerful() {
    var message = 'good morning!'
    for (var i = 0 ; i < 98; i++) {
        console.log(message);
    }
}

function CountingtheDojoWay() {
    for (var i = 1; i <= 100; i++) {
        console.log(i);
        if (i % 5 === 0) {
            console.log('Coding')
        }
        if (i % 10 === 0) {
            console.log('Dojo');
        }
    }
}

function MultiplesofThreeButNotAll() {
    for (var i = -300; i <= 0; i++) {
        if (i % 3 === 0 && i!== -3 && i!== -6) {
            console.log('i');
        }
    }
}

function WhatDoYouKnow(incoming) {
    console.log(incoming);
}

function PrintingIntegerswithWhile() {
    var startnum = 2000;
    while (startnum <= 5280) {
        console.log(startnum);
        startnum++;
    }
}

function WhoaThatSuckersHuge() {
    var sum = 0;
    for (var i = -300000; i <= 300000; i++){
        sum += i;
    }
    console.log(sum);
}

function YouSayItsYourBirthday(birthdayguess, birthmonthguess) {
    var birthday = 27;
    var birthmonth = 6;
    if (birthdayguess === birthday && birthmonthguess === birthmonth) {
        console.log('How did you know?')
    }
    else {
        console.log("Just another day...")
    }
}

function CountdownbyFours() {
    var startnum = 2016;
    while (startnum > 0) {
        console.log(startnum);
        startnum -= 4;
    }
}

function LeapYear(year) {
    if (year % 400 === 0 ) {
        console.log('It is a leap year');
    }
    else if (year % 4 === 0 && year % 100 !== 0) {
        console.log('It is a leap year');
    }
    else {
        console.log('It is not a leap year');
    }
}

function FlexibleCountdown(lowNum, highNum, mult) {
    for (var i = lowNum; i <= highNum; i++) {
        if (i % mult === 0){
            console.log(i);
        }
    }
}

function TheFinalCountdown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 % param1 === 0 && param2 !== param4) {
            console.log(param2);
        }
    }
}

function Countdown(number) { // The array is as long as the number given plus 1
    var arr = [];
    var temp = number;
    for (var i = 0 ; i <= number; i++) {
        arr[i] = temp;
        temp--;
    }
    return arr;
}

function PrintandReturn(num1, num2) { 
    console.log(num1);
    return(num2);
}

function FirstPlusLength(arr) { // If the array's first value is not a number, the function will not work
    return arr[0] + arr.length;
}

function ValuesGreaterthanSecond() {
    var arr = [1,3,5,7,9,13];
    for (var i = 2; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log(i-2);
}

function ThisLengthThatValue(num1, num2) {
    var arr = [];
    for (var i = 0; i < num1; i++) {
        arr[i] = num2;
    }
    if (num1 === num2) {
        console.log('Jinx!');
    }
}

function FittheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log('Too big!')
    }
    else if (arr[0] < arr.length) {
        console.log('Too small!')
    }
    else {
        console.log('Just right!')
    }
}

function fahrenheitToCelsius(fDegrees) {
    return ((fDegrees - 32) * 5) / 9;
}

function celsiusToFahrenheit(cDegrees) {
    return (cDegrees * 9 /5) + 32;
}

function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
}

function PreviousLengths(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i-1].length;
    }
    arr[0] = 0;
    return arr;
}

function PrintLowReturnHigh(arr) {
    var high = arr[0];
    var low = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (high < arr[i]) {
            high = arr[i];
        }
        if (low > arr[i]) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

function AddSeventoMost(arr) {
    var newarr = [];
    for (var i = 1; i < arr.length; i++) {
        newarr[i-1] = arr[i] + 7;
    }
    return newarr;
}
function PrintOneReturnAnother(arr) {
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            return arr[i];
        }
    }
}

function ReverseArray(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[arr.length - 1 - i];
    }
    return newarr;
}

function double(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] * 2;
    }
    return newarr;
}

function OutlookNegative(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newarr[i] = arr[i] * -1;
        }
    }
    return newarr;
}

function countPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) {
            sum++;
        }
    }
    arr[arr.length-1] = sum;
    return sum;
}

function alwaysHungry(arr) {
    counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'food') {
            console.log('yummy');
        }
        else {
            counter++;
        }
    }
    if (counter === 0) {
        console.log('I\'m hungry');
    }
}

function evensAndOdds(arr) {
    var counterOdd = 0;
    var counterEven = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i]  % 2 === 1) {
            counterOdd++;
            counterEven = 0;
        }
        if (arr[i] % 2 === 0) {
            counterEven++;
            counterOdd = 0;
        }
        if (counterOdd === 3) {
            console.log('That\'s odd!');
            counterOdd = 0;
        }
        if (counterEven === 3) {
            console.log('Even more so!')
            counterEven = 0;
        }
    }
}

function swapTowardTheCenter(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i];
    }
    arr[0] = newarr[arr.length - 1];
    arr[arr.length - 1] = newarr[0];
    arr[2] = newarr[arr.length - 3];
    arr[arr.length - 3] = newarr[2];
}

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (i % 2 === 1) {
            arr[i] += 1
        }
    }
    return arr;
}

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
       arr[i] *= num;
    }
    return arr;
}