// Add your own interactivity here.
// Example: log a greeting to the console.
console.log("Hello from script.js!");

document.addEventListener("DOMContentLoaded", function() {
  // First button
  document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("answer").textContent = "It's practical :p";
  });

  // Second button
  document.getElementById("HAir").addEventListener("click", function() {
    document.getElementById("answerColor").textContent = "Idk lol";
  });
});


