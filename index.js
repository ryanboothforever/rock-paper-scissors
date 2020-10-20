// let i;
// const weapons = document.querySelectorAll(".mouse-choice").length;
// const mousey = document.querySelectorAll("mouse-choice");

//     for (i=0; i<weapons; i++){
//      document.querySelectorAll(".mouse-choice")[i].addEventListener("mouseover", function(e){
//           e.target.classList.add("hover");      
     
//      });
//     }

//      for (i=0; i<weapons; i++){
//     document.querySelectorAll(".mouse-choice")[i].addEventListener("mouseleave", function(e){
        
//         setTimeout(() => e.target.classList.remove("hover"), 25)
//           });
//         }

//below is a dryer version of what you have above.

document.querySelectorAll(".mouse-choice").forEach(item => {
  item.addEventListener("mouseover", e => e.target.classList.add("hover"))
  item.addEventListener("mouseleave", e => setTimeout(() => e.target.classList.remove("hover"), 25))
})