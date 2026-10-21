const CONTAINER = document.querySelector("#container");
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
CONTAINER.addEventListener("mouseover",e=>e.target.style.backgroundColor="blue")
