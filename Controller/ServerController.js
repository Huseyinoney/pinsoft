const pinSoft = require('../../pinsoft')

exports.getMineSwepper = async(req,res) => {
    try {
        const data = req.body.input
        const result = await pinSoft.Minesweeper(data)
        res.send(result)
    } catch (error) {
            res.status(400)
            res.end()
            console.log(error)
    }
    

     
    

}
