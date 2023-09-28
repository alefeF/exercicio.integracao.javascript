const form = document.getElementById('sele')

function validar(A ,B){
    const veri = B > A
    return veri ;
}


form.addEventListener('submit',function (e) {
    let formvalidar = false; 
    e.preventDefault();

    valorA = document.getElementById ('campo A') ;
    valorB = document.getElementById ('campo B') ;
    mensagem =   ` esta valido, o B: ${valorB.value} esta maior que o A: ${valorA.value}`   
    formvalidar = validar (valorA.value, valorB.value)

    if(formvalidar){
       alert(mensagem)



        valorA.value = ' '
        valorB.value = ' '
    } else  {
        alert('O valor A esta Maior ou igual ao B ,tente novamente!!');
        valorA.value = ' '
        valorB.value = ' '
    

    }
       


    
   
    
    



   
      
})










console.log(form)


