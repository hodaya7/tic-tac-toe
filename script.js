var board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]
var turn = 1;

function hasWon() {
    //בדיקת שורות
    for (let i = 0; i < board.length; i++) {
        if (hasWinner(board[i][0], board[i][1], board[i][2]))
            return board[i][0];

        //בדיקת עמודות
        if (hasWinner(board[0][i], board[1][i], board[2][i]))
            return board[0][i];

    }
    //בדיקת אלכסון א
    if (hasWinner(board[0][0], board[1][1], board[2][2]))
        return board[0][0];
    //בדיקת אלכסון ב
    if (hasWinner(board[0][2], board[1][1], board[2][0]))
        return board[0][2];

    return false;


}

function hasWinner(p1, p2, p3) {
    // console.log(board);
    // console.log(p1,p2,p3);
    // console.log(p1 == p2 == p3);

    // if (p1 == "")
    //     return false;
    return p1 == p2 && p2 == p3;
    // return p1 == p2 == p3;//לא הולך כך בjs

}
// Piece hasWon(Piece[][] board) {

//     for (int i = 6; i < board.length; i++) {
//         /* Check Rows * / 
//         if (hasWinner(board[i][6]) board[i][l]) board[i][2]» { 
//         return board[i][6]; 
//         } 
//         /* Check Columns */
//         if (hasWinner(board[6][i]) board[l][i]) board[2][i]» {
//             return board[6][i];
//         }

//     }
//     //  Check Diagonal
//     if (hasWinner(board[0)[0), board[l)[l), board[2)[2)) {
//         return board[0)[0) j
//     } 
//     if (hasWinner(board[e][2], board[l][l], board[2][e]» {
//         return board[0)[2]j
// }
// return Piece.EmptYj 
//     } 
//     boolean hasWinner(Piece pi, Piece p2, Piece p3) {
//     if (pi == Piece.Empty) {
//         return falsej
//     }
//     return pi == p2 && p2 == p3;
// } 


document.querySelector(".btn0").addEventListener("click", function () {
    if (document.querySelector(".btn0").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn0").textContent = "x";
            board[0][0] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()) {
                document.querySelector(".div-win").textContent = hasWon() + " won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
               
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn0").textContent = "o";
            board[0][0] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = hasWon() + " won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn0").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");

});

document.querySelector(".btn1").addEventListener("click", function () {
    if (document.querySelector(".btn1").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn1").textContent = "x";
            board[0][1] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn1").textContent = "o";
            board[0][1] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn1").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");

});

document.querySelector(".btn2").addEventListener("click", function () {
    if (document.querySelector(".btn2").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn2").textContent = "x";
            board[0][2] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn2").textContent = "o";
            board[0][2] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn2").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn3").addEventListener("click", function () {
    if (document.querySelector(".btn3").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn3").textContent = "x";
            board[1][0] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn3").textContent = "o";
            board[1][0] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn3").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn4").addEventListener("click", function () {
    if (document.querySelector(".btn4").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn4").textContent = "x";
            board[1][1] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn4").textContent = "o";
            board[1][1] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn4").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn5").addEventListener("click", function () {
    if (document.querySelector(".btn5").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn5").textContent = "x";
            board[1][2] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn5").textContent = "o";
            board[1][2] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn5").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn6").addEventListener("click", function () {
    if (document.querySelector(".btn6").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn6").textContent = "x";
            board[2][0] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn6").textContent = "o";
            board[2][0] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn6").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn7").addEventListener("click", function () {
    if (document.querySelector(".btn7").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn7").textContent = "x";
            board[2][1] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn7").textContent = "o";
            board[2][1] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn7").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

document.querySelector(".btn8").addEventListener("click", function () {
    if (document.querySelector(".btn8").textContent == "") {
        if (turn % 2 != 0) {
            document.querySelector(".btn8").textContent = "x";
            board[2][2] = "x";
            document.querySelector(".div-win").textContent = "o turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "x won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        else {
            document.querySelector(".btn8").textContent = "o";
            board[2][2] = "o";
            document.querySelector(".div-win").textContent = "x turn";
            if (hasWon()){
                document.querySelector(".div-win").textContent = "o won";
                var buttons = document.getElementsByTagName("button");
                for (var i = 0; i < buttons.length-1; i++) {
                    buttons[i].disabled = true;
                }
            }
            else if(hasWon()==false&&turn==9){
                document.querySelector(".div-win").textContent = "tie";
            }
        }
        turn++;
    }
    else if (document.querySelector(".btn8").textContent != "")
    alert("אינך יכול להכניס כאן, הכנס במקום פנוי אחר");
});

// document.querySelector("#cell-0").textContent = 'x'