const fp = require('fastify-plugin')

async function registerRoutes(server, _) {
  server.route({
    method: 'POST',
    url: '/uploadFromRoutePlugin',
    preHandler: server.upload.single('sample'),
    handler: function(request, reply) {
      console.log(request.file)

      reply.code(200).send('SUCCESS')
    }
  })
}

module.exports = fp(registerRoutes)