// Função para criptografar o texto
function criptografarTexto() {
    // Pega o valor digitado na caixa de texto de entrada
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    // Substitui as letras pelas "chaves" de criptografia
    let textoCriptografado = textoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Exibe o texto criptografado na caixa de mensagem
    const mensagemSaida = document.getElementById('mensagemSaida');
    mensagemSaida.value = textoCriptografado;

    // Verifica se há texto e esconde a imagem de fundo se necessário
    if (mensagemSaida.value.length > 0) {
        mensagemSaida.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    }
}

// Função para descriptografar o texto
function descriptografarTexto() {
    // Pega o valor criptografado na caixa de mensagem
    const textoEntrada = document.getElementById('mensagemSaida').value;
    
    // Substitui as "chaves" de criptografia pelas letras originais
    let textoDescriptografado = textoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Exibe o texto descriptografado na caixa de mensagem
    const mensagemSaida = document.getElementById('mensagemSaida');
    mensagemSaida.value = textoDescriptografado;

    // Verifica se há texto e esconde a imagem de fundo se necessário
    if (mensagemSaida.value.length > 0) {
        mensagemSaida.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    }
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    // Seleciona o texto da caixa de mensagem
    const textoCopiado = document.getElementById('mensagemSaida');
    textoCopiado.select();
    document.execCommand('copy'); // Copia o texto selecionado para a área de transferência

}

// Evento para monitorar o input na caixa de mensagem e esconder a imagem de fundo
document.getElementById('mensagemSaida').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('encriptador__conteudo__mensagem--sem-imagem');
    } else {
        this.classList.remove('encriptador__conteudo__mensagem--sem-imagem');
    }
});