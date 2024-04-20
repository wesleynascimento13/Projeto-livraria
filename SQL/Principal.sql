create database CMO;

USE CMO;

CREATE TABLE Cliente (
    id_cliente INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome VARCHAR(200) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE Livro(
    id_livro INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_livro_categoria INTEGER,
    id_livro_autor INTEGER,
    id_emprestimo INTEGER,
    id_editora INTEGER,
    titulo_livro VARCHAR(100) NOT NULL,
    isbn VARCHAR(20) NOT NULL,
    numero_paginas INT NOT NULL,
    ano_publicacao INT NOT NULL,
    resumo_livro VARCHAR(250) NOT NULL
);


CREATE TABLE LivroPorCategoria(
    id_livro_por_categoria INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_livro INTEGER,
    id_categoria INTEGER
);

CREATE TABLE Categoria(
    id_categoria INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome_categoria CHAR(50) NOT NULL,
    descricao_categoria CHAR(100) NOT NULL
);

CREATE TABLE LivroAutor(
    id_livro_autor INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_livro INTEGER,
    id_autor INTEGER
);

CREATE TABLE Editora(
    id_editora INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome_editora CHAR(100) NOT NULL,
    endereco_editora CHAR(200) NOT NULL,
    informacoes_contato_editora CHAR(200) NOT NULL
);

CREATE TABLE Autor(
    id_autor INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome_autor CHAR(100) NOT NULL,
    endereco_autor CHAR(200) NOT NULL,
    informacoes_contato_autor CHAR(200) NOT NULL
);

CREATE TABLE ItensEmprestimo(
    id_itens_emprestimo INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_emprestimo INTEGER,
    id_livro_emprestado INTEGER,
    data_emprestimo DATE,
    data_devolucao_esperada DATE
);

CREATE TABLE Multa(
    id_multa INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_leitor INTEGER,
    id_emprestimo_associado INTEGER,
    valor_multa INTEGER,
    data_vencimento_multa DATE,
    status_multa INTEGER
);

CREATE TABLE Emprestimo(
    id_emprestimo INTEGER AUTO_INCREMENT PRIMARY KEY ,
    id_leitor INTEGER,
    status_emprestimo CHAR(20)
);

CREATE TABLE Leitor(
    id_leitor INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome_leitor CHAR(100) NOT NULL,
    informacoes_contato_leitor CHAR(200) NOT NULL
);

ALTER TABLE LivroPorCategoria ADD CONSTRAINT fk_livro_por_categoria_livro FOREIGN KEY (id_livro) REFERENCES Livro(id_livro);
ALTER TABLE LivroPorCategoria ADD CONSTRAINT fk_livro_por_categoria_categoria FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria);
ALTER TABLE Livro ADD CONSTRAINT fk_livro_categoria FOREIGN KEY (id_livro_categoria) REFERENCES Categoria(id_categoria);
ALTER TABLE Livro ADD CONSTRAINT fk_livro_autor FOREIGN KEY (id_livro_autor) REFERENCES Autor(id_autor);
ALTER TABLE Livro ADD CONSTRAINT fk_emprestimo FOREIGN KEY (id_emprestimo) REFERENCES Emprestimo(id_emprestimo);
ALTER TABLE Livro ADD CONSTRAINT fk_editora FOREIGN KEY (id_editora) REFERENCES Editora(id_editora);
ALTER TABLE ItensEmprestimo ADD CONSTRAINT fk_itens_emprestimo_emprestimo FOREIGN KEY (id_emprestimo) REFERENCES Emprestimo(id_emprestimo);
ALTER TABLE ItensEmprestimo ADD CONSTRAINT fk_itens_emprestimo_livro_emprestado FOREIGN KEY (id_livro_emprestado) REFERENCES Livro(id_livro);
ALTER TABLE Multa ADD CONSTRAINT fk_multa_leitor FOREIGN KEY (id_leitor) REFERENCES Leitor(id_leitor);
ALTER TABLE Multa ADD CONSTRAINT fk_multa_emprestimo_associado FOREIGN KEY (id_emprestimo_associado) REFERENCES Emprestimo(id_emprestimo);
ALTER TABLE Emprestimo ADD CONSTRAINT fk_emprestimo_leitor FOREIGN KEY (id_leitor) REFERENCES Leitor(id_leitor);
