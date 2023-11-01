let nombre = prompt("Escribe tu nombre");
let peso = prompt("Escribe peso en kilos");
let altura = prompt("Escribe tu altura en metros");

IMC = peso / (altura * altura)
console.log(IMC)
if (IMC <= 18.5) {
    alert(`"${nombre} está bajo de peso."`)
}
if (IMC >= 18.5 && IMC <= 29.9) {
    alert(`"${nombre} tiene un peso saludable."`)
}
if (IMC >= 25 && IMC <= 29.9) {
    alert(`"${nombre} tiene sobrepeso."`)
}
if (IMC >= 30) {
    alert(`"${nombre} tiene obesidad."`)
}