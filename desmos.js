let element = document.createElement('div');
element.innerHTML = "<div id='calculator'></div>;
document.body.appendChild(div);
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'graph1', latex: 'y=x^2'});