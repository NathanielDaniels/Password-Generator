const characterNumber = document.getElementById("characterAmountNumber");
const characterRange = document.getElementById("characterAmountRange");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

characterNumber.addEventListener("input", syncCharacterAmount);
characterRange.addEventListener("input", syncCharacterAmount);
includeUppercase.addEventListener("input");

form.addEventListener("submit", event => {
  event.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercase.checked;
  const includeNumbers = includeNumbers.checked;
  const includeSymbols = includesymbols.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

function generatePassword(
  characterAmount,
  includeNumbers,
  includeUppercase,
  includeSymbols
) {
  String.fromCharCode(65);
}

function fromLowToHigh(low, high) {
  for (let i = low; i <= high; i++) {
    Array.push(i);
  }
  return array;
}

function syncCharacterAmount(event) {
  const value = event.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
