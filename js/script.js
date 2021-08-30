const a = document.getElementById('a');
const b = document.getElementById('b');

const lamp = document.getElementById('lamp');


function ligar () {


lamp.src="img/ligada.jpg";

}

function desligar () {

lamp.src="img/desligada.jpg";


}

function lampquebrada () {


lamp.src="img/quebrada.jpg";

}

a.addEventListener('click', ligar);
b.addEventListener('click', desligar);
lamp.addEventListener('dblclick', lampquebrada);