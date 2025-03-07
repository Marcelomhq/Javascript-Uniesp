let nome, altura,genero,quantidadePessoas,counterPessoas = 0;
let listaPessoas =[];


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
    quantidadePessoas = documentoPessoas.value;
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
    const alturaP = parseInt(document.getElementById('alturaPessoa').value);
    const generoP = document.getElementById('generoPessoa').value;

    const nomeValido = validarNome(nomeP);
    const alturaValido = validarAltura(alturaP);
    const generoValido = validarGenero(generoP);

    if (nomeValido == false) {
        document.getElementById('nomePessoa').style.borderColor = 'red';
        // document.getElementById('nomePessoa').style.borderWidth = 'medium';      
    } else{
        document.getElementById('nomePessoa').style.borderColor = 'green';
        document.getElementById('nomePessoa').style.borderWidth = 'none';
    };

    if (alturaValido == false) {
        document.getElementById('alturaPessoa').style.borderColor = 'red'; 
        // document.getElementById('nomePessoa').style.borderWidth = 'medium';           
    } else {
        document.getElementById('alturaPessoa').style.borderColor = 'green';
        document.getElementById('alturaPessoa').style.borderWidth = 'none';
    }

    if (generoValido == false) {
        document.getElementById('generoPessoa').style.borderColor = 'red';  
        // document.getElementById('nomePessoa').style.borderWidth = 'medium';          
    } else {
        document.getElementById('generoPessoa').style.borderColor = 'green';
        document.getElementById('generoPessoa').style.borderWidth = 'none';
        
    }
    if (nomeValido && alturaValido && generoValido){
        adicionarLista(nomeP,alturaP,generoP);
    } else {
        return false;
    }

}

function adicionarLista(nomeP,alturaP,generoP){
    
    let listaNova = [nomeP,alturaP,generoP];
    listaPessoas.push(listaNova);
    console.log("adicionando a lista",listaNova);
    console.log("Lista total",listaPessoas);
    document.getElementById('texto').text = `Pessoa ${nomeP} do genero ${generoP} com altura ${alturaP}cm.`;
    document.getElementById('nomePessoa').value = '';
    document.getElementById('alturaPessoa').value = '';
    document.getElementById('generoPessoa').value = '';
    counterPessoas += 1;
    if (counterPessoas == quantidadePessoas){
        document.getElementById('divAtributosPessoas').classList.add('hidden');
        document.getElementById('divResultadoFinal').classList.remove('hidden');
        maioresMenoresAltura();
        mediaAlturaM();
        numeroFeminino();
        subTexto('#listaTotal','Lista completa de pessoas inscritas: ');
        document.getElementById('listaTotal').classList.remove('hidden');
        let textoLista =''
        for (let i = 0;i < listaPessoas.length;i++){
            textoLista += `Pessoa ${i+1}: Nome ${listaPessoas[i][0]}, Altura ${listaPessoas[i][1]}cm, Genero: ${listaPessoas[i][2].toUpperCase()}. <br>`
            
        }
        subTexto('#texto',textoLista);
        // document.getElementById('listaTotal').text = `${listaPessoas}`;
    }
}

function maioresMenoresAltura(){
    let listaMasculina = [];
    for (let i = 0; i<listaPessoas.length;i++){
        if (listaPessoas[i][2].toUpperCase() == 'M'){
            listaMasculina.push(listaPessoas[i][1]);
        }
    }
    let maiorAltura = Math.max(...listaMasculina);
    let menorAltura = Math.min(...listaMasculina);
    subTexto('#maiorMenorAltura',`Maior altura entre os homens: ${maiorAltura} e a menor altura ${menorAltura}`)
}

function numeroFeminino(){
    let qtd = 0;
    for (let i = 0; i<listaPessoas.length;i++){
        if (listaPessoas[i][2].toUpperCase() == 'F'){
            qtd += 1;
        }
    }
    subTexto('#numeroMulheres',`Numero de mulheres inseridos foram ${qtd}.`)
    // document.getElementById('numeroMulheres').text = `Numero de mulheres inseridos foram ${qtd}.`;
}

function mediaAlturaM(){
    
    let sum = 0;
    let countMales = 0;
    for (let i = 0; i<listaPessoas.length;i++){
        if (listaPessoas[i][2].toUpperCase() == 'M'){
            sum += listaPessoas[i][1];
            countMales ++;
        }
    }
    let mediaM;
    mediaM = sum/countMales;
    subTexto('#mediaAlturaM',`Media de Altura Masculina ${mediaM}.`)
    // document.getElementById('mediaAlturaM').text = `Media de Altura Masculina ${mediaM}.`;
}

function recomecar(){
    location.reload();
}


// const inputElemento = document.getElementById("campoQuantidadePessoas");
// let inputValor ='';

// inputElemento.addEventListener('input',function(event){
//     inputValor = event.target.value;
//     console.log('Input value: ', inputValor);
// }
// );
