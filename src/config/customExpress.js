const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const fetch = require("node-fetch");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();
  acordaHeroku();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  consign().include("src/controllers").into(app);

  app.get("/", (_req, res) => {
    const home = {
      Title: "Bem Vindo ao Las-API",
      Routes: [
        { url: "/usuarios", métodos: ["GET", "POST"] },
        { url: "/usuarios/:usuarioId", métodos: ["GET", "PUT", "DELETE"] },
        { url: "/usuarios/nome/:nomeUsuario", métodos: ["GET"] },
        { url: "/usuarios/:usuarioId/dados-pessoais", métodos: ["GET", "PUT"] },
        { url: "/usuarios/:usuarioId/contatos", métodos: ["GET", "PUT"] },
        { url: "/usuarios/:usuarioId/senha", métodos: ["PUT"] },
        { url: "/usuarios/:usuarioId/endereco", métodos: ["GET", "PUT"] },
        { url: "/eventos", métodos: ["GET", "POST"] },
        { url: "/eventos/:eventoId", métodos: ["GET", "PUT", "DELETE"] },
        { url: "/eventos/status/:status", métodos: ["GET"] },
        { url: "/tipos-vendas", métodos: ["GET", "POST"] },
        { url: "/tipos-vendas", métodos: ["GET", "POST"] },
        { url: "/ufs", métodos: ["GET"] },
        { url: "/ufs/:uf", métodos: ["GET"] },
      ],
      Repo: "https://github.com/mau-me/las-api",
    };

    res.json(home);
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    if (err) {
      if (ENV === "production") {
        res.status(500).send({ error: "Algo deu errado..." });
      } else {
        res.status(500).send({ error: err });
      }
      console.log(err);
    }
  });

  return app;
};

async function acordaHeroku() {
  const url = "http://las-api.herokuapp.com/";

  await fetch(url);
  setTimeout(() => {
    acordaHeroku;
  }, 240000);
}
