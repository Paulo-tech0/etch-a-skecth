const CONTAINER = document.querySelector("#container");
const BUTTON = document.querySelector("#popup");
function displaySquareDivs(side){
  let mydivs = [];
  for (let i=0;i<side;i++){
    mydivs[i] = document.createElement("div");
    for (let j=0;j<side;j++){
      let mynewdiv = document.createElement("div");
      mydivs[i].appendChild(mynewdiv);
    }
    CONTAINER.appendChild(mydivs[i]);
  }
}
displaySquareDivs(16);
CONTAINER.addEventListener("mouseover",e=>
{
  e.target.style.backgroundColor="blue";
})
BUTTON.addEventListener("click", e=>{
  let sides = Number(prompt("Choose the sides of the grid: "));
  let divs = document.querySelectorAll("#container div");
  if (sides>100) {sides = 100;}
  for (let div of divs){
    div.remove();
  }
  displaySquareDivs(sides);
})
