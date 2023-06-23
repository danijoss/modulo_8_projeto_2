const form = document.getElementById("form-agenda");
const contatos = [];
const numerosTelefone = [];

let linhas = ''; 

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone')

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');
    
    if(contatos.includes(inputNomeContato.value)){
        alert(`A contato ${inputNomeContato.value} já foi inserido`)
    }else{
        
        contatos.push(inputNomeContato.value);
        numerosTelefone.push(inputNumeroContato.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
        
        linhas += linha;
        inputNomeContato.value = ''
        inputNumeroContato.value = ''
    }

    }
    
function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
        
    }
    