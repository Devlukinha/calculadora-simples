function somar(){
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res1 = document.getElementById('res1')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var result1 = n1 + n2
    res1.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${result1} </strong>`
}

function subtrair(){
    var tn3 = document.querySelector('input#txtn3')
    var tn4 = document.querySelector('input#txtn4')
    var res2 = document.getElementById('res2')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var result2 = n3 - n4
    res2.innerHTML = `A subtração entre ${n3} e ${n4} é igual a <strong>${result2} </strong>`
}

function multiplicar(){
    var tn5 = document.querySelector('input#txtn5')
    var tn6 = document.querySelector('input#txtn6')
    var res3 = document.getElementById('res3')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var result3 = n5 * n6
    res3.innerHTML = `A multplicação entre ${n5} e ${n6} é igual a <strong>${result3} </strong>`
}

function dividir(){
    var tn7 = document.querySelector('input#txtn7')
    var tn8 = document.querySelector('input#txtn8')
    var res4 = document.getElementById('res4')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var result4 = n7 / n8
    res4.innerHTML = `A divisão entre ${n7} e ${n8} é igual a <strong>${result4} </strong>`
}