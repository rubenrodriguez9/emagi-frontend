const emagify = require('./emagify.js')
const emagiSearch = require('./emagi-search.js') 
const randomElement = require('./emagi-random.js')
const symbols = require('./emagi-symbols');
const words = require('./emagi-words')


let command = process.argv[2];
let command2 = process.argv[3]

let argSlice = process.argv.slice(3);

if(command === undefined){
    console.log(`Please specify your command: \n Type "random" to receive a random emoji. \n Type an emoji's word to get the emoji. \n Type "search" then your word to get all possible emoji's that match.`)
}else if(command === 'random'){
    console.log(randomElement(symbols))
}else if(command === 'search'){
    console.log(emagiSearch(command2).toString())
}else if(command === 'convert'){
    console.log(emagify(argSlice).join(' '))
}






