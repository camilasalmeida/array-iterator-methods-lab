const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];

  const travelMethods = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

//--------------------------------1---------------------------\\
/*
Exercise 1: Array.prototype.filter()✅
Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.
- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/

let veryOldInventors = inventors.filter((inventor) => {
    if (inventor.year > 1499 && inventor.year < 1600)
    return inventor;
});
//console.log('Exercise 1 my result: ', veryOldInventors); 
/*
    'Exercise 1 correct result: ',
    [
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ])
    */

//---------------------------------2-----------------------------\\
/*
Exercise 2: Array.prototype.map() ✅

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

let inventorNames = inventors.map((inventor) => {
    return `${inventor.first} ${inventor.last}`;
});
//console.log('Exercise 2 my result: ', inventorNames) 
/*'Exercise 2 correct result: ',
  [
    { first: 'Albert', last: 'Einstein' },
    { first: 'Isaac', last: 'Newton' },
    { first: 'Galileo', last: 'Galilei' },
    { first: 'Marie', last: 'Curie' },
    { first: 'Johannes', last: 'Kepler' },
    { first: 'Nicolaus', last: 'Copernicus' },
    { first: 'Max', last: 'Planck' },
    { first: 'Katherine', last: 'Blodgett' },
    { first: 'Ada', last: 'Lovelace' },
    { first: 'Sarah E.', last: 'Goode' },
    { first: 'Lise', last: 'Meitner' },
    { first: 'Hanna', last: 'Hammarström' }
  ])
  */

//---------------------------------3-------------------------------\\

/*
Exercise 3: Array.prototype.sort()✅
Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/
let sortedByBirthYear = inventors.sort((a, b) => a.year - b.year);
//console.log('Exercise 3 my result: ', sortedByBirthYear) 
/*'Exercise 3 correct result: ',
  [
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
  ]
*/
//-------------------------------4------------------------------------\\
/* 
Exercise 4: Array.prototype.find() ✅
Use Array.prototype.find() to identify the inventor with the first name 'Ada' 
from an array of inventor objects
- You have an array of objects, each representing an inventor with various 
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the 
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/
let inventorNamedAda = inventors.find((inventor) => {
    return inventor.first === 'Ada';
});
//console.log('Exercise 4 my result: ', inventorNamedAda) 
/*'Exercise 4 correct result: ', 
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
) */

//------------------------------5------------------------------------\\

/*
Exercise 5: Array.prototype.map()  ✅
Use the Array.prototype.map() method to reformat each name in the 'people' 
array. The goal is to convert names from "Last, First" format to "First Last" 
format.
Hint: Use the String.prototype.split() method to separate the first and last 
      names. You can split the string using ', ' as the separator.
      After splitting the names, rearrange them to the "First Last" format.
*/

let firstLast = people.map( name => {
    let peopleArr = name.split(', ');
    //console.log(peopleArr);
    let lastName = peopleArr[0];
    let firstName = peopleArr[1];
return `${firstName} ${lastName}`;
});
//console.log('Exercise 5 my result: ', firstLast)

//------------------------------6-------------------------------------\\