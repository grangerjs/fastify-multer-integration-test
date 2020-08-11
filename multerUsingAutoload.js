const path = require("path")
const fastify = require("fastify")
const autoload = require("fastify-autoload")
const multer = require("fastify-multer")
const upload = multer({ storage: multer.memoryStorage() })

const server = fastify({
  logger: true,
});

server.register(multer.contentParser)
server.register(autoload, {
  dir: path.join(__dirname, 'routes')
})

// decorate 'upload' with instance of multer for use with routes in routes/ directory
server.decorate("upload", upload);

const start = async () => {
  try {
    await server.listen(3002);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();