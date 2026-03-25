// Data do evento (28 de maio às 09:00)
const dataFinal = new Date("2026-05-28T09:00:00-03:00").getTime();

//  função pra deixar sempre 2 dígitos (00, 01, 02...)
function formatarTempo(valor) {
    return valor < 10 ? "0" + valor : valor;
}

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    //  cálculos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca /1000 ) %60);

    //  aplicando formatação (sempre 2 números)
    document.getElementById("dias").innerHTML = formatarTempo(dias);
    document.getElementById("horas").innerHTML = formatarTempo(horas);
    document.getElementById("minutos").innerHTML = formatarTempo(minutos);
    document.getElementById("segundos").innerText = formatarTempo(segundos);
}

//  atualiza a cada 1 segundo
setInterval(atualizarContador, 1000);

//  já inicia atualizado
atualizarContador();