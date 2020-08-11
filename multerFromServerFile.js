const fastify = require("fastify");
const multer = require("fastify-multer");
const upload = multer({ storage: multer.memoryStorage() });

const server = fastify({
  logger: true,
});

server.register(multer.contentParser);

server.decorate("upload", upload);

server.post(
  "/uploadFromServerFile",
  { prehandler: upload.single("sample") },
  async (request, reply) => {
    console.log(request.file);

    reply.status(200).send("File Uploaded");
  }
);

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
