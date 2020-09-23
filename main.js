//Mostrar uma tela de boas-vindas na qual se peça, através de prompt, o nome do usuário antes de começar a prova.
let name = prompt('Seja bem vindx! Qual é o seu nome?');
let name1 = window.document.getElementById('c').innerText = `Olá, ${name}!`;
//Mostrar uma tela na qual o usuário pode escolher se quer mesmo dar início a prova ou não. Caso ele não deseje iniciar, o fluxo deve ser encerrado. Caso ele queira, seguirá para a próxima etapa, descrita no item 3
let startTest = prompt('Você quer iniciar o teste? Digite o número da sua resposta abaixo:\n 1.Sim \n 2.Não');
if (startTest == 1) {
    let firstAnswer = prompt('Coloque o número correspondente a sua resposta. \n 1-Quem foi Ada Lovelace? \n 1. Atual diretora do YouTube \n 2. Ela foi a primeira mulher a programar na história \n 3. Co-fundadora e presidente da HTC');
    if (firstAnswer == 2) {
        window.document.getElementById('certa1').innerText = 'Pergunta 1 - Resposta certa';
    } else {
        window.document.getElementById('errada1').innerText = 'Pergunta 1 - Resposta errada';
    }
    let secondAnswer = prompt('Coloque o número correspondente a sua resposta. \n 2-Quem foi a diretora responsável pela programação de software para o projeto Apollo e Skyline da NASA? \n 1. Margaret Hamilton \n 2. Radia Perlman \n 3. Katherine Johnson');
    if (secondAnswer == 1) {
        window.document.getElementById('certa2').innerText = 'Pergunta 2 - Resposta certa';
    } else {
        window.document.getElementById('errada2').innerText = 'Pergunta 2 - Resposta errada';
    }
    let thirdAnswer = prompt('Coloque o número correspondente a sua resposta. \n 3-Quem é conhecida como “A Rainha da Computação”? \n 1.Grace Murray Hoppe \n 2.Grace Hopp \n 3.Grace Murray Hopp');
    if (thirdAnswer == 1) {
        window.document.getElementById('certa3').innerText = 'Pergunta 3 - Resposta certa';
    } else {
        window.document.getElementById('errada3').innerText = 'Pergunta 3 - Resposta errada';
    }

} else {
    alert('Volte novamente quando estiver mais preparado! :)')
}