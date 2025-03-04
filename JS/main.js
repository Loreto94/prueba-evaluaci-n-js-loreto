"use strict";
console.log ("JS está funcionando");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

/* Cuando la usuaria haga click en el botón de "Prueba", recoger el contenido del input "number" y mostrarlo en la consola
   """"""""""""""""""""""""""""""""""""""""""""""""""""", comparar el valor del número de la usuaria con el aleatorio y:
   -SI ES MAYOR QUE EL ALEATORIO: ESCRIBIR "DEMASIADO ALTO" EN EL INPUT PISTA
   -SI ES MENOR, "DEMASIADO BAJO"


*/
const sendButton = document.querySelector(".js__main__button");
const inputNumber = document.querySelector(".js__input__number");
const inputClue = document.querySelector(".js__clue");

const handleClick = (event) => {
    event.preventDefault();
    console.log("Ha hecho click");
    const numberSelected = inputNumber.value;
    console.log(numberSelected);
    inputClue.innerHTML = numberSelected;
}

sendButton.addEventListener("click", handleClick);