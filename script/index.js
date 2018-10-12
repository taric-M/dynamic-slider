const randomNumber = ()=> Math.floor(Math.random()*101);
window.onload = ()=>{
  const handle = document.getElementById('handle');
  setInterval(()=>{
  const num = randomNumber();
  handle.style.left = 'calc(' + num + '% - 2rem)';
  handle.innerHTML = num;
  },2000)
}
