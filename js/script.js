const characterNumber = document.getElementById('characterAmountNumber')
const characterRange = document.getElementById('characterAmountRange')
const form = document.getElementById('passwordGeneratorForm')

characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', event => {
  event.preventDefault()
})

function syncCharacterAmount (event) {
  const value = event.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
