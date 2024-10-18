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
  
function