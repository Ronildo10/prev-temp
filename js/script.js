function calcular(n1, n2){
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value


    selector = document.getElementById("selector").value

    switch(selector){
        case'+':
        calculo = (n1) + (2) 
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
    }
}




