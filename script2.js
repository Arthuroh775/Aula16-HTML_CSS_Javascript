// Variáveis
const jogo = 'Quiz Interativo';
let pontuacao = 0;

console.log("Bem-vindo ao " + jogo + "!");
alert("Bem-vindo ao Quiz Interativo!");
let iniciar = confirm("Quer começar o jogo?");
if (!iniciar) {
    console.log("Usuário decidiu não jogar. Até a próxima!");
} else {
    function perguntar(pergunta, respostaCorreta) {
        let resposta = prompt(pergunta);
        if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
            console.log("✅ Acertou!");
            pontuacao++;
        } else {
            console.log("❌ Errou! A resposta correta era: " + respostaCorreta);
        }
    }

    // Perguntas originais
    perguntar("Qual a capital do Brasil?", "Brasília");
    perguntar("Quantos dias tem uma semana?", "7");
    perguntar("Qual a cor do céu em um dia claro?", "Azul");

    // Novas perguntas
    perguntar("Quem escreveu 'Dom Casmurro'?", "Machado de Assis");
    perguntar("Qual é o maior planeta do sistema solar?", "Júpiter");
    perguntar("Em que continente está o Egito?", "África");
    perguntar("Quantos segundos tem um minuto?", "60");
    perguntar("Qual elemento químico tem o símbolo 'O'?", "Oxigênio");

    console.log("Fim do jogo! Sua pontuação: " + pontuacao);

    (function () {
        console.log("Obrigado por jogar! Até a próxima!");
    })();
}
