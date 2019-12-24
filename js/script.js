const characterNumber = document.getElementById("characterAmountNumber");
const characterRange = document.getElementById("characterAmountRange");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

characterNumber.addEventListener("input", syncCharacterAmount);
characterRange.addEventListener("input", syncCharacterAmount);
includeUppercase.addEventListener("input", syncCharacterAmount);
includeSymbols.addEventListener("input", syncCharacterAmount);

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64).concat(
    arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))
  )
);

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
  console.log(UPPERCASE_CHAR_CODES);
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(event) {
  const value = event.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
