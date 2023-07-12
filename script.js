// ------------------------------------------
//interação com a API
var consultaCep = fetch('https://viacep.com.br/ws/0100000/json/')
//então converte a requisição em json
.then(resposta => resposta.json())
// então imprime a resposta no console
.then(r => console.log(r))
//pega o erro e o imprime no console caso a requisição com o then dê erro
.catch(erro => console.log(erro));
// ------------------------------------------
console.log(consultaCep)