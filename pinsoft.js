
function Minesweeper(square) {
 let array1 = []
    for (let i=0 ; i<square.length; i++) {
        for(let j =0; j<square[0].length; j++) {
            
            if(square[i][j]==="*") {

                for(let a = i - 1 ; a<=i+1 ; a++){

                    if(a<0 || a>square.length) continue

                    for(let b = j - 1 ; b<=j+1 ; b++){

                        if(b<0 || b>square[0].length) continue

                        else if (square[a][b]==="*") continue

                        else 
                        {
                            
                            //ipucu sayılarını yeniden düzenleme kısmı

                        }
                        
                    }
                }

            }

        }
        
    }
    return array1
}
let square = ["*000","0000","0*00","0000"]
console.log(Minesweeper(square))
