import http from 'http'

let navbar = `Ini navbar&nbsp;&nbsp;&nbsp;
<a href="/home">home</a>&nbsp;&nbsp;
<a href="/profile">profile</a>&nbsp;&nbsp;
<a href="/about">about</a><br>`
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`${navbar}`);
  switch (req.url) {
    case "/":
      res.write(`
      <h1>Halaman Awal</h1>
      `);
      break;
    case "/home":
      res.write(`<h1>Home</h1>`);
      break;
    case "/profile":
      res.write(`<h1>Profile</h1>`);
      break;
    case "/about":
      res.write(`<h1>About</h1>`);
      break;
    default:
      res.write(`<h1>Error 404</h1>`);
      break;
  }
  res.end()
}).listen(8000);

const url = new URL('http://example.com/path/index.html?message=hello&who=world');
console.log(url.search)
console.log(url.searchParams.get('message'))
console.log(url.hostname)
console.log(url.pathname)
console.log(url.hash);
url.hostname = 'cornhub.com'
console.log(url.href)