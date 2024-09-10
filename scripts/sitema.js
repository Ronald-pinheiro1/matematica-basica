let num1 = document.getElementById('num1')
let resp = document.querySelector('tbody.saida')
let div
function mostrar(){
    resp.innerHTML = ''
    let n1 = Number(num1.value)
    if(n1 > 10){
        n1 = Math.floor(Math.random()*10)
        alert(`Só são aceitos numeros iguais ou menores que 10\nFoi conciderado o numero ${n1}`)
    }
    if(n1<0){
        n1 = Math.floor(Math.random()*11)
        alert(`Só são aceitos numeros iguais ou maiores que 0\nFoi conciderado o número ${n1}`)
    }
    for(let ia = 1; ia < 11; ia++){
        div = Math.floor(n1 / ia)

        if(Math.floor(ia / n1) == Infinity)
            div = 0

        resp.innerHTML += `<td class="operacao">${n1} + ${ia} = ${ia + n1}</td><td class="operacao">${n1} - ${ia} = ${n1 - ia}</td><td  class="operacao">${n1} x ${ia} = ${ia * n1}</td><td  class="operacao">${n1} / ${ia} = ${div}</td>`
    }
}

