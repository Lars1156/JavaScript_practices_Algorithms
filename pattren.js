function starPattern(n) {
    for (let i = 1; i <= n; i++) {
      console.log('*'.repeat(i));
    }
  }

  starPattern(5);

  console.log( "Second star patten");
  
  function invertedStarPattern(n) {
    for (let i = n; i >= 1; i--) {
      console.log('*'.repeat(i));
    }
  }
  
  invertedStarPattern(5);

console.log("Pirramid Pattren" , pyramidPattern);

function pyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}
pyramidPattern(5);
