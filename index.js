let horas = parseInt(prompt('Ingrese las horas trabajadas'));
let pagoxhora = parseInt(prompt('Ingrese el pago por las horas trabajadas'));

let dineroXhoras = horas * pagoxhora;
if (horas > 45){
console.log('El trabajador trabajo las horas extra')
console.log('el salario de este trabajador fue',dineroXhoras)
}
else{
  console.log('Este trabajador no trabajo lo suficiente para las horas extra')
  console.log('El salario de este trabajador fue' ,dineroXhoras)
}


