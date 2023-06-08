//this array will help structure the board
var board = [
    [null, 'g', null, 'g', null, 'g', null, 'g'],
    ['g', null, 'g', null, 'g', null, 'g', null],
    [null, 'g', null, 'g', null, 'g', null, 'g'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['s', null, 's', null, 's', null, 's', null],
    [null, 's', null, 's', null, 's', null, 's'],
    ['s', null, 's', null, 's', null, 's', null]
]
//varuabke us a pointer to the span on the html page that stores value
// selected piece
var selValueElem = document.querySelector('#selectedsquare');

//function creats checkers board with 24 pieces on each side and 2 rows with no pieces
// 24 pieces 3 rows of 8 each alternating every other square 
function createBoard() {
    //create a secion in html to hold the board
    var theboard = document.createElement('section');
    theboard.id = 'checkersBoard';
    document.body.appendChild(theboard);
    // the outer loop builds rows
    for (var i = 0; i < board.length; i++) {
        //the inner loop builds columns 
        for (var j = 0; j < board.length; j++) {
            var square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute("id", "div" + i + j);
            //if i and j added together is an odd number make the background of the square gold
            if ((i + j) % 2 == 1) {
                //add the css class bg to the square
                square.classList.add('bg');
                // add the event listener for when the div is clicked
                square.addEventListener("click", movePiece);

            }

            theboard.appendChild(square);
            if (board[i][j]) {
                createpiece("piece" + i + j, 'checkers-' + board[i][j], square);
            }
        }
    }
}
function createpiece(id, pieceClass, thesquare) {
    // creat a div
    var newPiece = document.createElement('div');
   //set the id
   newPiece.setAttribute("id", id);
    // the checkers css class makes pieces round
   newPiece.classList.add("checkers");
   //the piececlass determines the color of the pieces
    newPiece.classList.add(pieceClass);
    //add on click event so the get player pieces function is called when the piece is clicked on 
    newPiece.addEventListener('click', getPlayerPiece);
    thesquare.appendChild(newPiece);
}

function movePiece(event) {
    console.log("target selected=" + event.target.id);

    var newSquareId = event.target.id;
    newSquareId = newSquareId.replace("piece", "")
    newSquareId = newSquareId.replace("div", "")

    var selectedPieceId = selValueElem.dataset.value;

    if (selectedPieceId != newSquareId) {
        // the old square
        var oldSquare = document.getElementById("div" + selectedPieceId);
        // the old piece
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        // the color of the old piece identified
        var pieceClass = oldPiece.classList[1]


        // remove the old piece from the old square
        oldSquare.removeChild(oldPiece);
        //destination of the selected piece
        var newSquare = document.getElementById("div" + newSquareId);

        createpiece("piece" + newSquareId, pieceClass, newSquare);
    }
}
function getPlayerPiece(event) {
    console.log("square selected=" + event.target.id);

    var selectedPieceId = event.target.id;
    selectedPieceId = selectedPieceId.replace("piece", "")
    selectedPieceId = selectedPieceId.replace("div", "")

    selValueElem.dataset.value = selectedPieceId;
}