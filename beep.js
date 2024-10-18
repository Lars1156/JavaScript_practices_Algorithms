function flowData() {
    console.log("Data is flowing...");
  }
  
  // Function to play a beep sound
  function playBeep() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }
  
  // Function to start data flow with a specified duration and break
  function startDataFlow(duration, breakDuration) {
    const dataFlowInterval = setInterval(flowData, 1000);
  
    setTimeout(() => {
      clearInterval(dataFlowInterval);
      playBeep();                  
      console.log("Data flow stopped. Taking a break...");
  
      setTimeout(() => {
        console.log("Resuming data flow...");
        startDataFlow(duration, breakDuration);
      }, breakDuration); 
    }, duration);
  }
  
 
  startDataFlow(5 * 60 * 1000, 5 * 1000);
  