const signUpSection = document.querySelector("#container-sign_up");
const signInSection = document.querySelector("#container-sign_in");
const dashBoardSection = document.querySelector("#container-dashboard");
const btnSignIn = document.querySelector("#btn-sign_in");
const createAccount = document.querySelector("#btn-create-account");
const createAccountSign = document.querySelector("#btn-create-account-sign");
const container_items = document.querySelector("#container-items");
const card_Items = document.querySelector("#card-items");
const btnCrateItem = document.querySelector("#create-item");

// Function to hide a section
// function hideSection() {
//   signInSection.classList.add("hidden");
//   dashBoardSection.classList.add("hidden");
//   signUpSection.classList.remove("hidden");
// }

// // Function to show a section
// function showSection() {
//   signInSection.classList.add("hidden");
//   dashBoardSection.classList.remove("hidden");
// //   signUpSection.classList.add("hidden");
// }

// Adding event listeners
// btnSignIn.addEventListener("click", showSection);
// createAccount.addEventListener("click", hideSection);
// createAccountSign.addEventListener("click", showSection);

btnCrateItem.addEventListener("submit", addItem);

// Function to add an item to the DB
function addItem(e) {
  e.preventDefault(); // Prevent default form submission

  let itemDetails = {
    name: e.target.name.value,
    price: e.target.price.value,
    quantity: e.target.quantity.value,
    image: e.target.image_url.value,
    comment: e.target.commentSection.value,
  };

  renderOneItem(itemDetails); // Render the item locally

  // Send the data to the server (assuming a POST request)
  fetch("http://localhost:3000/phones", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemDetails),
  })
    .then(res => res.json())
    .then(data => console.log(data)); // Optional: Log the response data
}

// Function to render a single item
function renderOneItem(item) {
  let card = document.createElement("li");
  card.classList = "flex flex-col gap-3"
  card.innerHTML = `
    <div class="flex flex-row ">
        <img class="h-20 w-20" src="${item.image}">
        <div class="flex flex-col gap-2">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <p>${item.quantity}</p>
        </div>
    </div>
        <p class ="w-1/2 h-72">${item.comment}</p>
  `
  container_items.appendChild(card);
}


// Fetch request to get all films
function getFilms() {
  fetch("http://localhost:3000/phones")
    .then(res => res.json())
    .then(filmData => filmData.forEach(film => renderOneItem(film)));
}

function initialize (){
    getFilms();
}

initialize();
