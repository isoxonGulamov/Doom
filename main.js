
let bg1 = document.getElementById("bg1")
let natija = 20
let count = 2
bg1.textContent =count
let nom = setInterval(() => {
  count -= 1
  bg1.textContent = count
 
  setTimeout(()=>{

  bg1.style.backgroundColor = "red"
  bg2.style.backgroundColor = " #585858"
  bg3.style.backgroundColor = " #585858"
  },2*1000)
  
  setTimeout(()=>{
  bg1.style.backgroundColor = " #585858"
  bg3.style.backgroundColor = " #585858"
    bg2.style.backgroundColor = "yellow"
    },3*1000)

    setTimeout(()=>{
      bg1.style.backgroundColor = " #585858"
        bg2.style.backgroundColor = " #585858"
        bg3.style.backgroundColor = " green"
            
        },4*1000)
}, 1000);
 
let bls = document.getElementById("bl")

setInterval(function (e) {
  let rang = Math.floor(Math.random()*1000000)
  let rang2 = Math.floor(Math.random()*1000)
bl.style.color = `#${rang}`

bl.style.backgroundColor = `#${rang2}000`

},100)
console.log(bl);



