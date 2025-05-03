const { readFile, writeFile } = require("fs")
const utils = require("util");

const readFilePromise = utils.promisify(readFile)

const getFile = (path) => {
    return new Promise( (resolve, reject) => {
        readFile(path, 'utf-8',(err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
getFile('text.txt').then( (result) => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

// Second example more cleaner using async - await syntax

const getFileAsync1 = async () => {
    const file = await getFile('text.txt')
    console.log(file)
}
getFileAsync1()

// Third example using utils package/module

const getFileAsync2 = async () => {
    const file = await readFilePromise('text.txt','utf-8')
    console.log(file)
}
getFileAsync2()