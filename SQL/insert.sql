INSERT INTO Categoria (nome_categoria, descricao_categoria) 
VALUES
    ('Ficção Científica', 'Livros que exploram temas de ficção científica e futurismo.'),
    ('Romance', 'Livros que narram histórias de amor e relacionamentos.'),
    ('Fantasia', 'Livros que apresentam elementos de fantasia e magia.'),
    ('Suspense', 'Livros que mantêm os leitores ansiosos para descobrir o que acontecerá em seguida.'),
    ('Aventura', 'Livros que envolvem viagens emocionantes, descobertas e desafios.');

    INSERT INTO Cliente (nome, data_nascimento) 
VALUES
    ('João Silva', '1990-05-15'),
    ('Maria Oliveira', '1985-10-20'),
    ('Pedro Santos', '1995-03-08');
    
INSERT INTO Autor (nome_autor, endereco_autor, informacoes_contato_autor) 
VALUES
    ('Machado de Assis', 'Rio de Janeiro, Brasil', 'machado@email.com'),
    ('George Orwell', 'Londres, Inglaterra', 'george@email.com'),
    ('J.R.R. Tolkien', 'Oxford, Inglaterra', 'tolkien@email.com'),
    ('J.K. Rowling', 'Edimburgo, Escócia', 'jkrowling@email.com'),
    ('Gabriel García Márquez', 'Aracataca, Colômbia', 'gabriel@email.com');

    INSERT INTO Editora (nome_editora, endereco_editora, informacoes_contato_editora) 
VALUES
    ('Companhia das Letras', 'São Paulo, Brasil', 'contato@companhiadasletras.com.br'),
    ('Penguin Random House', 'Nova York, EUA', 'info@penguinrandomhouse.com'),
    ('HarperCollins', 'Londres, Inglaterra', 'contact@harpercollins.com');
    
 INSERT INTO Leitor (nome_leitor, informacoes_contato_leitor)
VALUES
    ('Ana Souza', 'ana@email.com'),
    ('Carlos Santos', 'carlos@email.com'),
    ('Juliana Oliveira', 'juliana@email.com');


INSERT INTO Emprestimo (id_leitor, status_emprestimo)
VALUES
    (1, 'Ativo'),
    (2, 'Ativo'),
    (3, 'Ativo');
   
 INSERT INTO Multa (id_leitor, id_emprestimo_associado, valor_multa, data_vencimento_multa, status_multa)
VALUES
    (1, 1, 10, '2024-05-15', 1),
    (2, 2, 15, '2024-05-20', 1),
    (3, 3, 20, '2024-05-25', 1);
 
INSERT INTO Livro (id_livro_categoria, id_livro_autor, id_editora, titulo_livro, isbn, numero_paginas, ano_publicacao, resumo_livro) 
VALUES
    (1, 1, 1, 'Dom Casmurro', '9788589390120', 256, 1899, 'Dom Casmurro é um dos grandes clássicos da literatura brasileira, escrito por Machado de Assis.'),
    (2, 2, 1, '1984', '9780451524935', 328, 1949, '1984 é uma distopia escrita por George Orwell, que retrata um governo totalitário e vigilante.'),
    (3, 3, 2, 'O Senhor dos Anéis: A Sociedade do Anel', '9788578270690', 576, 1954, 'A Sociedade do Anel é o primeiro volume da trilogia O Senhor dos Anéis, escrita por J.R.R. Tolkien.'),
    (1, 4, 3, 'Harry Potter e a Pedra Filosofal', '9788532530846', 288, 1997, 'Harry Potter e a Pedra Filosofal é o primeiro livro da série de fantasia escrita por J.K. Rowling.'),
    (2, 5, 3, 'Cem Anos de Solidão', '9788535908338', 448, 1967, 'Cem Anos de Solidão é um romance do escritor colombiano Gabriel García Márquez, que narra a história da família Buendía em Macondo.');

INSERT INTO ItensEmprestimo (id_emprestimo, id_livro_emprestado, data_emprestimo, data_devolucao_esperada)
VALUES
    (1, 1, '2024-04-13', '2024-04-27'),
    (2, 2, '2024-04-13', '2024-04-27'),
    (3, 3, '2024-04-13', '2024-04-27');
    
INSERT INTO LivroPorCategoria (id_livro, id_categoria)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);













