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
CONTAINER.addEventListener("mouseover",e=>{
  //the query selector ">" makes sure that the color change is not applied to the container or to the rows div containers
  for (let div of document.querySelectorAll("#container div > div")){
    if (e.target === div){
      let random_rgb;
      random_rgb = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
      e.target.style.backgroundColor = random_rgb;
      if (!(e.target.style.opacity)){
	e.target.style.opacity = 1;
      }
      else if (e.target.style.opacity <= 0){
	e.target.style.opacity = 0;
	continue;
      }
      e.target.style.opacity -= 0.1;
      console.log(e.target.style.opacity);
    }
  }
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
