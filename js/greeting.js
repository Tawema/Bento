// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = "Emmanuel";

// Possibility to add style to the name
function createGreeting(greeting) {
  let tag = document.getElementById("greetings");
  let nameTag = document.createElement("span");
  nameTag.classList.add("greetings__name");
  nameTag.innerText = name;
  tag.innerText = greeting;
  tag.appendChild(nameTag);
}

// Here you can change your greetings
const gree1 = "Go to Sleep, ";
const gree2 = "Good morning, ";
const gree3 = "Good afternoon ";
const gree4 = "Good evening ";
const gree5 = "Good evening ";
const gree6 = "Good evening ";

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  createGreeting(gree1);
} else if (hour >= 6 && hour < 12) {
  createGreeting(gree2);
} else if (hour >= 12 && hour < 17) {
  createGreeting(gree3);
} else {
  createGreeting(gree4);
}
