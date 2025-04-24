const os = require('os')

// User Info
// console.log(os.userInfo())

// System Uptime
// console.log(os.uptime())

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
// console.log(currentOs)

const path = require('path')
// console.log(path.sep)

const filePath = path.join("/Learning Node.js","app.js")
// console.log(filePath)

const baseName = path.basename(filePath)
const extName = path.extname(filePath)


console.log()