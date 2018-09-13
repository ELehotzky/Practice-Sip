const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const drinkCollection = document.getElementById("drink-collection");
const newDrinkForm = document.getElementsByClassName("add-drink-form")[0]
const fullDrink = document.getElementById("full-drink");
const cards = document.getElementsByClassName("card-expand")[0];
const drinkUrl = "http://localhost:3000/api/v1/drinks";

// YOUR CODE HERE
fetch(drinkUrl)
	.then(resp => resp.json())
	.then(addDrinkToPage)

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
    newDrinkForm.addEventListener("submit", mixNewDrink);
  } else {
    toyForm.style.display = 'none'
  }
})

function addDrinkToPage(drinks) {	
	drinks.forEach(addOneDrink);
}

function addOneDrink(drink) {
	drinkCollection.innerHTML += `
		<div id="${drink.id}" class="card">
		<span class="card-expand">
		<h2>${drink.name}</h2>
		<img src="${drink.image}" class="toy-avatar">
		<p>${drink.likes} Likes</p>
		</span>
		<button id="${drink.id}" class="like-btn">Like <3</button>
		<button id="${drink.id}" class="delete-btn">Delete</button>
	</div>
		`

}

// cards.addEventListener("click", showFullDrink);

function showFullDrink(drink) {
	fullDrink.innerHTML = `
		<div id="${drink.id}" class="card">
		<h2>${drink.name}</h2>
		<img src="${drink.image}" class="toy-avatar">
		<p>${drink.likes} Likes</p>
		<button id="${drink.id}" class="like-btn">Like <3</button>
	</div>
	`
}

drinkCollection.addEventListener("click", handleBtns)

function mixNewDrink(drink) {
	event.preventDefault();
	let name = document.getElementsByClassName('input-text')[0].value;
	let image = document.getElementsByClassName('input-text')[1].value;
	let ingredients = document.getElementsByClassName('input-text')[2].value.split(", ");
	let instructions = document.getElementsByClassName('input-text')[3].value;

	debugger
	fetch(drinkUrl, {
		method: "POST", 
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: name,
			image: image,
			ingredients: ingredients,
			instructions: instructions,
			likes: 0
		})
	})
	.then(resp => resp.json())
	.then(console.log)
}
	
function handleBtns(function(event) {
	if ()
})
