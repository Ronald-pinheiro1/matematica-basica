let num1 = document.getElementById('num1')
let resp = document.querySelector('tbody.saida')
let tela = document.getElementById('dimensoes')
let NumSten = ["zer0","um", "dois", "três","quatro","cinco","seis", "sete","oito","nove","dez"]
let div
function mostrar(){
    resp.innerHTML = ''
    let n1 = Number(num1.value)
    if(n1 > 10){
        n1 = Math.floor(Math.random()*10)+1
        alert(`Só são aceitos numeros iguais ou menores que dez\nFoi conciderado o numero ${NumSten[n1]}`)
    }
    if(n1<1){
        n1 = Math.floor(Math.random()*10)+1
        alert(`Só são aceitos números iguais ou maiores que um\nFoi conciderado o número ${NumSten[n1]}`)
    }
    for(let ia = 1; ia < 11; ia++){
        div = Math.floor(n1 / ia)

        if(Math.floor(ia / n1) == Infinity)
            div = 0

        resp.innerHTML += `<td class="operacao">${n1} + ${ia} = ${ia + n1}</td><td class="operacao">${n1} - ${ia} = ${n1 - ia}</td><td  class="operacao">${n1} x ${ia} = ${ia * n1}</td><td  class="operacao">${n1} / ${ia} = ${div}</td>`
    }
}
tela.innerHTML+= `Resolução da tela : <i>altura <strong>${screen.width}</strong> X largura <strong>${screen.height}</strong></i> `
