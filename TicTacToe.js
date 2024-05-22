function myFunction() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;

    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "white";
        b2btn.style.color = "white";
        b3btn.style.color = "white";
    } else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "white";
        b5btn.style.color = "white";
        b6btn.style.color = "white";
    } else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "white";
        b8btn.style.color = "white";
        b9btn.style.color = "white";
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "white";
        b4btn.style.color = "white";
        b7btn.style.color = "white";
    } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "white";
        b5btn.style.color = "white";
        b8btn.style.color = "white";
    } else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "white";
        b6btn.style.color = "white";
        b9btn.style.color = "white";
    }else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "white";
        b5btn.style.color = "white";
        b9btn.style.color = "white";
    } else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('turn').innerHTML = "Player X won";
        document.getElementById('turn').style.color = "#f54b9b"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "white";
        b5btn.style.color = "white";
        b7btn.style.color = "white";
    } else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == '0')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "white"; 
        b2btn.style.color = "white";
        b3btn.style.color = "white";
    } else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "white";
        b5btn.style.color = "white";
        b6btn.style.color = "white";
    } else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "white";
        b8btn.style.color = "white";
        b9btn.style.color = "white";
    } else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "white";
        b4btn.style.color = "white";
        b7btn.style.color = "white";
    } else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "white";
        b5btn.style.color = "white";
        b8btn.style.color = "white";
    } else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "white";
        b6btn.style.color = "white";
        b9btn.style.color = "white";
    } else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "white";
        b5btn.style.color = "white";
        b9btn.style.color = "white";
    } else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('turn').innerHTML = "Player O won";
        document.getElementById('turn').style.color = "#01c1d2"

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "white";
        b5btn.style.color = "white";
        b7btn.style.color = "white";
    } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('turn').innerHTML = "Match Tie";
    } else {
        if (flag == 1) {
            document.getElementById('turn').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('turn').innerHTML = "Player O Turn";
        }
    }
}

function funcReset() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function func_1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").style.backgroundColor = "#f54b9b";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").style.backgroundColor = "#01c1d2";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function func_2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").style.backgroundColor = "#f54b9b";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").style.backgroundColor = "#01c1d2";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function func_3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").style.backgroundColor = "#f54b9b";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").style.backgroundColor = "#01c1d2";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function func_4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").style.backgroundColor = "#f54b9b";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").style.backgroundColor = "#01c1d2";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function func_5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").style.backgroundColor = "#f54b9b";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").style.backgroundColor = "#01c1d2";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function func_6() {
    
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").style.backgroundColor = "#f54b9b";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").style.backgroundColor = "#01c1d2";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function func_7() {

    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").style.backgroundColor = "#f54b9b";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").style.backgroundColor = "#01c1d2";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function func_8() {

    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").style.backgroundColor = "#f54b9b";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").style.backgroundColor = "#01c1d2";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function func_9() {

    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").style.backgroundColor = "#f54b9b";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").style.backgroundColor = "#01c1d2";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}