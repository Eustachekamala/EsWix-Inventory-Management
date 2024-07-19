const dashBoardSection = document.querySelector("#container-dashboard");
const card_Items = document.querySelector("#card-items");
const createItemForm = document.querySelector("#create-item");
const name = document.querySelector("#name");
const price =  document.querySelector("#price");
const image = document.querySelector("#image");
const quantity = document.querySelector("#quantity");
const comment = document.querySelector("#comment");


createItemForm.addEventListener("click", addItem);

// Function to add an item to the DB
function addItem(e) {
  e.preventDefault(); // Prevent default form submission

  let itemDetails = {
    name: name.value,
    price: Math.floor(price.value), 
    quantity: Math.floor(quantity.value),
    image: image.value,
    comment: comment.value,
  };

  renderOneItem(itemDetails); // Render the item locally
  addItemsPost(itemDetails);
  createItemForm.reset(); // Reset the form after submission
}

// Function to render a single item
function renderOneItem(item) {
  let card = document.createElement("li");
  card.classList = "w-80 h-96 rounded-2xl flex flex-col justify-center gap-3 m-4 bg-gray-200 p-8";
  card.innerHTML = `
    <div class="flex flex-row gap-3 p-2 items-center">
      <img class="w-44 h-44" src="${item.image}" alt="${item.name}">
      <div class="flex flex-col gap-2">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <p>${item.quantity}</p>
      </div>
    </div>
    <p class="w-full h-72">${item.comment}</p>
  `;
  card_Items.appendChild(card);
}

// Fetch request to get all items
function getItems() {
  fetch("http://localhost:3000/phones")

    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(dataItems => dataItems.forEach(item => renderOneItem(item)))
    // .catch(error => console.error("Error fetching items:", error));
}

// Function to add item via POST request
function addItemsPost(itemDetails) {
  fetch("http://localhost:3000/phones", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(itemDetails),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(data => console.log("Item added:", data)) // Optional: Log the response data
    .catch(error => console.error("Error adding item:", error));
}

// Initialize the application
function initialize() {
  getItems();
}

initialize();
