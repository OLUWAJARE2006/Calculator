var display = document.getElementById('display')

function appendtodisplay (value){
        display.value += value
}
function cleardisplay(){
    display.value= '';
}
function calculate(){
   display.value= eval(display.value)
}
function del(){
        display.value=delete(display.value)
}