# fastify-multer integration

This project is designed to test different ways of using `fastify-multer` to upload files to a server. Unfortunately, I could not get this to work for any variation, which leads me to believe that I'm doing something wrong.

## To try out:

There are 3 different server variations that can be tried:
- `npm run start:multerReadmeExample` runs a server configured exactly how the `fastify-multer` README says to use the plugin
-  `npm run start:multerFromServerFile` runs a server much like the fastify-multer README example, except that it uses async/await
- `npm run start:multerUsingAutoload` runs a server that makes use of `fastify-autoload` and `fastify-plugin` to separate routes from the server

In the root directory of this project, there is a Postman collection that can be used to test a `POST` call to each respective route. `sample.pdf` is provided as a test file to attempt an upload. The three routes are:

- `POST /uploadFromMulterExample`
- `POST /uploadFromServerFile`
- `POST /uploadFromRoutePlugin`

You can run all three servers to at the same time to make it easier to test, although that is not recommended. At this point, I suspect I'm either incorrectly configuring `fastify-multer`, or Postman is not uploading the file properly. 

If you'd like to discuss, feel free to look me up on Twitter (`@jeremySGranger`), or email me at `jeremy.s.granger@gmail.com`. Thank you!!!