const characterNumber = document.getElementById('characterAmountNumber')
const characterRange = document.getElementById('characterAmountRange')

syncCharacterAmount = e => {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)
