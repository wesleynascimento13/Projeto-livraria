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

// Função para simular o envio do formulário
function sendFormData(name, email, message) {
    // Cria um objeto FormData para armazenar os dados do formulário
    var formData = new FormData();
    formData.append('name', name); // Adiciona o nome ao objeto FormData
    formData.append('email', email); // Adiciona o e-mail ao objeto FormData
    formData.append('message', message); // Adiciona a mensagem ao objeto FormData

    // Simula uma requisição AJAX para enviar os dados do formulário para um servidor
    setTimeout(function() {
        // Exibe uma mensagem de sucesso após um atraso de 1 segundo
        document.getElementById('response-message').innerHTML = 'Obrigado por entrar em contato, ' + name + '! Sua mensagem foi enviada com sucesso.';
        // Limpa o formulário após o envio bem-sucedido
        document.getElementById('contact-form').reset();
    }, 1000); // Atraso de 1 segundo (1000 milissegundos)
}
