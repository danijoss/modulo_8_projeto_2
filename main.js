const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado"">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado"">Reprovado</span>`
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))


let linhas = ''; //essa variavel (escopo global) vai acumular as linhas das atividades e notas que vao ser acumuladas na tela, conforme o usuário clica em submit

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    //abaixo o trecho de código que compila cada linha inputada pelo usuário e ainda da com teste ternário o resultado aprovado ou reprovado
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima? spanAprovado : spanReprovado;


}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0;i < notas.length; i++){
        somaDasNotas += notas[i]
    }
    
    return somaDasNotas / notas.length;
}


/* abaixo a função de atualizar a média que fiz antes de ver a solução do professor! O estilo CSS nao ficou como do protótipo apresentado, mas a lógica funciona! 🥳🥳🥳🥳

let somaDasNotas = 0;
let mediaFinal = 0; //essas variaveis precisam estar no escopo global para o codigo funcionar

function atualizaMediaFinal(){
    
    somaDasNotas += notas[notas.length - 1];
    mediaFinal = somaDasNotas / notas.length;
    let linhaMedia = '<tr>'
    linhaMedia += '<td>Média final</td>'
    linhaMedia += `<td>${mediaFinal}</td>`
    linhaMedia += `<td>${mediaFinal >= notaMinima ? 'APROVADO!' : 'REPROVADO!'}</td>`;
    linhaMedia += `</tr>`
    
    const footerTabela = document.querySelector('tfoot');
    footerTabela.innerHTML = linhaMedia;
}


*/