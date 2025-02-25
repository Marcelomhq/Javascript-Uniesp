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
    const documentoPessoas = document.getElementById('campoQuantidadePessoas');
    let quantidadePessoas = documentoPessoas.value;
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
    const checadorValidadeRegex = /^[A-Za-z ]+$/;
    const removerEspacos = String(nomeP).trim();

    if (removerEspacos.length > 1 && checadorValidadeRegex.test(removerEspacos)){
        console.log('Nome Pessoa Valido');
        return true;
    } else{
        console.log('Nome Pessoa Invalido');
        return false;
    }

}

function validarAltura(alturaP) {
    if (!isNaN(alturaP) && Number.isInteger(alturaP) && alturaP >= 1 && alturaP <= 300) {
        console.log('Altura Valida');
        return true;        
    } else {
        console.log('Altura Invalida');
        return false;
    }
}

function validarGenero(generoP) {
    const generoRegex = /^[MFmf]$/;

    if (generoRegex.test(generoP) && generoP.length == 1) {
        console.log('Genero valido');
        return true;
    } else {
        console.log('Genero nao valido');
        return false;
    }
}

function validarAtributos(){
    const nomeP = document.getElementById('nomePessoa').value;
    const alturaP = document.getElementById('alturaPessoa').value;
    const generoP = document.getElementById('alturaPessoa').value

    const nomeValido = validarNome(nomeP);
    const alturaValido = validarAltura(alturaP);
    const generoValido = validarGenero(generoP);

    if (nomeValido == false) {
        document.getElementById('nomePessoa').style.borderColor = 'red';
        document.getElementById('nomePessoa').style.borderWidth = 'medium';      
    } else{
        document.getElementById('nomePessoa').style.borderColor = 'green';
        document.getElementById('nomePessoa').style.borderWidth = 'none';
    };

    if (alturaValido == false) {
        document.getElementById('alturaPessoa').style.borderColor = 'red'; 
        document.getElementById('nomePessoa').style.borderWidth = 'medium';           
    };

    if (generoValido == false) {
        document.getElementById('generoPessoa').style.borderColor = 'red';  
        document.getElementById('nomePessoa').style.borderWidth = 'medium';          
    };

}


// const inputElemento = document.getElementById("campoQuantidadePessoas");
// let inputValor ='';

// inputElemento.addEventListener('input',function(event){
//     inputValor = event.target.value;
//     console.log('Input value: ', inputValor);
// }
// );
