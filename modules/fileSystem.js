const fs = require('fs');

// fs.readFile('./test.txt', 'utf8', (error, data) => {
//   console.log('data :>> ', error, data);

//   fs.mkdir('./files', (error) => {
//     error && console.log('mkdir :>> ', error);

//     fs.writeFile('./files/test2.txt', data, (error) => {
//       error && console.log('data2 :>> ', error)
//     })
//   })
// })

const test = () => {
  fs.readFile('./test.txt', 'utf8', async (error, data) => {
    await console.log('data :>> ', error, data);

    await fs.mkdir('./files', (error) => {
      console.log('log 1');
      error && console.log('mkdir :>> ', error);
    });

    await fs.writeFile('./files/test2.txt', data, (error) => {
      console.log('log 2');
      error && console.log('data2 :>> ', error)
    });

    await setTimeout(() => {

      if (fs.existsSync('./files/test2.txt')) {        
        fs.unlink('./files/test2.txt', (error) => {
          error && console.log('unlink /files/test2.txt :>> ', error)
        })
      }
    }, 4000)

    await setTimeout(() => {
      if (fs.existsSync('./files')) {        
        fs.rmdir('./files', (error) => {
          error && console.log('unlink /files :>> ', error)
        })
      } 
    }, 6000)
  })
}

test();

