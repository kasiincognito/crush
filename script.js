var input = document.getElementById("answer")
var answer = input.value
var button = document.querySelector("button")

button.addEventListener("click",function (){
    if(answer == "mrrobot"){
        alert("Congrats, you're my crush!")
    }
    else{
        alert("U're not my crush")
    }
})
    