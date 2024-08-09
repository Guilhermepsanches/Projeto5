let palavra;

function setup() {
  createCanvas(600, 600);
  
  
  let palavras =["Ordem Paranormal", "The Boys", "Dr Stone"]
  palavra = random(palavras);
  
}

function draw() {
  background('rgb(0,244,255)');
  fill('rgb(0,255,7)')
  textSize(80)
  textAlign(CENTER,CENTER);
  
  let maximo = width
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300)
 
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo noturno")
  } else{
    console.log("Você  modo noturno não é necessario neste momento")
  }
}
 modoNoturno(15);
modoNoturno(20);
