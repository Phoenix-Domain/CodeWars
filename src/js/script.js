
// Challenge: Split a string by uppercase letters
// Example: "camelCaseString" becomes "camel Case String"
// Difficulty: 4/5
// Ranking: 6 KATA

const solution = str => {
  let index = []; //to find the index of uppercase letters
  let parts = []; //to store the parts of the string

  let start = 0; //to keep track of the start index of each part

  
  str.split('').forEach((x,i) => {
    if (x === x.toUpperCase()){
      index.push(i);
    }
  })
  
  index.forEach(index => {
    const part = str.slice(start, index)
    parts.push(part);
    start = index;
  });

  parts.push(str.slice(start))
  return parts.join(' ');
}

//Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
 
//6Kyu

/* Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/

function arrDiff(a,b){
  
  
    aElements = a.filter(x => !b.includes(x));
    
  
  return aElements;
}


/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

6Kyu

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/
function duplicateEncode(word){
  // change string to lowercase
  const str = word.toLowerCase();
  const charCount = {};

  for(char of str){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  'hello'

 
  return Array.from(str).map(x => charCount[x] > 1 ? ')' : '(').join('');
}


/*Task
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

Series:1+ 
4
1
​
 + 
7
1
​
 + 
10
1
​
 + 
13
1
​
 + 
16
1
​
 +…

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */

function SeriesSum(n) {
  if(n === 0){
    return '0.00'
  }else{
        let newVal;
        let series = [1];

        for(let i = 1; i < n; i++){
          newVal = (1/(1+(3*i)));
          series.push(newVal)
        }

        let sum = series.reduce((acc,cumm) => acc + cumm);

        return String(sum.toFixed(2))
      }
}

/* A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

const isSquare = n => Number.isInteger(Math.sqrt(n)); //Solution



/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

function highAndLow(numbers){
  const splitNums = numbers.split(' ');

  return `${Math.max(...splitNums)} ${Math.min(...splitNums)}`
}


/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false */

function isTriangle(a,b,c){
  return a + b > c && b + c > a && c + a >  b
}


function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

5Kyu

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zeroCount = 0;
  
  arr.forEach(x => {
    if(x === 0){
      zeroCount++
    }
  })
  
  const noZeros = arr.filter(x => x !== 0);
  
  for(let i = 0; i < zeroCount; i++){
    noZeros.push(0);
  }
  
  return noZeros
} 


/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/ 

function squareDigits(num){
  let string = String(num)
  let newNum = [];
  
  for(char of string){
    newNum.push(char * char)
  }

  return Number(newNum.join(''))
}

console.log(squareDigits(34971))