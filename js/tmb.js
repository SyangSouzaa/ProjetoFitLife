function calculatorTMB() {
    

    const gender = document.getElementById("gender").Value
    const age = parseInt(document.getElementById("age").value)
    const weight = parseFloat(documento.getElementById("weight").value)
    const height = parseInt(documento.getElementById("height").value)

    const resultBox = document.getElementById("result-box")
    const valueText = document.getElementById("tmb-value")

    if(!age || !weight || !height) {
        alert("Preencha todos os campos corretamente")
        return
    }

    let tbm = 0

    if (gender === "male") {
        tmb = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
    } else {
        tmb = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age
    }

    valueText.innerText = Math.round(tmb)
    resultBox.classList.add("show")
}