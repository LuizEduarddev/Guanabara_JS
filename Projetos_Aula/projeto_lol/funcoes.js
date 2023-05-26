let aphelios_img = document.getElementById("Aphelios_img");
aphelios_img.addEventListener('click', entrar_aphelios);


let yasuo_img = document.getElementById("Yasuo_img");
yasuo_img.addEventListener('click', entrar_yasuo)

let yummi_img = document.querySelector("#Yummi_img");
yummi_img.addEventListener('click', entrar_yasuo);

let botao_audio = document.getElementById('play_audio');
botao_audio.addEventListener('click', audio_play);

function audio_play()
{
    let botao_audio = new Audio("Audio_Personagens/aphelios_voice.mp3");
    botao_audio.play();
}

function entrar_aphelios()
{
    let pega_div = document.getElementById("acertou");
    pega_div.style.background = 'green';
    pega_div.innerHTML = 'Voce acertou!';
}

function entrar_yasuo()
{
    let pega_div = document.getElementById("acertou");
    pega_div.style.background = 'red';
    pega_div.innerHTML = 'Voce errou!';
}

function entrar_yummi()
{
    alert("voce errou!");
    let pega_div = document.getElementById("acertou");
    pega_div.style.background = 'red';
    pega_div.innerHTML = 'Voce errou!';
    
}