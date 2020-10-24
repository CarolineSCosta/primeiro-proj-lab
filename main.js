const name = prompt('Seja bem vindx! Qual é o seu primeiro nome?');
const welcome = window.document.getElementById('name');
welcome.innerText = `Olá, ${name}!`;
const startTest = prompt('Você quer iniciar o teste? \nDigite apenas o número da sua resposta abaixo:\n1- Sim \n2- Não');
if (startTest == 1) {
    const chooseTestType = prompt('Digite o número do teste que deseja iniciar:\n\n1- Conhecimentos gerais\n2- HTML e JS');
    switch (chooseTestType) {
        case '1':
            alert('Boa sorte!')
            const instructions = confirm('Digite apenas o número da alternativa correta para as proximas perguntas.');
            getAnswer(
                '1. Quem foi Ada Lovelace? \n\n1- Atual diretora do YouTube \n2- Ela foi a primeira mulher a programar na história \n3- Co-fundadora e presidente da HTC\n',
                1,
                2
            )

            getAnswer(
                '2. Quem foi a diretora responsável pela programação de software para o projeto Apollo e Skyline da NASA? \n\n1- Margaret Hamilton \n2- Radia Perlman \n3- Katherine Johnson\n',
                2,
                1
            )

            getAnswer(
                '3. Quem é conhecida como “A Rainha da Computação”? \n\n1- Grace Murray Hoppe\n2- Grace Muray Hopp \n3- Grace Murray Hopp\n',
                3,
                1
            )
            alert('Parabéns, você finalizou o teste!')
            break;
        case '2':
            getAnswer(
                '1. Para incluir JavaScript em uma página HTML o elemento usado é ? \n\n1- head\n2- body\n3- script',
                1,
                3
            )

            getAnswer(
                '2. O elemento "title" deve estar dentro do elemento? \n\n1- h1 \n2- head\n3- body',
                2,
                2
            )

            getAnswer(
                '3. Que tipo de dados é Infinity? \n\n1- number\n2- boolean\n3- undefined',
                3,
                1
            )
            alert('Parabéns, você finalizou o teste!')
            break;
        default:
            alert('Você não selecionou uma opção, atualize a página e volte novamente!');
    }
} else {
    alert('Volte novamente quando estiver preparado para começar! :)');
}

//Parametro para exibir as perguntas na tela
function getAnswer(question, questionNumber, correctAnswer) {
    const startQuiz = prompt(question);
    if (validAnswer(correctAnswer, startQuiz)) {
        window.document.getElementById('right' + questionNumber).innerText = `Pergunta ${questionNumber}`;
    } else {
        window.document.getElementById('wrong' + questionNumber).innerText = `Pergunta ${questionNumber}`;
    }
}
//validar as respostas de acordo com o que o usuario respondeu
function validAnswer(correctAnswer, userAnswer) {
    return correctAnswer == userAnswer
}