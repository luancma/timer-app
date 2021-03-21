import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    user: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/users", (schema, request) => {
      return schema.users.all();
    });

    this.post("/users", (schema, request) => {
      console.log("CAI NO POST");
      const { email, password } = JSON.parse(request.requestBody);
      const foundUser = schema.users.findBy({ email });

      if (!foundUser) {
        return new Response(
          422,
          { some: "header" },
          { errors: "Suas credenciais não são válidas" }
        );
      }

      if (foundUser.attrs.password !== password) {
        return new Response(
          422,
          { some: "header" },
          { errors: "Suas credenciais não são válidas" }
        );
      }

      return foundUser.attrs;
    });
  },

  seeds(server) {
    server.create("user", {
      name: "Katy Silva",
      email: "katy@email.com",
      password: "123123",
    });
    server.create("user", {
      name: "Roberto Carlos",
      email: "rc@email.com",
      password: "123123",
    });
    server.create("user", {
      name: "Jose Barreto",
      email: "jbarreto@email.com",
      password: "123123",
    });
  },
});
