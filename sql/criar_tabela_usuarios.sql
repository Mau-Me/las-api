USE las;

CREATE TABLE IF NOT EXISTS usuarios(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  urlFotoPerfil VARCHAR(200) NOT NULL
);