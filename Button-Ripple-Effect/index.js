const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover", (Event)=> {
    console.log(Event.pageX - btnEL.offsetLeft);
}); 
