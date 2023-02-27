let img = document.getElementById('1'); 
//or however you get a handle to the IMG
let width = img.clientWidth;
let height = img.clientHeight;

console.log(width,height)

img.addEventListener('click', (e) => {
  img.classList.remove("blur")
})