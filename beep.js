// Function to simulate data flow (this can be your actual data processing logic)
function flowData() {
    console.log("Data is flowing...");
  }
  
  function playBeep() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }
    const dataFlowInterval = setInterval(flowData, 1000);
  
      // After the break, restart data flow
  setTimeout(() => {
    clearInterval(dataFlowInterval);
    playBeep();               
  }, 5 * 60 * 1000); 
  