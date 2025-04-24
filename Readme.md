## Node.js

### What is Node.js
[Nodejs](https://nodejs.org/en)

Nodejs is Popular JavaScript runtime enviroment. which you can use to run your javascript code in backend or in server-side by leveraging this you have the power to also use javascript on backend.

#### Browser DOM
1. `Dom`
2. `Window`
3. `Interactive Apps`
4. `No fileSystem`
5. `Fragmentations`
6. `ES6 Modules`

#### Node.js (No DOM)
1. `No Dom`,
2. `No Window`,
3. `Serve Side Apps`,
4. `FileSystem`
5. `No access to browser functionlity`
6. `Versions`
7. `CommonJs`

#### Some popular global object properties in ***Nodejs***

- require
- module
- __dirname
- __filename
- process

#### Some usefull Modules in Nodejs

##### OS -- operating System
```javascript
const os = require('os');

os.type() // which os like windows
os.userInfo() // os user info
os.uptime() // system time
os.release() // system release version
os.totalmem() // system total memory
os.freemem() // system free memeory 
```

##### Path -- directoy path
``` javascript
const path = require('path')

path.join() // join path you current dir
path.basename() // gives you the file name 
path.resolve() // resolve all the path from where you are to user
path.extname() // gives the extension of file like: .txt .html
```

FS -- file-system
```javascript
const { readFile, readFileSync, writeFileSync } = require('fs')

readFile() // read file asynchronously
readFileSync() // read file synchronously
writeFileSync() // write file synchronously

const first = readFile(path:'file-path','utf8') // file-path ex: /assets/hello.txt, file-encoding

readFile('/file/text.txt',(err,res) => {
    if(err) return null
    console.log(res)
})

const result = readFileSync('/file/file.txt','utf8') //result file content
console.log(result)

writeFileSync('/file/file.txt','hello, how are you what`s up', {flag, 'a'})  //write file to provided path if not present that it will create the file on that path

 ```


 



