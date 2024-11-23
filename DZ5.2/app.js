
let coins = 0;
let energy = 100;
const coinIncrease = 10;
const energyDecrement = 5;

const coinsDisplay = document.getElementById('coins');
const energyDisplay = document.getElementById('energy');
const clickButton = document.getElementById('clickButton');

function updateDisplay() {
  coinsDisplay.textContent = coins;
  energyDisplay.textContent = energy;

  if (energy <= 0) {
    clickButton.disabled = true;
  } else {
    clickButton.disabled = false;
  }
}

clickButton.addEventListener('click', () => {
  if (energy > 0) {
    coins += coinIncrease;
    energy -= energyDecrement;

    updateDisplay();
  }
});

updateDisplay();
