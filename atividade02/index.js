const date = new Date();
const diaAtual = date.getDate();
const mesAtual = date.getMonth() ;
const anoAtual = date.getFullYear();
const dataAtual = date.toLocaleDateString();

const dataEvento = '30-07-2022'

let idade = 17



let listaDeParticipantes = ['Vander','Ted', 'Lorena']
let quantidadeDeParticipantes = listaDeParticipantes.length
let participante = 'João'



//validação data do Evento
if(dataAtual < dataEvento){
    console.log('Data Permitida')
} else {
    console.log('Data inválida')
}

if(idade >= 18){
    console.log(`Idade ${idade} permitida`)
} else {
    console.log(`Idade ${idade} não permitida`)
}

if(quantidadeDeParticipantes < 100){
    listaDeParticipantes.push(participante)
    console.log(listaDeParticipantes)
} else {
    console.log('Limite de participantes excedido')
}


