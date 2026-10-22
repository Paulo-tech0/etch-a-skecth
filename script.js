const container = document.querySelector("#container");
const button = document.querySelector("#popup");
function displaySquareDivs(side){
  let mydivs = [];
  for (let i=0;i<side;i++){
    mydivs[i] = document.createElement("div");
    for (let j=0;j<side;j++){
      let mynewdiv = document.createElement("div");
      mydivs[i].appendChild(mynewdiv);
    }
    container.appendChild(mydivs[i]);
  }
}
displaySquareDivs(16);
container.addEventListener("mouseover",e=>{
  if (e.target.parentNode.parentNode === container){
    let random_rgb;
    random_rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    e.target.style.backgroundColor = random_rgb;
    if (!(e.target.style.opacity)){
      e.target.style.opacity = 1;
    }
    e.target.style.opacity -= 0.1;
    if (e.target.style.opacity <= 0){
      e.target.style.opacity = 0;
    }
  }
})
button.addEventListener("click", e=>{
  let sides = Number(prompt("Choose the sides of the grid (1-100): "));
  if (!sides) {sides = 16}
  else if (sides>100) {sides = 16;}
  else if (sides<1) {sides = 16;}
  container.replaceChildren();
  displaySquareDivs(sides);
})
