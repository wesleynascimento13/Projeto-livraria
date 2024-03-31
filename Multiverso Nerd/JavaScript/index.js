// Adiciona um ouvinte de evento para o evento 'submit' do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (envio) para que possamos processá-lo com JavaScript
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Verifica se os campos obrigatórios não estão vazios
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        // Se algum campo estiver vazio, exibe uma mensagem de erro e encerra a execução da função
        document.getElementById('response-message').innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    // Verifica se o e-mail está no formato correto
    if (!validateEmail(email)) {
        // Se o e-mail não estiver em um formato válido, exibe uma mensagem de erro e encerra a execução da função
        document.getElementById('response-message').innerHTML = 'Por favor, insira um endereço de e-mail válido.';
        return;
    }

    // Verifica se a mensagem tem pelo menos 10 caracteres
    if (message.length < 10) {
        // Se a mensagem for muito curta, exibe uma mensagem de erro e encerra a execução da função
        document.getElementById('response-message').innerHTML = 'A mensagem deve ter pelo menos 10 caracteres.';
        return;
    }

    // Se todas as validações passarem, chama a função para simular o envio do formulário
    sendFormData(name, email, message);
});

// Função para validar o formato do endereço de e-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/; // Expressão regular para verificar o formato do e-mail
    return re.test(email); // Retorna verdadeiro se o e-mail estiver no formato válido, falso caso contrário
}

// Função de pesquisa
function search() {
    // Obtenha o valor de pesquisa do input e converta para maiúsculas
    var input = document.getElementById('searchInput').value.trim().toUpperCase();

    // Obtenha todos os produtos
    var products = document.querySelectorAll('.product');

    // Itere sobre cada produto e verifique se parte do ID corresponde ao texto de pesquisa
    products.forEach(function(product) {
        var productId = product.id.toUpperCase();
        // Verifique se o texto de pesquisa está vazio ou se parte do ID do produto corresponde ao texto de pesquisa
        if (input === '' || productId.includes(input)) {
            product.style.display = ''; // Exiba o produto
        } else {
            product.style.display = 'none'; // Oculte o produto
        }
    });
}
// Adicionando IDs de produtos
document.getElementById('harry_potter_relíquias_morte').id = 'harry_potter_relíquias_morte';
document.getElementById('superman_foice_martelo').id = 'superman_foice_martelo';
document.getElementById('star_wars_c3po').id = 'star_wars_c3po';
document.getElementById('o_hobbit').id = 'o_hobbit';
document.getElementById('aventuras_sherlock_holmes').id = 'aventuras_sherlock_holmes';
document.getElementById('Senhor_dos_aneis_A_Sociedade_do_Anel').id = 'Senhor_dos_aneis_A_Sociedade_do_Anel';
document.getElementById('Senhor_dos_aneis_As_Duas_Torres').id = 'Senhor_dos_aneis_As_Duas_Torres';
document.getElementById('Senhor_dos_Aneis_O_Retorno_do_Rei').id = 'Senhor_dos_Aneis_O_Retorno_do_Rei';
document.getElementById('O_Hobbit').id = 'O_Hobbit';
document.getElementById('A_Queda_de_Numenor').id = 'A_Queda_de_Numenor';
document.getElementById('sherlock_holmes_section').id = 'sherlock_holmes_section';
document.getElementById('Sherlock_Holmes_Um_estudo_em_vermelho').id = 'Sherlock_Holmes_Um_estudo_em_vermelho';
document.getElementById('Sherlock_Holmes_O_signo_dos_quatro').id = 'Sherlock_Holmes_O_signo_dos_quatro';
document.getElementById('Sherlock_Holmes_O_Vale_do_Medo').id = 'Sherlock_Holmes_O_Vale_do_Medo';
document.getElementById('Sherlock_Holmes_O_cao_dos_Baskerville').id = 'Sherlock_Holmes_O_cao_dos_Baskerville';
document.getElementById('As_aventuras_de_Sherlock_Holmes').id = 'As_aventuras_de_Sherlock_Holmes';
document.getElementById('harry_potter_section').id = 'harry_potter_section';
document.getElementById('Harry_Potter_e_a_Pedra_Filosofal').id = 'Harry_Potter_e_a_Pedra_Filosofal';
document.getElementById('Harry_Potter_e_a_Câmara_Secreta').id = 'Harry_Potter_e_a_Câmara_Secreta';
document.getElementById('Harry_Potter_e_o_Prisioneiro_de_Azkaban').id = 'Harry_Potter_e_o_Prisioneiro_de_Azkaban';
document.getElementById('Harry_Potter_e_a_Ordem_da_Fênix').id = 'Harry_Potter_e_a_Ordem_da_Fênix';
document.getElementById('Harry_Potter_e_as_Relíquias_da_Morte').id = 'Harry_Potter_e_as_Relíquias_da_Morte';
document.getElementById('Marvel_section').id = 'Marvel_section';
document.getElementById('DC_section').id = 'DC_section';
document.getElementById('Star_Wars_section').id = 'Star_Wars_section';
document.getElementById('Vingadores_2ª_Série_n°_1').id = 'Vingadores_2ª_Série_n°_1';
document.getElementById('Vingadores_Assuntos_de_Família').id = 'Vingadores_Assuntos_de_Família';
document.getElementById('Vingadores_3_A_Origem_Secreta_do_Universo').id = 'Vingadores_3_A_Origem_Secreta_do_Universo';
document.getElementById('Viuva_Negra_Laços_Que_Unem').id = 'Viuva_Negra_Laços_Que_Unem';
document.getElementById('Feiticeira_Escarlate_(2023)_n°1').id = 'Feiticeira_Escarlate_(2023)_n°1';
document.getElementById('Superman_Entre_a_Foice_e_o_Martelo').id = 'Superman_Entre_a_Foice_e_o_Martelo';
document.getElementById('Batman_à_Caça_da_Besta').id = 'Batman_à_Caça_da_Besta';
document.getElementById('Besouro_Azul_Confronto_Final').id = 'Besouro_Azul_Confronto_Final';
document.getElementById('Mulher_Maravilha').id = 'Mulher_Maravilha';
document.getElementById('Lanterna_Verde_Ofensiva_Esmeralda').id = 'Lanterna_Verde_Ofensiva_Esmeralda';
document.getElementById('Star_Wars_C-3PO').id = 'Star_Wars_C-3PO';
document.getElementById('Star_Wars_Yoda\'s_Secret_War').id = 'Star_Wars_Yoda\'s_Secret_War';
document.getElementById('Star_Wars_Chewbacca').id = 'Star_Wars_Chewbacca';
document.getElementById('Star_Wars_Darth_Vader').id = 'Star_Wars_Darth_Vader';
document.getElementById('Star_Wars_Kanan_the_Last_Padawan').id = 'Star_Wars_Kanan_the_Last_Padawan';





