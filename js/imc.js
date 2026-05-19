function calculateIMC(event) {
    event.preventDefault()

    // 1. Capturar elementos
    const weightInput = document.getElementById("weight")
    const heightInput = document.getElementById("height")
    const resultBox = document.getElementById("result")
    const valueText = document.getElementById("imc-value")
    const descText = document.getElementById("imc-desc")

    // 2. Converter valores
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)

    console.log(weight)

     
    if(weight <= 0 || height <= 0) {
        alert("Por favor, preencha peso e altura com valores validos")
        return
    } 
    const imc = weight / (height * height)

    // 3. Definir classificação
    let classification = ''
    let color = ''

    if (imc < 18.5) {
        classification = "Abaixo do peso"
        color = "#e67e22" // Laranja
    } else if (imc <= 24.9) {
        classification = "Peso normal"
        color = "#00b894" // Verde
    } else if (imc <= 29.9) {
        classification = "Sobrepeso"
        color = "#e67e22"// Laranja
    } else {
        classification = "Obesidade"
        color = "#d63031"// Vermelho
    }

    // 4. Atualizar a tela
    valueText.innerText = imc.toFixed(2)
    valueText.style.color = color

    descText.innerText = classification
    descText.style.color = color

    // 3. Mostrar caixa
    resultBox.classList.add("show")

}