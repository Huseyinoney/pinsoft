
function Minesweeper(square) {
    update(square)
 
    for (let i=0 ; i<square.length; i++) {
        for(let j =0; j<square[0].length; j++) {
            
            if(square[i][j]==="*") {

                for(let a = i - 1 ; a<=i+1 ; a++){

                    if(a<0 || a>=square.length) continue

                    for(let b = j - 1 ; b<=j+1 ; b++){

                        if(b<0 || b>=square[0].length) continue

                        else if (square[a][b]==="*") continue

                        else 
                        {
                            let variable =   Number(square[a][b]) + 1
                            square[a][b] =  String(variable)  
                            //ipucu sayılarını yeniden düzenleme kısmı

                        }
                        
                    }
                }

            }

        }
        
    }
    return square
}
let square = [["*",".",".","."],[".",".",".","."],[".","*",".","."],[".",".",".","."]]

let square1 = [["*","*","0","0","0"],["0","0","0","0","0"],["0","*","0","0","0"]]

let square3 = [["*","0","*","0","0"],["*","*","0","0","0"],["0","0","0","0","0"],["0","*","0","0","0"],["0","*","0","0","0"]]
 //let a = Minesweeper(square)

 function show(square) {
    let a = Minesweeper(square)
 for(let i =0; i<square.length;i++){
    console.log(a[i])
}}
show(square)//test 1

console.log("")

show(square1)// test 2
console.log("")

show(square3) //test 3*/

//"." ile verilen boş alanları işlem kolaylığı için sıfıra çevirir.
function update(square) {
    for(let a=0; a<square.length;a++){
        for(let b =0; b<square[0].length; b++) {
            if(square[a][b]==="."){
                square[a][b]="0"
            }
            else {
                continue
            }
        }
    }
    return square
}


module.exports = {
    Minesweeper,
   update
}