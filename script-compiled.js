'use strict';

//Task 1

var string1 = 'Hello';
var string2 = 'World!';

var joinStrings = string1 + ' ' + string2;

console.log('Łączenie stringów  ' + joinStrings);

//Task 2


var multiply = function multiply(number1) {
  var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return number1 * number2;
};

console.log('wynik mnożenia ' + multiply(5));

//Task 3

var average = function average() {
  for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  return data.reduce(function (a, b) {
    return a + b;
  }) / data.length;
};

console.log('Średnia: ' + average(5, 51, 66, 101));

//Task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('średnia  ' + average.apply(undefined, grades));

//Task 5

var table = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = table[2],
    lastName = table[4];


console.log('Imię ' + firstName + ' Nazwisko ' + lastName);
