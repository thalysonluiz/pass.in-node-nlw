import fastify from "fastify";

const app = fastify();

app.post('/events', (request, reply) => {
  const body = request.body

  return body
})

app.listen({
  port: 3333
}).then(() => {
  console.log("Server is listening on port 3333");
});