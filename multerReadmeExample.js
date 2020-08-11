const fastify = require('fastify') // or import fastify from 'fastify'
const multer = require('fastify-multer') // or import multer from 'fastify-multer'
const upload = multer({ dest: 'uploads/' })

const server = fastify()
// register fastify content parser
server.register(multer.contentParser)

// or using the short hand declaration
server.post(
  '/uploadFromMulterExample',
  { preHandler: upload.single('sample') },
  function(request, reply) {
    console.log(request.file)
   
    reply.code(200).send('SUCCESS')
  }
)

server.listen(3000, function (err, address) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`server listening on ${address}`)
})