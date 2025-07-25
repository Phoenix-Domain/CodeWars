const solution = str => {
  let index = [];
  let parts = [];
  let start = 0;

  
  str.split('').forEach((x,i) => {
    if (x === x.toUpperCase()){
      index.push(i);
    }
  })
  
  index.forEach(index => {
    const part = str.slice(start, index)
    parts.push(part);
    start = index;
  })
  parts.push(str.slice(start))
  return parts.join(' ');
}