// // ------------------------------------------
// //interação com a API
// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
// //então converte a requisição em json
// .then(resposta => resposta.json())
// // então imprime a resposta no console ou pega o erro e o imprime no console caso a requisição com o then dê erro usando o catch
// .then(r => {
//     if(r.erro){
//         throw Error('Esse cep não existe !')
//     }else
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído !'));
// // ------------------------------------------
// console.log(consultaCep)


//Async Await - para evitar quando vai se usar muito o .then

async function buscaendereco(cep) {
    var msgErro = document.getElementById('erro');
    msgErro.innerHTML =""; 
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json()
        if(consultaCepConvertida.erro){
            throw Error('Cep não existente');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade; 
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf
        bairro.value = consultaCepConvertida.bairro
    
        console.log(consultaCepConvertida)
        return consultaCepConvertida
    } catch (erro) {
        msgErro.innerHTML = `<p>CEP Invalido.</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaendereco(cep.value));

