var turn = 0; //Turno entre O y X (0 y 1)

//Funcion para seleccionar espacio
function change(box){
    if(box.className == "cell E"){ //Revisar si el espacio está libre
        if(turn == 0){ //Si el turno está en 0 el valor del espacio va a ser O
            box.innerHTML = "O";
            turn = 1;
            box.className = "cell D";
            box.style.color = "red"
        } else { //Si el turno está en 1 el valor del espacio va a ser X
            box.innerHTML = "X";
            turn = 0;
            box.className = "cell D";
            box.style.color = "blue"
        }
        check(); //Revisar si hay un ganador
    }
}

//Funcion para revisar si hay un ganador
function check(){
    //Tomar el valor de cada espacio del juego
    var A = document.getElementById("A").innerHTML;
    var B = document.getElementById("B").innerHTML;
    var C = document.getElementById("C").innerHTML;
    var D = document.getElementById("D").innerHTML;
    var E = document.getElementById("E").innerHTML;
    var F = document.getElementById("F").innerHTML;
    var G = document.getElementById("G").innerHTML;
    var H = document.getElementById("H").innerHTML;
    var I = document.getElementById("I").innerHTML;
    
    //Revisar si alguna combinación de tres espacios coinciden
    //Alertar al ganador y limpiar el tablero
    if(A == B && B == C && A != ""){
        setTimeout(function() {alert(A + " ganó!"); clear()}, 100);
    } else if(D == E && E == F && D != ""){
        setTimeout(function() {alert(D + " ganó!"); clear()}, 100);
    } else if(G == H && H == I && G != ""){
        setTimeout(function() {alert(G + " ganó!"); clear()}, 100);
    } else if(A == D && D == G && A != ""){
        setTimeout(function() {alert(A + " ganó!"); clear()}, 100);
    } else if(B == E && E == H && B != ""){
        setTimeout(function() {alert(B + " ganó!"); clear()}, 100);
    } else if(C == F && F == I && C != ""){
        setTimeout(function() {alert(C + " ganó!"); clear()}, 100);
    } else if(A == E && E == I && A != ""){
        setTimeout(function() {alert(A + " ganó!"); clear()}, 100);
    } else if(C == E && E == G && C != ""){
        setTimeout(function() {alert(C + " ganó!"); clear();}, 100);
    } else if(A != "" && B != "" && C != "" && D != "" && E != "" && F != "" && G != "" && H != "" && I != ""){
        setTimeout(function() {alert("Empate!"); clear();}, 100);
    }
}

//Función para recetear el juego
function reset(){
    clear(); //Vaciar el tablero
}

//Función para limpiar el tablero
function clear(){
    var A = document.getElementById("A");
    var B = document.getElementById("B");
    var C = document.getElementById("C");
    var D = document.getElementById("D");
    var E = document.getElementById("E");
    var F = document.getElementById("F");
    var G = document.getElementById("G");
    var H = document.getElementById("H");
    var I = document.getElementById("I");
    
    A.innerHTML = "";
    A.className = "cell E"
    B.innerHTML = "";
    B.className = "cell E"
    C.innerHTML = "";
    C.className = "cell E"
    D.innerHTML = "";
    D.className = "cell E"
    E.innerHTML = "";
    E.className = "cell E"
    F.innerHTML = "";
    F.className = "cell E"
    G.innerHTML = "";
    G.className = "cell E"
    H.innerHTML = "";
    H.className = "cell E"
    I.innerHTML = "";
    I.className = "cell E"
}