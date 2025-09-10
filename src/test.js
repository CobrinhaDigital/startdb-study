'use strict';

const animaisBrinquedos = [
    {nome: "Rex", tipo: "cão", brinquedos: ["RATO", "BOLA"]},
    {nome: "Mimi", tipo: "gato", brinquedos: ["BOLA", "LASER"]},
    {nome: "Fofo", tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"]},
    {nome: "Zero", tipo:"gato", brinquedos: ["RATO", "BOLA"]},
    {nome: "Bola", tipo: "cão", brinquedos: ["CAIXA", "NOVELO"]},
    {nome: "Bebe", tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"]},
    {nome: "Loco", tipo: "jabuti", brinquedos: ["SKATE", "RATO"]}
]

var pessoa1 = ["RATO,BOLA"]
var pessoa2 = ["RATO,BOLA"]
var ordemAnimais = ["Rex,Mimi"]
var animaisPessoa1 = []
var animaisPessoa2 = []
var animaisAbrigo = []
var animaisDestino = []

var brinquedoArr = (pessoa1[0].split(','));
pessoa1.splice(0)
pessoa1.push(...brinquedoArr);
console.log(pessoa1);
console.log(pessoa1[1])

var brinquedoArr = (pessoa2[0].split(','));
pessoa2.splice(0)
pessoa2.push(...brinquedoArr);
console.log(pessoa2);
console.log(pessoa2[2])

var ordemAnimaisLista = (ordemAnimais[0].split(','));
ordemAnimais.splice(0)
ordemAnimais.push(...ordemAnimaisLista);
console.log(ordemAnimais);

function verificarAnimal() {

  var animaisDuplicados = new Set(ordemAnimais);
  if (animaisDuplicados.size !== ordemAnimais.length) {
    return "Animal inválido";
  }

  for (var j = 0 ; j < ordemAnimais.length; j++) {
    if (animaisBrinquedos[j].nome !== ordemAnimais[j]) {
      return "Animal inválido";
    }
  } 

  return "Animal válido"
}

function verificarBrinquedo() {
  var ordemAnimaisInfo = []
  var duplicado1 = false
  var duplicado2 = false

  var brinquedoDuplicado1 = new Set(pessoa1);
  if (brinquedoDuplicado1.size !== pessoa1.length) {
    duplicado1 = true ;
  }

  var brinquedoDuplicado2 = new Set(pessoa2);
  if (brinquedoDuplicado2.size !== pessoa2.length) {
      duplicado2 = true;
  }

  for (var nomeAnimal of ordemAnimais) {
    for (var animal of animaisBrinquedos) {
      if (animal.nome === nomeAnimal) {
        ordemAnimaisInfo.push({
          nome: animal.nome,
          tipo: animal.tipo,
          brinquedos: animal.brinquedos
        })
        break
      }
    }
  }

  for (var i = 0 ; i < ordemAnimaisLista.length; i++) {
    if (ordemAnimaisInfo[i].brinquedos[i] === pessoa1[i] && ordemAnimaisInfo[i].brinquedos[i] !== pessoa2[i]) {
      var resultado = ordemAnimaisInfo[i].nome + " - pessoa 1"
      animaisPessoa1.push(resultado)
      animaisDestino.push(resultado)
      console.log(resultado)
    } else if (ordemAnimaisInfo[i].brinquedos[i] === pessoa2[i] && ordemAnimaisInfo[i].brinquedos[i] !== pessoa1[i]) {
      var resultado = ordemAnimaisInfo[i].nome + " - pessoa 2"
      animaisPessoa2.push(resultado)
      animaisDestino.push(resultado)
      console.log(resultado)
    } else {
      // console.log(ordemAnimaisInfo[i].brinquedos)
      // console.log(pessoa1[i])
      var resultado = ordemAnimaisInfo[i].nome + " - abrigo"
      animaisAbrigo.push(resultado) 
      animaisDestino.push(resultado)
      console.log(resultado)
    }
  }

  return animaisDestino
}

console.log(verificarAnimal(ordemAnimais));
console.log(verificarBrinquedo());

