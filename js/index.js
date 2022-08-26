// Utilicé un prompt para crear una tabla. Luego utilizo el if/else para que se encuentre prolija en pantalla.

let num = prompt("Ingrese un número")

function saltoLinea() {
    document.write("<br>")
}


for( i = 1 ; i <= 10 ; i++ ) {
    document.write(`${num} * ${i} = ${num * i} `) 
    if(i != 10) {
        saltoLinea()
    }
    else {
        saltoLinea()
        document.write("Tabla del ", num )
    }
} 