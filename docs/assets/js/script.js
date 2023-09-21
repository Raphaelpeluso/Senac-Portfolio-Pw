//pegar os valores do formulario
let nome = document.querySelector("#nome")

const campoQtde = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoVisu = document.querySelector("#visu")
const campoPrazo = document.querySelector("#prazo")

campoPrazo.addEventListener("input", function () {
    const labelprazo = document.querySelector("label[for='prazo']")
    labelprazo.innerHTML = `Prazo: ${campoPrazo.value} semanas`
    calcular()
})

campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoVisu.addEventListener("change", calcular)

//calcular o preço
function calcular() {
    //R$100 por som
    let qtde = campoQtde.value
    let valor = qtde * 100

    console.log(valor)

    //mudar para switch
    switch (campoTipo.value) {
        case "1":
            valor += 100
            break
        case "2":
            valor += 100
            break
        case "3":
            valor += 100
            break
        case "4":
            valor += 100
            break
    }
    console.log(valor)
    
    if (campoLayoutSim.checked) {
        valor += qtde * 1500
    }
    console.log(valor)
    
    if (campoVisu.checked) {
        valor *= 1.1
    }
    console.log(valor)

    let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
    valor *= 1 + taxaDeUrgencia

    output.innerText = `R$ ${valor.toFixed(2)}`

}
    //mostrar o preço