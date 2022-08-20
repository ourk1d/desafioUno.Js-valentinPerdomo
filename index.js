let numero = parseInt(prompt("Ingresa un numero del 1 al 10"));

while(numero != 7){
    if(numero < 7) {alert("El numero es mas alto")}
    else if (numero > 7 && numero <=10) {alert("El numero es mas bajo")}
    else {alert("Tienes que ingresar un numero del 1 al 10")}
    numero = parseInt(prompt("Ingresa un numero del 1 al 10"))
};

alert("Acertaste el numero")