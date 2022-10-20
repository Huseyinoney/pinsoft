
function Minesweeper(square) {
 
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
let square = [["*","0","0","0"],["0","0","0","0"],["0","*","0","0"],["0","0","0","0"]]
 let a = Minesweeper(square)

 function show() {
 for(let i =0; i<square.length;i++){
    console.log(a[i])
}}
show()
