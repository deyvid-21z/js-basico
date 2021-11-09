const salarioPer = peru.map(function(persona){
    return persona.salario;
});

const salarioOrdenadoPer = salarioPer.sort(function(salarioA, salarioB) {
    return salarioA - salarioB;
});
