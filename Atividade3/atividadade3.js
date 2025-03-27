// •Crie um array com 5 nomes e exiba o terceiro nome no console.
// •Adicione um nome ao final e um no início do array.
// •Remova o último nome e exiba o array atualizado.
// •Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
// •Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

let nomes = ['marcelo','thiago','davo','sabrina','iza'];
console.log('•Crie um array com 5 nomes e exiba o terceiro nome no console.');
console.log(`Array completo: ${nomes}`);
console.log(`Terceiro nome do array: ${nomes[2]}`);



nomes.push('jose');
nomes.unshift('virgulino');
console.log('•Adicione um nome ao final e um no início do array.');
console.log(`Novo array com jose e virgulino adicionados: ${nomes}`);

console.log("•Remova o último nome e exiba o array atualizado.");
nomes.pop();
console.log(`Array com o ultimo elemento retirado: ${nomes}`);

console.log("•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].");
let arrayNumbers = [2,4,6,8];

function dobro(num){
    return num *2;
}

let newArray = arrayNumbers.map(dobro);

console.log(`Novo array: ${newArray}`);

console.log("•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]");
arrayNumbers = [1,3,5,7,9];

function biggerThan5(num){
    return num > 5;
}

newArray = arrayNumbers.filter(biggerThan5);
console.log(`Array apenas com elementos acima de 5: ${newArray}`);