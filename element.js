// setInterval cria uma função anom que,
// utilizando o metodo Date(), getHours(),
// getMinutes(), retornará as horas, 
// minutos e segundos atuais 
setInterval (function(){
    
    let NovaHora = new Date()
    let hora = NovaHora.getHours();
    let minuto = NovaHora.getMinutes();
    let segundo = NovaHora.getSeconds();

    minuto = zero(minuto);
    segundo = zero(segundo);
 // Com o textContent, iremos inserir as horas, minutos e segundos
    document.getElementById('hora').textContent =
    hora+ ':' +minuto+':' +segundo;
}, 1000)

function zero(x) {
    if(x < 10) {
        x = '0'+ x;
    }
    return x
}