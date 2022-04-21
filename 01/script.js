
//TASK 1

const linkElement = document.getElementById('link');
linkElement.setAttribute('target', '_blank');

document.getElementById('link').addEventListener("click", function (){
    document.getElementById('link').style.display = "none";
})

//TASK 2

var counter = 0;

document.addEventListener('click', function (){
    counter++;
    if(counter>=5){
        window.alert("To many clicks")
    }
})

//TASK 3

document.getElementById('motivate').innerText =
    new Date().getFullYear().toString() + ' - Time to build your career';