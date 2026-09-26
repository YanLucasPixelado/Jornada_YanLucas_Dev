function anArgument(...elementos) {
  let quantidade_elementos = elementos.length;
  let argumentos = '';
  let indice = 0;
  if (quantidade_elementos > 1) {
    for (let elemento of elementos) {
      // -------------------
      if (elemento === elementos[quantidade_elementos - 2] && indice === quantidade_elementos - 2) {
        argumentos = argumentos + '"' + elemento + '"' + ' and '
        
      } else if (elemento === elementos[quantidade_elementos - 1] && indice === quantidade_elementos - 1) {
        argumentos = argumentos + '"' + elemento + '"' + '.'
        
      } else {
        argumentos = argumentos + '"' + elemento + '"' + ', '
      
      } // Fim da estrutura 'if (elemento === elementos[quantidade_elementos - 2]) {...' 
    
      indice = indice + 1
    
    } // Fim da estrutura 'for (let elemento of elementos)'
    
    // Vai retornar a string formatada depois de fazer as devidas modificações
    return `You gave me ${quantidade_elementos} arguments and they are ${argumentos}`
    
    
  } else if (quantidade_elementos === 1) {
    argumentos = '"' + elementos[0] + '"'
    return `You gave me ${quantidade_elementos} argument and it is ${argumentos}.`
    
  } else {
    didnot = "didn't"
    return `You ${didnot} give me any arguments.`
  }

} // Fim da função 'anArgument'
  
  
} // Fim da função 'anArgument'
