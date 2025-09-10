class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisBrinquedos = [
      {nome: "Rex", tipo: "cão", brinquedos: ["RATO", "BOLA"]},
      {nome: "Mimi", tipo: "gato", brinquedos: ["BOLA", "LASER"]},
      {nome: "Fofo", tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"]},
      {nome: "Zero", tipo:"gato", brinquedos: ["RATO", "BOLA"]},
      {nome: "Bola", tipo: "cão", brinquedos: ["CAIXA", "NOVELO"]},
      {nome: "Bebe", tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"]},
      {nome: "Loco", tipo: "jabuti", brinquedos: ["SKATE", "RATO"]}
    ]

    var animaisPessoa1 = []
    var animaisPessoa2 = []
    var animaisAbrigo = []
    var animaisDestino = []

    // Ajustando formatação dos brinquedos da Pessoa 1
    var brinquedoLista = (brinquedosPessoa1[0].split(','));
    brinquedosPessoa1.splice(0)
    brinquedosPessoa1.push(...brinquedoLista);
    console.log(brinquedosPessoa1);

    // Ajustando formatação dos brinquedos da Pessoa 2
    var brinquedoLista = (brinquedosPessoa2[0].split(','));
    brinquedosPessoa2.splice(0)
    brinquedosPessoa2.push(...brinquedoLista);
    console.log(brinquedosPessoa2);

    // Ajustando formatação da ordem dos animais
    var ordemAnimaisLista = (ordemAnimais.split(','));
    brinquedosPessoa2.splice(0)
    ordemAnimaisLista.push(...ordemAnimaisLista);
    console.log(ordemAnimaisLista);

    // verificar se animal existe 

    function verificarAnimal(ordemAnimaisLista) {
      var encontrado = false

      var animaisDuplicados = new Set(ordemAnimais);
      if (animaisDuplicados.size !== ordemAnimais.length) {
        return "Animal inválido";
      }

      for (var i = 0 ; i < animaisBrinquedos.length; i++) {
        for (var j = 0 ; j < ordemAnimaisLista.length; j++) {
          if (animaisBrinquedos[i].nome === ordemAnimaisLista[j]) {
            encontrado.toggle(true)
            break;
          }
        }
      }
      return encontrado ? "Animal válido" : "Animal inválido";
    }

    function verificarBrinquedo() {
      var ordemAnimaisInfo = []
      var duplicado1 = false
      var duplicado2 = false

      // verificar duplicata em pessoa 1
      var brinquedoDuplicado1 = new Set(brinquedosPessoa1);
      if (brinquedoDuplicado1.size !== brinquedosPessoa1.length) {
        duplicado1 = true 
      }

      // verificar duplicata em pessoa 2
      var brinquedoDuplicado2 = new Set(brinquedosPessoa2);
      if (brinquedoDuplicado2.size !== brinquedosPessoa2.length) {
        duplicado2 = true
      }

      // popular dict com os animais sendo avaliados 
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

      // verificar se as pessoas tem o brinquedo na ordem correta e retornar para onde o animal foi 
      for (var i = 0 ; i < ordemAnimaisInfo.length; i++) {

        // verificar se a quantidade é igual 
        if (ordemAnimaisInfo[i].brinquedos.length > brinquedosPessoa1.length) {
          var resultado = ordemAnimaisInfo[i].nome + " - abrigo"
          animaisAbrigo.push(resultado)
        }

        for (var i = 0 ; i < ordemAnimais.length; i++) {
          let animal = ordemAnimaisInfo[i];
        
          if (animal.nome === "Loco") {
            let podePessoa1 = animaisPessoa1.length > 0 && animaisPessoa1.length < 3;
            let podePessoa2 = animaisPessoa2.length > 0 && animaisPessoa2.length < 3;
        
            if (podePessoa1 && !podePessoa2) {
              var resultado = animal.nome + " - pessoa 1";
              animaisPessoa1.push(resultado);
              animaisDestino.push(resultado);
            } else if (podePessoa2 && !podePessoa1) {
              var resultado = animal.nome + " - pessoa 2";
              animaisPessoa2.push(resultado);
              animaisDestino.push(resultado);
            } else {
              var resultado = animal.nome + " - abrigo";
              animaisAbrigo.push(resultado);
              animaisDestino.push(resultado);
            }
        
            continue; 
          }

          if (ordemAnimaisInfo[i].brinquedos[i] === brinquedosPessoa1[i] && ordemAnimaisInfo[i].brinquedos[i] !== brinquedosPessoa2[i]) {
            var resultado = ordemAnimaisInfo[i].nome + " - pessoa 1"
            animaisPessoa1.push(resultado)
            animaisDestino.push(resultado)
            console.log(resultado)
          } else if (ordemAnimaisInfo[i].brinquedos[i] === brinquedosPessoa2[i] && ordemAnimaisInfo[i].brinquedos[i] !== brinquedosPessoa1[i]) {
            var resultado = ordemAnimaisInfo[i].nome + " - pessoa 2"
            animaisPessoa2.push(resultado)
            animaisDestino.push(resultado)
            console.log(resultado)
          } else {
            var resultado = ordemAnimaisInfo[i].nome + " - abrigo"
            animaisAbrigo.push(resultado)
            animaisDestino.push(resultado)
            console.log(resultado)
          }
        }
      }

      return animaisDestino
    }

    function verificarAnimaisPessoas() {
      while (animaisPessoa1.length <= 3) {
        if (ordemAnimais[i] === "Loco" && animaisPessoa1.length > 1) {

        }
        verificarBrinquedo()
      }
    }

    if (verificarAnimal(ordemAnimaisLista) !== "Animal inválido") {
      
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };