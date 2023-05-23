const { Writable,Readable,Transform } = require('stream');

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});


//stdin is a readable stream
// process.stdin.pipe(outStream);// type in the console and press enter

function clock () {
  const stream = new Readable({
    objectMode: true,
    read() {}
  })

  setInterval(() => {
    stream.push({ time: new Date() })
  }, 1000)

  return stream
}

function xformer () {
  let count = 0

  return new Transform({
    objectMode: true,
    transform: (data, _, done) => {
      done(null, { ...data, index: count++ })
    }
  })
}
function renderer () {
  return new Writable({
    objectMode: true,
    write: (data, _, done) => {
      console.log('<-', data)
      done()
    }
  })
}

clock()              // Readable stream
  .pipe(xformer())   // Transform stream
  .pipe(renderer())