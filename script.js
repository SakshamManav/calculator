let buttons = document.querySelectorAll(".btn");
let number = document.querySelector(".number");

let string = "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{

        if(e.target.innerHTML == "="){
            string = eval(string);
            number.innerText = string;
        }
        else if(e.target.innerHTML == "C"){
            string="";
            number.innerText = string;
        }
        else{
            console.log(e.target);
            string += e.target.innerHTML;
            number.innerText = string;
        }
       
    })
})