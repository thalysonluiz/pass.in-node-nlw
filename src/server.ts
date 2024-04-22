import fastify from "fastify";
import z from "zod";

const app = fastify();

app.post('/events', (request, reply) => {
  const createEventSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  })

  const data = createEventSchema.parse(request.body)

  return data
})

app.listen({
  port: 3333
}).then(() => {
  console.log("Server is listening on port 3333");
});