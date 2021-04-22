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

const state = {
	pet: {
		health: 10,
		hunger: 100,
		happy: 0,
		age: 0,
		name: "choo",
	},
	showSettings: false,
	gameOver: false,
};

// EVENT HANDLER
buttons.forEach(button => button.addEventListener("click", handleClick));
input.addEventListener("change", updateName);

const render = () => {
	petInfo();
	petStats();
	sideBar();
	if (state.gameOver) {
		alert(`GAME OVER`);
		reset();
	}
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
const increaseHealth = () => (state.pet.health === 100 ? null : (state.pet.health += 5));
const increaseHappy = () => (state.pet.happy === 100 ? null : (state.pet.happy += 2));
const increaseHunger = () => (state.pet.hunger === 100 ? null : (state.pet.hunger += 2));
const increaseAge = () => (state.pet.age += 1);

const decreaseHealth = () => {
	state.pet.health -= 1;
	state.pet.health <= 0 && (state.gameOver = true);
};
const decreaseHunger = () => (state.pet.hunger === 0 ? null : (state.pet.hunger -= 10));
const decreaseHappy = () => {
	if (state.pet.happy === 0) return;
	state.pet.happy -= getRandomNum();
	if (state.pet.happy < 0) state.pet.happy = 0;
};

const showSettings = () => (state.showSettings = true);
const reset = () => location.reload();
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

function updateName(e) {
	state.pet.name = e.target.value;
	input.value = "";
	alert("Name updated!");
}

function getRandomNum() {
	return Math.floor(Math.random() * 5 + 1);
}

setInterval(() => {
	increaseAge();
	decreaseHealth();
	increaseHunger();
	decreaseHappy();
	render();
}, 60000);

