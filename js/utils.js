// Verifica se é um número
export function notANumber(value) {
    return isNaN(value) || value == "" 
}

// calculo de IMC
export function IMC (weight, height) {
    return (weight / ((height/100)**2)).toFixed(2)
}