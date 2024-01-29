document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const emergencyStopButton = document.getElementById("emergencyStopButton");

  startButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ command: "start" });
    startButton.disabled = true;
    stopButton.disabled = false;
    emergencyStopButton.disabled = false;
    mobileSearchButton.disabled = true;
  });
  
  stopButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ command: "stop" });
    startButton.disabled = false;
    stopButton.disabled = true;
    emergencyStopButton.disabled = true;
    mobileSearchButton.disabled = false;
  });
  
  emergencyStopButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ command: "emergencyStop" });
    startButton.disabled = false;
    stopButton.disabled = true;
    emergencyStopButton.disabled = true;
    mobileSearchButton.disabled = false;
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "updateCounter") {
    // Update the HTML with the new counter
    document.getElementById('counter').textContent = message.counter;
  }
});
