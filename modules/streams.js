const fs = require('fs');
const { createGzip } = require('zlib');

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./new-text.txt');
const compressStream = createGzip();
// readStream.on('data', (chunk) => {
//   console.log('------------');
//   console.log(chunk.toString());
//    writeStream.write("\n----CHUNK START----\n");
//    writeStream.write(chunk);
//    writeStream.write("\n----CHUNK END----\n");
// })

const handleError = (error) => {
  console.error('Error');

  readStream.destroy();
  writeStream.end('Finished with error')
}

readStream.on('error', handleError).pipe(compressStream).pipe(writeStream).on('error', handleError);