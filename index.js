const state = {
	pet: {
		health: 0,
		hunger: 100,
		happy: 0,
		age: 0,
		name: "Spike",
	},
	showSettings: false,
	gameOver: false,
};
 const resetState = {...state}

// DOM REF
const petName = document.querySelector(".header__name");
const petAge = document.querySelector(".header__age");
const health = document.querySelector(".fill--health");
const hunger = document.querySelector(".fill--hunger");
const happy = document.querySelector(".fill--happy");
const settings = document.querySelector(".settings");
const info = document.querySelector(".info");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

// EVENT HANDLER
buttons.forEach(button => button.addEventListener("click", handleClick));
input.addEventListener("change", handleInput);

const render = () => {
	if (state.gameOver) {
		return alert(`GAME OVER`);
	}
	petInfo();
	petStats();
	sideBar();
};

const petInfo = () => {
	petName.textContent = `${state.pet.name}`;
	petAge.textContent = `${state.pet.age} years old`;
};

const petStats = () => {
	health.style.width = `${state.pet.health}%`;
	hunger.style.width = `${state.pet.hunger}%`;
	happy.style.width = `${state.pet.happy}%`;
};

const sideBar = () => {
	if (state.showSettings) {
		settings.style.display = "initial";
		info.style.display = "none";
	} else {
		settings.style.display = "";
		info.style.display = "initial";
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
const reset = () => console.log(`reset`)
const back = () => (state.showSettings = false);

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
		case "back":
			back();
			break;

		default:
			return;
	}

	render();
}

function handleInput(e) {
	state.pet.name = e.target.value;
	input.value = "";
	alert("Name updated!");
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
