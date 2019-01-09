
const fs = require('fs')
const os = require('os')


console.log(fs)

console.log(os.userInfo())

fs.appendFile('some.file', `user info: ${os.userInfo().username}`, (err) => {
  if(err) {
      console.log('append file: error occured')
  }

})
