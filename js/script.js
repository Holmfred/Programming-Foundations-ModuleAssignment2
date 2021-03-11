//Module Assignment 2

//Question 1
var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++){

	var age = pets[i].age;

	if(age <= 4) {
		console.log(pets[i].type)
	}
}

//Question 2

function logWord(one) {
	var typeofOne = typeof one;

	if(typeofOne !== "boolean") {
		console.log("Please pass a boolean value in")
	}
		else {
			console.log(one)
		}
	}

 logWord(5)


//Question 3

var heading = document.querySelector("h2")
var button = document.querySelector("button")

function changeButton() {
	heading.innerHTML = "Updated subheading"
	heading.style.color = "blue"
}

button.onclick = changeButton;
