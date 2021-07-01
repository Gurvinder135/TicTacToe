let gameboard = (function () {
    let a = Array(9).fill(undefined);
    function emptyDom() {
        for (i = 1; i <= 9; i++) {
            document.getElementById(`${i}`).textContent = "";
        }
    }
    return {
        set: function (i, b) {
            a[i - 1] = b;
        },
        get: function () {
            return a;
        },
        getValue: function (i) {
            return a[i - 1];
        },
        gameCheck: function () {
            if ((a[0] === a[1] && a[1] === a[2] && a[2] !== undefined)
                || (a[3] === a[4] && a[4] === a[5] && a[5] !== undefined)
                || (a[6] === a[7] && a[7] === a[8] && a[8] !== undefined)
                || (a[0] === a[2] && a[3] === a[6] && a[6] !== undefined)
                || (a[1] === a[4] && a[4] === a[7] && a[7] !== undefined)
                || (a[2] === a[5] && a[5] === a[8] && a[8] !== undefined)
                || (a[0] === a[4] && a[4] === a[8] && a[8] !== undefined)
                || (a[2] === a[4] && a[4] === a[6] && a[6] !== undefined)) {
                a = [];
                emptyDom();
                result.result("win");
                return "win";
            } else if (a.length === 9 && a[0] !== undefined && a[1] !== undefined && a[2] !== undefined && a[3] !== undefined && a[4] !== undefined && a[5] !== undefined && a[6] !== undefined && a[7] !== undefined && a[8] !== undefined) {
                a = [];
                emptyDom();
                result.result("tie");
               return "tie";
            }
        }
    }
})();

function player() {
    let b = "";
    return {
        mark: function (a) {
            b = a;
        },

        getmark: function () {
            return b;
        },
    }
}

let result=(function () {
    let turn = 0;
    let units = document.querySelectorAll(".units");
    units.forEach(element => {
        element.addEventListener("click", function () {
            let id = element.id;
            if (document.getElementById(`${id}`).textContent) {
                alert("try again")
            } else {
                if (turn === 0) {
                    turn = 1;
                    a(id, player1.getmark());
                }
                else {
                    turn = 0;
                    a(id, player2.getmark());
                }
            }
        });
    })

    function turnFunc(){
        if(turn===0){
            document.getElementById("turn").textContent="Player 1 Turn"
        } else{
            document.getElementById("turn").textContent="Player 2 Turn"
        }
    }
    function a(id, b) {
        document.getElementById(`${id}`).textContent = b;
        gameboard.set(id, b);
        gameboard.gameCheck();
        turnFunc();
    }
    return {result:function (a){
        if (a==="tie"){
            document.getElementById("win").classList.remove("hide");
            document.getElementById("win").textContent="Game Tie"
            document.getElementById("turn").classList.add("hide");
            turn=0;
        } else if(turn===1){
            document.getElementById("win").classList.remove("hide");
            document.getElementById("win").textContent="Player 1 wins"
            document.getElementById("turn").classList.add("hide");
            turn=0;
        } else{
            document.getElementById("win").classList.remove("hide");
            document.getElementById("win").textContent="Player 2 wins"
            document.getElementById("turn").classList.add("hide");
            turn=0;
        }
    }
    }

})()
let player1 = player();
player1.mark("X");
let player2 = player();
player2.mark("O");





