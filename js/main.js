
var nome ="Marcelo Limot";
var nome2 ="Elvis"
var idade="29";
var frase=("Nome: " + nome + " Tem " + idade + " Anos");
var lista = ["azul", "amarelo","vermelho"]
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"banana", cor:"amarelo"} ]//exemplo dicionario

//Exemplo comentario de uma linha

/* exemplo de comentario 
com varias
linhas*/

//frase.toUpperCase(); faz com que a frase fique totalmente em maiusculo
//alert(frase.replace("Marcelo Limot", nome2));
lista.push("verde") //inclui um novo item a lista
console.log(lista);
lista.pop(); //remove o ultimo item
console.log(lista);
console.log(lista.length); //imprime o tamanho da lista
console.log(lista.reverse()); //imprime a lista ao contrario

console.log(lista.toString());
console.log(lista.join("  *-* "))//aqui vc consegue incluir o seu separador preferido
console.log(frutas[1].cor); //aqui vc chama a posição e define qual a informação que deseja do objeto


//var idade= prompt("insira a sua idade: ");//inserção de dados pelo usuario

/* uso de condicionais
 if(idade>= 18){
    alert("maior de idade " + idade);
}
else{
    alert("menor de idade " + idade);
}
*/

/*uso de laço de repetição while
var i = 1;

while(i < 5){
    console.log(i);
    i=i+1;
}
*/

/*uso de laço de repetição for
for(i=0; i<=5; i++){
    console.log(i);
}
*/

var data = new Date;
var dia = data.getDay();
var mes = data.getMonth();
var ano =data.getFullYear();
var hora= data.getHours();
var min= data.getMinutes();
alert("Alerta: foi encontrado um virus no seu computador as: "+ hora+":"+min+" no dia: "+dia+"/"+mes+"/"+ano);