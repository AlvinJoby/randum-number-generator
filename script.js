let label = document.getElementById("label")
let min;
let max;
let randomNumber;
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/

function onSubmit(){
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    min = Number(min);
    max = Number(max);
    randomNumber = Math.floor(Math.random()*max)+min;
    label.textContent = randomNumber;
}
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/