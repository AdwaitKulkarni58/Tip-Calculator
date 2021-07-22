document.querySelector("button").addEventListener("click", calculate);

function calculate() {

    let amount = document.querySelector(".amount").value;
    let perc = document.querySelector(".tip-percentage").value;

    document.querySelector(".result").innerHTML = (amount * (1 + (perc / 100))).toFixed(2);
}