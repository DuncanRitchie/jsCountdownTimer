console.log("JavaScript loaded!")

document.getElementById("submit").addEventListener("click",()=>{
    console.log("Button has been clicked.")
    let time = document.getElementById("timer-input").value;
    document.getElementById("message").innerHTML = "Your time is <span id='display-time'>"+time+"</span>.";
})