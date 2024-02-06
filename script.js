const flipCard = document.querySelectorAll('.flip-card')


let firstCard = null
let lockedCount = 0

function checkMatch(card1, card2) {
  const imgSrc1 = card1.querySelector('.front-card').src
  const imgSrc2 = card2.querySelector('.front-card').src

  if (imgSrc1 === imgSrc2) {
    setTimeout(() => {
      card1.classList.add('locked')
      card2.classList.add('locked')

      checkAllCardsLocked()
    }, 1000)
  } else {
    setTimeout(() => {
      card1.classList.toggle('flipped')
      card2.classList.toggle('flipped')
    }, 1000)
  }
}

function checkAllCardsLocked() {
  lockedCount += 2
  if (lockedCount === 12) {
    Congratulations()
  }
}

function Congratulations() {
  const congratulationsElement = document.getElementById('congratulations');
  congratulationsElement.style.display = 'block';
}


const cards = `[
    {
      "card": "AnchoDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/AnchoDeBasto.png"
    },
    {
      "card": "DosDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/DosDeBasto.png"
    },
    {
      "card": "TresDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/TresDeBasto.png"
    },
    {
      "card": "CuatroDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/CuatroDeBasto.png"
    },
    {
      "card": "CincoDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/CincoDeBasto.png"
    },
    {
      "card": "SeisDeBasto",
      "back":"./cards/Back.png",
      "IMG": "./cards/SeisDeBasto.png"
    }
  ]`


const jsonData = JSON.parse(cards)
const CardContainer = document.getElementById("cards")

jsonData.forEach(card => {
  // Crear un nuevo div para cada tarjeta
  const divContainer = document.createElement("div")
  divContainer.classList = "flip-card"

  //Crea una imagen para el div
  const img = document.createElement("img")
  img.src = card.IMG
  img.classList = "front-card"

  //Crea una imagen trasera para el div
  const imgBack = document.createElement("img")
  imgBack.src = card.back
  imgBack.classList = "back-card"


  //Agregar la imagen al div
  divContainer.appendChild(img)
  divContainer.appendChild(imgBack)

  // Agregar el div al contenedor principal
  CardContainer.appendChild(divContainer)


  //Multiplicar DivContainer

  const divContainer2 = divContainer.cloneNode(true)
  CardContainer.appendChild(divContainer2)



  //Animar Cartas


  function CardEventFirstCard() {
    divContainer.addEventListener('click', function () {
      divContainer.classList.toggle('flipped')
      if (!firstCard) {
        firstCard = divContainer
      } else {
        checkMatch(firstCard, divContainer)
        firstCard = null
      }
    })
  }

  function CardEventSecondCard() {
    divContainer2.addEventListener('click', function () {
      divContainer2.classList.toggle('flipped')
      if (!firstCard) {
        firstCard = divContainer2
      } else {
        checkMatch(firstCard, divContainer2)
        firstCard = null
      }
    })
  }

  CardEventFirstCard()
  CardEventSecondCard()

  //Esta solución utiliza la variable firstCard para realizar la comparación entre las dos cartas volteadas. La función checkMatch toma dos elementos de tarjeta y compara las fuentes de las imágenes para determinar si son iguales o diferentes. Luego, muestra la alerta correspondiente. Además, la lógica de manejo de firstCard se ha integrado en la función de clic para evitar duplicar el código.



})

//Desorganizar la lista de tarjetas

function shuffleCards() {
  for (let i = CardContainer.children.length; i >= 0; i--) {
    CardContainer.appendChild(CardContainer.children[Math.random() * i | 0])

  }
}

shuffleCards()

//Bienvenida

document.addEventListener('DOMContentLoaded', function () {
  var welcomeElement = document.getElementById('welcome')
  welcomeElement.style.display = 'block'
})

function closeWelcome() {
  var welcomeElement = document.getElementById('welcome')
  welcomeElement.style.display = 'none'
}


