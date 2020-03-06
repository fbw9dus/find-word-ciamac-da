const fs = require('fs')

const searchTerm = 'localhost'
const reader = fs.createReadStream('data.txt', 'utf-8')

let chunkNum = 0
let wordCount = 0


/** 
reader.on('data', chunk =>{

    const result =  chunk.match(/searchTerm/g)
    wordCount + result.length
})
*/
const wordCounter = () =>{
let count = 0

}
reader.on('end', ()=>{
console.log('loading compeleted')
console.log('')
})