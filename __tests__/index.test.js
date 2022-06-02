const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());
describe("Página Inicial", () => {
  test("Retorno Get /", async () => {
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

    const resp = await request.get("/");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(home);
  });
});
