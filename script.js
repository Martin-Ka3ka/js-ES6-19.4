//Task 1

const string1 = 'Hello';
const string2 = 'World!';

const joinStrings = `${string1} ${string2}`;

console.log('Łączenie stringów  ' + joinStrings);

//Task 2


let multiply = (number1, number2 = 1) => (number1 * number2);

console.log('wynik mnożenia '+ multiply(5));


//Task 3

const average = (...data) => data.reduce((a, b) => a + b) / data.length;

console.log('Średnia: ' + average(5, 51, 66, 101)); 


//Task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('średnia  ' + average(...grades));

//Task 5

let table = [1, 4, 'Iwona', false, 'Nowak'];
let [ , , firstName, ,lastName] = table;

console.log('Imię ' + firstName + ' Nazwisko '+ lastName);


