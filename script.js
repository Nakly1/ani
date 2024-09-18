
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
});


function showMessage(buttonNumber) {
    const messages = {
        1: 'Amor, aunque la distancia nos separe físicamente, siento tu amor de una manera que no puedo explicar, cada mensaje, cada palabra tuya, me hace sentir tan cerca de ti mi princesa, no importa cuántos kilómetros nos separen, porque lo que compartimos es unico, somos unicos, algo que nunca antes había sentido, eres la unica persona que llena mi corazón de esta manera, y no pasa un día en el que no me sienta agradecido por haberte encontrado, eres mi amor, mi luz, y siempre lo serás todo para mi',
        2: 'Desde que entraste en mi vida, todo ha cambiado para mejor, tu amor me ha transformado de una manera que no imaginaba posible, tu ternura, tu forma de ser tan especial, y esa voz tuya que me transmite paz, todo de ti me fascina mi amor, me haces increiblemente feliz, y cada día que pasa, me enamoro más de ti, no puedo dejar de pensar en lo afortunado que soy por tener a alguien tan maravillosa como tú en mi vida',
        3: 'Celebramos tres meses desde que decidimos estar juntos por este camino. Feliz aniversario, amor mío, tres meses que han sido llenos de alegria, de aprendizaje, y de cariño mutuo, no puedo esperar a seguir sumando meses, años, y momentos contigo aunque estemos asi de lejitos, pero vendran los momentos en presencial y seran los mejores, estoy tan agradecido de poder compartir esta historia contigo, mas bien, nuestra historia mi amor, feliz aniversario y que vengan muchos mas',
        4: 'Sé que ambos deseamos con todo el corazón poder estar juntos en persona, y ese momento llegará, no importa cuánto tiempo tome ni cuántas veces tengamos que esperar, porque sé que al final valdra MUCHO la pena, con esfuerzo y paciencia, ese sueño que compartimos será una realidad. A veces me da miedo y emoción por todo lo que vendrá, por todo lo que viviremos juntos. Te prometo que lo haremos realidad, y cuando llegue el momento, será perfecto amor'
    };

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = messages[buttonNumber];
    messageDiv.style.display = 'block'; 
}

document.body.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000); 
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('horse-button').style.display = 'block'; 
});

document.getElementById('horse-button').addEventListener('click', function() {
    document.getElementById('horse-modal').style.display = 'block';
    const horseAudio = document.getElementById('horse-audio');
    horseAudio.play();
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('horse-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('horse-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
