const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 550);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft

  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  /*Explicando 
  quando pegamos a posição de bottom do mario 
  recebemos em formato de string
  no caso 
  no apice do pulo 180px
  ao utilizar o metodo REPLACE subistituimos a string de PX por um intervalo vazio 
  a letras PX desaparecem mas continuamos a receber os numeros em formato de string 
  e é ai que entra o "+" na frente de WINDOW
  esse sinal converte a string em number */
    console.log(marioPosition);
    
  if (pipePosition <= 120 &&pipePosition > 0 && marioPosition<80) { 
  
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px `

    console.log(pipePosition);
      
    mario.src = "../assets/game-over.png"
    
    mario.style.width = '75px'
    mario.style.marginLeft = '50px' 
    mario.style.marginBottom = '31px'
    
    clearInterval(loop)

  } 
  
},10)
document.addEventListener('keydown', jump); 