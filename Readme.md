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

#### Some popular global object properties in **_Nodejs_**

- require
- module
- \_\_dirname
- \_\_filename
- process

#### Some usefull Modules in Nodejs

##### OS -- operating System

```javascript
const os = require("os");

os.type(); // which os like windows
os.userInfo(); // os user info
os.uptime(); // system time
os.release(); // system release version
os.totalmem(); // system total memory
os.freemem(); // system free memeory
```

##### Path -- directoy path

```javascript
const path = require("path");

path.join(); // join path you current dir
path.basename(); // gives you the file name
path.resolve(); // resolve all the path from where you are to user
path.extname(); // gives the extension of file like: .txt .html
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

### Event Loop in Node.js 💀

- Non blocking arhictecture
- wait for other sync code to complete then non block code give result
- you can do heavy load data or some functionality that takes time and its does not stop next line code to run it will run in last or check whether their code to run then it will execute
- It like when you add async task it just off loaded from code execution its loaded when its time

`Example`

```javascript
const { readFile, writeFile } = require("fs");

// can also use promise like this without -util-
const {readFile, writeFile } = require("fs").promises
//

console.log("Running first task");
setTimeout(() => console.log("Running Second task"), 0);
console.log("Running first 3rd task");

// ----- example 2

console.log("Running first task");
readFile("text.txt", "utf-8", (err, result) => {
  if (err) return;
  console.log("file result ", result);
});
console.log("Running first 3rd task");

writeFile(
  "text.txt",
  " Hello this is my new content for that file",

  () => {
    console.log("Data Saved");
  }
);
```

#### **_Utils_** module in node

- utils module its to set function as promise

`Example`

```javascript
// examople 1
const { readFile, writeFile, read } = require("fs");
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

const getFileAsync = async () => {
    const file = await getFile('text.txt')
    console.log(file)
}
getFileAsync()

// Third example using utils package/module

const getFileAsync = async () => {
    const file = await readFilePromise('text.txt','utf-8')
    console.log(file)
}
getFileAsync()

```
