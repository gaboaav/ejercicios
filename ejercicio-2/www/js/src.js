'use strict';

function cafe(name, lastName, option){
    let message='';
    option=option.toLowerCase();
    console.log(option);
    if (option==="y"){
        message=`¡Bienvenid@ ${name} ${lastName}! \nEn breves recibirá su café calentito en casa.`
        return message;
    }
    else{
        message=`¡Bienvenid@ ${name} ${lastName}! \nHoy no hay café.`
        return message;
    }
}

let nombre=prompt("Ingrese su nombre: ");
let lastName=prompt("Ingrese su apellido: ");
let option=prompt("Desea un café? (Y/n): ");

alert(cafe(nombre,lastName,option));