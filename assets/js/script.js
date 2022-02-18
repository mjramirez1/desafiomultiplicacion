const validarNumero = () => {
    const solicitaN = prompt("Ingrese número para calcular su tabla"); //solicita dato al usuario
    if (solicitaN < 1 || solicitaN > 20) { // define rango 
        alert(`El número ${solicitaN} esta fuera del rango.\n\nPor favor ingresar un nuevo numero entre 1 y 20.`);
        return validarNumero();
    } else {
        return solicitaN
    }
}
const factorial = numeroFact => { //operacion factorial
    if (numeroFact === 0 || numeroFact === 1) {
        return 1;
    } else {
        const resultadoF = numeroFact * factorial(numeroFact - 1); // Ejemplo N3: 3 * (3 - 1 * (2 - 1 * (1)))  => (3 * (2 * (1 * (1))))
        return resultadoF
    }
}
const numeroTabla = parseInt(validarNumero());  //ciclo anidado y resuelve operación
for (let i = 1; i <= numeroTabla; i++) {
    const resultado = i * numeroTabla;
    console.log(`${i} x ${numeroTabla} = ${resultado}`);
    if (i === numeroTabla) {
        for (let i = 1; i <= numeroTabla; i++) {
            const resultadoFactorial = factorial(i);
            console.log(`El factorial de ${i} es ${resultadoFactorial}`);
        }
    }

}

