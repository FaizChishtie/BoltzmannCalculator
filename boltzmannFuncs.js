/*
@Author Faizaan Chishtie
*/
var v = 0;
var temperature = 0;
var dv = 0;
var molar = 0;

function storeValues(){
    molar = double(document.getElementsById('molar_mass').value);
    v = document.getElementsById('velocity').value;
    temperature = document.getElementsById('temperature').value;
    dv = document.getElementsById('deltav').value;
  document.getElementsById("output").innerHTML = JsFunction();
}
