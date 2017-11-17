/*
@Author Faizaan Chishtie
*/
var v = 0;
var temperature = 0;
var dv = 0;
var molar = 0;

// P(v) = [(M/(2piRT))^(3/2)]*e^(-(Mv^2)/(2RT))*(v^2)*dv
/*
P(v):
where{
- M = molar mass of gas
- R = boltzmann Constant / Avogadro's constant
- pi = 3.1415926
- v = velocity of gas
- T = temperature of gas
- e = 2.71828
}
*/

function storeValues(){
    molar = document.getElementById('molar_mass').value;
    v = document.getElementById('velocity').value;
    temperature = document.getElementById('temperature').value;
    dv = document.getElementById('deltav').value;
    var out = "P(v) for velocity (" + v + "m/s) = " + calculatePv();
    document.getElementById("output").innerHTML = out;
}

function calculatePv(){
  var frac = calculateFrac();
  var e = calculateE();
  var op = frac*e*dv*Math.pow(v,2);
  return op;

}

function calculateFrac(){
  var operation = (molar)/(2*3.1415926*temperature*8.31);
  operation = Math.pow(operation, (3/2));
  return operation;
}

function calculateE(){
  var operation = (-(molar*Math.pow(v,2))/(2*8.31*temperature));
  operation = Math.pow(2.71828,operation);
  return operation;
}
