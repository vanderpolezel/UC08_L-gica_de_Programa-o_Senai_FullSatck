const date = new Date();
const diaAtual = date.getDate();
const mesAtual = date.getMonth() ;
const anoAtual = date.getFullYear();
const dataAtual = date.toLocaleDateString();

const dataEvento = '30-07-2022'

let dataNascimento = new Date('1982-11-17')

const diff = Math.abs(date.getFullYear() - dataNascimento.getFullYear()); // Subtrai uma data pela outra
const idade  = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

console.log(idade)

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


