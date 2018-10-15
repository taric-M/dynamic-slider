const randomNumber = ()=> Math.floor(Math.random()*101);
window.onload = ()=>{
  const handle = document.getElementById('handle');
  setInterval(()=>{
  const num = randomNumber();
  handle.style.left = 'calc(' + num + '% - 2rem)';
  rotate(num);
  },2000)
}

function rotate(num){
  const text = document.getElementsByClassName('wrap-text');
  for(let i =0; i < text.length; i++){
    text[i].classList.toggle('rotate');
  }
  setTimeout(()=>{
  text[1].innerHTML = num;
  }, 750)
}