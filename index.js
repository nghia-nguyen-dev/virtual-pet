const state = {
	pet: {
		health: 0,
		hunger: 100,
		happy: 0,
		age: 7,
		name: "Spike",
	},
	showSettings: false,
	gameOver: false,
};

// DOM REF
const petName = document.querySelector(".header__name");
const petAge = document.querySelector(".header__age");
const health = document.querySelector(".fill--health");
const hunger = document.querySelector(".fill--hunger");
const happy = document.querySelector(".fill--happy");
const settings = document.querySelector(".settings");
const info = document.querySelector(".info");

const buttons = document.querySelectorAll("button");

// EVENT HANDLER
buttons.forEach(button => button.addEventListener("click", handleClick));

const render = () => {
	// if (state.pet.health === 0) {
	// 	return alert(`GAME OVER`);
	// }

	petName.textContent = `${state.pet.name}`;
	petAge.textContent = `${state.pet.age} years old`;

	health.style.width = `${state.pet.health}%`;
	hunger.style.width = `${state.pet.hunger}%`;
	happy.style.width = `${state.pet.happy}%`;

	if (state.showSettings) {
		settings.style.display = "initial";
		info.style.display = "none";
	}

    
};

// Initial render
render();

// ACTIONS
const increaseHealth = () =>
	state.pet.health === 100 ? null : (state.pet.health += 5);
const decreaseHunger = () =>
	state.pet.hunger === 0 ? null : (state.pet.hunger -= 1);
const increaseHappy = () =>
	state.pet.happy === 100 ? null : (state.pet.happy += 2);
const showSettings = () => (state.showSettings = true);
const reset = () => console.log(`object`);

function handleClick(e) {
	switch (e.target.dataset.type) {
		case "clean":
			increaseHealth();
			break;
		case "feed":
			decreaseHunger();
			break;
		case "play":
			increaseHappy();
			break;
		case "settings":
			showSettings();
			break;
		case "reset":
			reset();
			break;

		default:
			return;
	}

	render();
}

// const incrementAge = age => ++age;

// // checks if one day has passed.
// function hasOneDayPassed() {
// 	// get today's date. eg: "7/37/2007"
// 	const date = new Date().toLocaleDateString();

// 	// if there's a date in localstorage and it's equal to the above:
// 	// inferring a day has yet to pass since both dates are equal.
// 	if (localStorage.date === date) return false;

// 	// this portion of logic occurs when a day has passed
// 	localStorage.date = date;
// 	return true;
// }

// hasOneDayPassed() && incrementAge(init.age);
