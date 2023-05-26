let botao = document.getElementById("botao");
botao.addEventListener('click', pega_horario);


function pega_horario()
{
    let hora = document.getElementById("seleciona_hora");
    let resultado = Number(hora.value);
    let pega_id = document.getElementById("horara");
    pega_id.style.background = 'blue';
    pega_id.innerHTML = `Sao exatamente ${resultado}`;
}