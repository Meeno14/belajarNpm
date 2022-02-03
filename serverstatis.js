import fs from 'fs'
import http from 'http'

http.createServer((req, res) => {
  function page(halaman) {
    return (
      fs.readFile(halaman, (err, data) => {
        res.end(data)
      })
    )
  }

  switch (req.url) {
    case "/home":
      page('home.html')
      break;
    case "/about":
      page('about.html')
      break;
    case "/profile":
      page('profile.html')
      break;
    default:
       res.end('404 Not Found')
      break;
  }
}).listen(8000);
