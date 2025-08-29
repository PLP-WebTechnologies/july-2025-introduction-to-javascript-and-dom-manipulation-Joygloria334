let cafeOpen = true;
const maxPets = 5;
var welcomeMessage = "Hello! Welcome to Pet Café!";

if (cafeOpen) {
  console.log(welcomeMessage);
} else {
  console.log("Sorry, we are closed!");
}

// Function 1: Greet customer
function greetCustomer(name) {
  alert(`Hi ${name}, enjoy your visit at Pet Café!`);
}

// Function 2: Calculate available spots
function availableSpots(currentPets) {
  return maxPets - currentPets;
}

// Example usage
greetCustomer("Joy");
console.log("Available spots:", availableSpots(3));

const menuItems = ["Treat 1", "Treat 2", "Drink 1", "Drink 2"];

// Loop 1: for loop
for (let i = 0; i < menuItems.length; i++) {
  console.log("Menu item:", menuItems[i]);
}

// Loop 2: for...of loop
for (const item of menuItems) {
  console.log("Enjoy your", item);
}

// DOM 1: Change main heading text
document.getElementById("mainHeading").textContent =
  "🐾 Welcome to Our Cozy Pet Café!";

// DOM 2: Change footer text
document.getElementById("footerText").textContent =
  "Follow us on Instagram and Twitter!";

// DOM 3: Add a new menu card dynamically
const menuCards = document.querySelector(".menu-cards");
const newCard = document.createElement("div");
newCard.className = "card";
newCard.textContent = "Special Treat";
menuCards.appendChild(newCard);
