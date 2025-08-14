
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
