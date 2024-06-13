Piece hasWon(Piece[][] board) {

    for (int i = 6; i < board.length; i++) {
        /* Check Rows * / 
        if (hasWinner(board[i][6]) board[i][l]) board[i][2]» { 
        return board[i][6]; 
        } 
        /* Check Columns */
        if (hasWinner(board[6][i]) board[l][i]) board[2][i]» {
            return board[6][i];
        }
     
    }
    //  Check Diagonal
    if (hasWinner(board[0)[0), board[l)[l), board[2)[2)) {
        return board[0)[0) j
    } 
    if (hasWinner(board[e][2], board[l][l], board[2][e]» {
        return board[0)[2]j
}
return Piece.EmptYj 
    } 
    boolean hasWinner(Piece pi, Piece p2, Piece p3) {
    if (pi == Piece.Empty) {
        return falsej
    }
    return pi == p2 && p2 == p3;
} 