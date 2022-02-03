import fs from 'fs'

fs.open("test.txt", 'w', (err, file) => {
  if (err) throw err;
  console.log("yea")

  // fs.writeFile(file, "Hello World!", (err) => {
  //   if (err) throw err
  //   console.log("ok")
  // })

  // fs.readFile(file, (err, data) => {
  //   console.log(data.toString('utf-8'))
  // })

  // fs.rename("test.txt", "yeep.txt", (err) => {
  //   if (err) throw err;
  //   console.log("oh")
  // })

  fs.unlink("test.txt", () => {
    console.log('done')
  })
})