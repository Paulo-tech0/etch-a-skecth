const container = document.querySelector("#container");
const button = document.querySelector("#popup");
const STANDARD_SIDES = 16;
function displaySquareDivs(side){
  for (let i=0;i<side;i++){
    let div = document.createElement("div");
    for (let j=0;j<side;j++){
      let childdiv = document.createElement("div");
      childdiv.classList.add("square");
      div.appendChild(childdiv);
    }
    container.appendChild(div);
  }
}
displaySquareDivs(STANDARD_SIDES);
container.addEventListener("mouseover",e=>{
  if (e.target.classList.contains("square")){
    let random_rgb;
    random_rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    e.target.style.backgroundColor = random_rgb;
    if (!e.target.style.opacity){e.target.style.opacity = 1}
    else if (e.target.style.opacity <= 0){
      return;
    }
    e.target.style.opacity -= 0.1;
  }
})
button.addEventListener("click", e=>{
  let sides = Number(prompt("Choose the sides of the grid (1-100): "));
  if (!Number.isInteger(sides)){sides = STANDARD_SIDES}
  else if (!sides) {sides = STANDARD_SIDES}
  else if (sides>100) {sides = STANDARD_SIDES;}
  else if (sides<1) {sides = STANDARD_SIDES;}
  container.replaceChildren();
  displaySquareDivs(sides);
})
