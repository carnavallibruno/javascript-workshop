const htmlArray = document.getElementById('main-array')

var characterField = document.querySelector('#characterField')

var charactersArray = ["Luke", "Leia", "Han Solo"]

htmlArray.innerHTML = charactersArray

function addCharacters() {
  if (characterField.value == '') {
    fieldError('add')
    return
  }
  charactersArray.push(characterField.value)

  htmlArray.innerHTML = charactersArray

  clearField()
}

function deleteCharacters() {
  const index = charactersArray.indexOf(characterField.value)
  if (index == -1) {
    fieldError('delete')
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

function fieldError(operationType) {
  const fieldError = document.getElementById('fieldError')
  if (operationType == 'delete') {
    fieldError.innerHTML = 'Character not found'
  } else {
    fieldError.innerHTML = 'The field is empty'
  }

  setTimeout(() => {
    fieldError.innerHTML = ''
  }, 5000)
}