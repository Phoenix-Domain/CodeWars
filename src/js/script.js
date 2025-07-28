
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

//Next challenge

function anotherOne(){
  let count = 1;
  const span = document.querySelector('span');
  const button = document.querySelector('button');

  span.textContent = localStorage.getItem('Number');

  console.log(span)
  button.addEventListener('click', () => {
    span.textContent = `${Number(span.textContent) + 1}`

    localStorage.setItem('Number', span.textContent)
  })

  
  
}

anotherOne()