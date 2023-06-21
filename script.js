const htmlArray = document.getElementById('main-array')

var characterField = document.querySelector('#characterField')

var charactersArray = ["Luke", "Leia", "Han Solo"]

htmlArray.innerHTML = charactersArray

function addCharacters() {
  charactersArray.push(characterField.value)

  htmlArray.innerHTML = charactersArray
  
  clearField()
}

function deleteCharacters() {
  const index = charactersArray.indexOf(characterField.value)
  if (index == -1) {
    return
  }

  console.log(index)
  charactersArray.splice(index, 1)

  htmlArray.innerHTML = charactersArray

  clearField()
}

function clearField() {
  characterField.value = ''
}