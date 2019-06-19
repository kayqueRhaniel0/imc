var peso = document.querySelector('.peso')
var altura = document.querySelector('.altura')
var resultado = document.querySelector('.resultado')
var button = document.querySelector('.button')

function IMC(){
	var kg = Number(peso.value)
 var metros = [Number(altura.value)]
if (kg == 0 || metros == 0) {
	alert('Digite valores válidos!')
}else{
	var imc  = kg/(metros*metros)
	resultado.innerHTML = ` Seu índice de massa corporea é: <strong>${imc.toFixed(2).replace( '.' , ',' )}</strong> <br>`
	if (imc < 0 || metros < 0 ) {
		alert('Valor impossível')
	}else if (imc < 17) {
		resultado.innerHTML += '<strong>Você está muito abaixo do peso</strong>'
	}else if (imc >= 17 && imc <= 18.49) {
		resultado.innerHTML += '<strong>Você está abaixo do peso</strong>'
	}else if (imc >= 18.5 && imc <= 24.99) {
		resultado.innerHTML += '<strong>Peso Normal</strong>'
	}else if(imc >= 25 && imc <= 29.99 ){
		resultado.innerHTML += '<strong>Você está acima do peso normal</strong>'
	}else if(imc >= 30 && imc <= 34.99){
		resultado.innerHTML += '<strong>Você está na obesidade I</strong>'
	}else if(imc >= 35 && imc <= 39.99){
		resultado.innerHTML += '<strong>Você está na obesidade II (Severa)</strong>'
	}else if (imc >= 40){
		resultado.innerHTML += "<strong>Você está na obesidade III (Mórbida)</strong>"
	}
}
	peso.value = ''
altura.value = ''

}

