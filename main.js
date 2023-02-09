let val1=document.getElementById("inputBox");
let arr1=[];
let arr2,i;

document.getElementById('add').onclick = function(){
    if (document.querySelector('#inputBox').value.length == 0) {
        alert("Enter a task");

    }
    else {
        var a=`<div class="box">
                <p id="first">${val1.value}</p>
                <button id="tick">tick</button>
                <button id="trash">trash</button>
            </div><br/>`;
        event.preventDefault();
        document.getElementById('location').innerHTML+=a;
        document.getElementById('inputBox').value="";

        arr1 = document.querySelectorAll('#tick');
        for (i = 0; i < arr1.length; i++) {
            arr1[i].onclick=function(){
                this.parentNode.style.textDecoration = "line-through";
                event.preventDefault();
            }
        }
        arr2 = document.querySelectorAll('#trash');
        for (i = 0; i < arr2.length; i++) {
            arr2[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
}

document.getElementById('completed').onclick= function(){
    for (i = 0; i < arr1.length; i++) {
        event.preventDefault();
           if(arr1[i].parentNode.style.textDecoration){
                arr1[i].parentNode.style.display="flex";
           }
           else {
                arr1[i].parentNode.style.display="none";
           }
        }
}
document.getElementById('active').onclick= function(){
    for (i = 0; i < arr1.length; i++) {
           event.preventDefault();
            if(arr1[i].parentNode.style.textDecoration){
                arr1[i].parentNode.style.display="none";
           }
           else {
                arr1[i].parentNode.style.display="flex";
           }
        }
}
document.getElementById('clear').onclick= function(){
    for (i = 0; i < arr1.length; i++) {
            event.preventDefault();
            arr1[i].parentNode.style.display="none";
        }
}
document.getElementById('all').onclick= function(){
    for (i = 0; i < arr1.length; i++) {
            event.preventDefault();
            arr1[i].parentNode.style.display="flex";
        }
}



