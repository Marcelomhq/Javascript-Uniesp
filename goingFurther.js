let nome, altura,genero;

function subTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function hiddenStatus(){
    for (let i =0; i<arguments.length;i++){
        console.log(arguments[i]);
        document.querySelector(arguments[i]).classList.remove("hidden");
    }
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
        document.getElementById('divAtributosPessoas').classList.remove('hidden');        
        console.log('Valido',quantidadePessoas);        
        document.getElementById('divQuantidadePessoas').classList.add("hidden");
    } else{
        console.log('invalido');
    }
}

function validarNome(nomeP){

}

function validarAtributos(){
    const nomeP = document.getElementById('nomePessoa').value;
    const alturaP = document.getElementById('alturaPessoa').value;
    const generoP = document.getElementById('alturaPessoa').value
}


// const inputElemento = document.getElementById("campoQuantidadePessoas");
// let inputValor ='';

// inputElemento.addEventListener('input',function(event){
//     inputValor = event.target.value;
//     console.log('Input value: ', inputValor);
// }
// );
