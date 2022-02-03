import url from 'url'

let adr = 'https://www.langsari.com/search.php?sayur=wortel&daging=sapi'
const q = url.parse(adr, true);
console.log(`protocol: ${q.protocol}`)
console.log(`protocol: ${q.host}`)
console.log(`protocol: ${q.pathname}`)
console.log(`protocol: ${q.search}`)
console.log(q.query)