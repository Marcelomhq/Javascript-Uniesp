function subTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

subTexto('h1','Atividade 1 - Going Further.')
subTexto('h2','Atividade extra com intuito de aprofundar meu conhecimento em javascript usando a atividade do Professor Glaucio da materia Front-End 2');
const qtdPessoasRecebidas = false;

function qtdPessoas(){
    let quantidadePessoas = document.querySelector("#campoQuantidadePessoas").value;
    quantidadePessoas = Number(quantidadePessoas);
    console.log(quantidadePessoas);
    if (!isNaN(quantidadePessoas) && Number.isInteger(quantidadePessoas) && quantidadePessoas >= 1 &&quantidadePessoas <= 15){
        console.log('Valido',quantidadePessoas);
        document.querySelector('#nomePessoa').classList.remove("hidden");
        console.log('Valido',quantidadePessoas);
        document.querySelector('#alturaPessoa').classList.remove("hidden");
        console.log('Valido',quantidadePessoas);
        document.querySelector('#generoPessoa').classList.remove("hidden");
    } else{
        console.log('invalido');
        // document.querySelector('#nomePessoa').disabled = false;
        // document.querySelector('#alturaPessoa').disabled = false;
        // document.querySelector('#generoPessoa').disabled = false;
    }
}


// const inputElemento = document.getElementById("campoQuantidadePessoas");
// let inputValor ='';

// inputElemento.addEventListener('input',function(event){
//     inputValor = event.target.value;
//     console.log('Input value: ', inputValor);
// }
// );
