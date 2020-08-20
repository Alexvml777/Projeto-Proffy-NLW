//  PROCURAR O BOTAO
document.querySelector("#add-time") //querySelector --> procura o elemento no código html

// QUANDO CLICAR NO BOTAO
 .addEventListener('click', cloneField) // addEvent... --> escuta a função ao 'clicar' 

 // EXECUTAR UMA ACAO
function cloneField() { // function --> Cria a funcao
    

    // DUPLICAR OS CAMPOS. QUE CAMPOS? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Retorna a copia de um nó (elemento) se verdadeiro: retorna todo o conteúdo dentro do elemento. senao só o elemento em que é passado (schedule-item).

    //PEGAR OS CAMPOS. QUE CAMPOS?
    const fields = newFieldContainer.querySelectorAll('input')

    //PARA CADA CAMPO, LIMPAR
    fields.forEach(function(field) {
        //PEGA O FIELD DO MOMENTO E LIMPA ELE
        field.value = ""
    })
    // COLOCAR NA PÁGINA: ONDE?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
} 

    
