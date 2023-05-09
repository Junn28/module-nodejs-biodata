let http = require('http');
let biodata = require('./modules/biodata');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!!!');
    res.end();
  })
  .listen(3300);

console.log(`Nama: ${biodata.myName('Acheng Wae')}`);
console.log(`Tempat Lahir: ${biodata.myPlaceOfBirth('Bogor')}`);
console.log(`Tanggal Lahir: ${biodata.myDateOfBirth('11 April 2000')}`);
console.log(`Alamat: ${biodata.myAddress('JL. Menuju Kedamaian No.69')}`);
