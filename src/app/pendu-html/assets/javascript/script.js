function pendu() {


  let alphabet = "azertyuiopqsdfghjklmwxcvbn".split('')
  let mysteryWord = false
  let inputWord = false
  let dead = 0
  loadContainerGame()

  function loadContainerGame() {
    containerGame = document.querySelector('.containerPenduGame')
    console.log(containerGame)
    containerPendu = document.createElement('div')
    containerPendu.classList.add("containerPendu")
    containerWord = document.createElement("div")
    containerWord.classList.add("containerWord")
    containerGame.appendChild(containerWord)
    containerGame.appendChild(containerPendu)
    loadGame()

  }

  function loadGame() {
    inputWord = document.createElement("input")
    inputWord.classList.add("inputWord")
    containerWord.appendChild(inputWord)
    alphabet.forEach(element => {
      keyKeyboard = document.createElement('div')
      keyKeyboard.classList.add('key')
      keyKeyboard.innerHTML = element
      containerPendu.appendChild(keyKeyboard)
    });
    imgGame()
  }

  function enterWord(params) {
    if (params.key === 'Enter' && params.srcElement.closest("input").value !== "") {
      mysteryWord = inputWord.value
      mysteryWordForMatch = inputWord.value
      mysteryWord = mysteryWord.split('')
      inputWord.remove()
      inputWord = true
      mysteryWord.forEach(element => {
        wordDiscover = document.createElement('div')
        wordDiscover.classList.add(element)
        containerWord.appendChild(wordDiscover)
      });
    }
  }

  function imgGame() {
    penduImg = document.createElement('img')
    penduImg.classList.add('sayoriPendu')
    containerGame.appendChild(penduImg)
    sayoriImg = document.createElement('img')
    sayoriImg.classList.add('sayori')
    containerGame.appendChild(sayoriImg)
  }

  function discoveryWord(params) {
    let keyDiscovery = params.srcElement.closest(".key").innerHTML
    if (inputWord === true) {
      params.srcElement.closest(".key").classList.replace('key', 'keyDie')
    }
    if (mysteryWordForMatch.match(keyDiscovery)) {
      sayoriImg.src = "assets/images/pendu/sayori.png"
      foundKey = mysteryWordForMatch.match(keyDiscovery)
      containerWord.querySelectorAll('.' + foundKey[0]).forEach(element => {
        element.innerHTML = foundKey[0]
      });
    } else {

      if (dead < 9) {
        dead++
        penduImg.src = "assets/images/pendu/pendu" + dead + ".png"
        if (dead >= 9) {
          countDown(containerPendu.childNodes.length)
        }
      }
    }
  }

  function countDown(count) {
    setInterval(function () {
      if (count > 0) {
        count--
        child = containerPendu.querySelector('div')
        containerPendu.removeChild(child)
        if (containerWord.childNodes.length === count - 1) {
          childWord = containerWord.querySelector('div')
          containerWord.removeChild(childWord)
        }
        console.log(count)
        if (count === 0) {
          location.reload()
        }
      }
    }, 100)
  }

  containerPendu.addEventListener('click', discoveryWord)
  inputWord.addEventListener('keypress', enterWord)

}
