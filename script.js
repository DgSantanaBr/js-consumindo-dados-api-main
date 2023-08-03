
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

