const btn = document.getElementById('toggleMessageBtn');
const messageBox = document.getElementById('messageBox');

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80
      },
      "color": {
        "value": "#000000"
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2
      },
      "size": {
        "value": 2
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"  // Você pode trocar por "repulse", "bubble" etc.
        }
      }
    },
    "retina_detect": true
});

btn.addEventListener('click', () => {
    if (messageBox.style.display === 'block') {
        // Esconde com animação
        messageBox.style.opacity = '0';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 300); // tempo da transição
        btn.textContent = 'Clique aqui!';
    } else {
        // Mostra com animação
        messageBox.style.display = 'block';
        messageBox.style.opacity = '0';
        setTimeout(() => {
            messageBox.style.transition = 'opacity 0.3s ease';
            messageBox.style.opacity = '1';
        }, 10);
        btn.textContent = 'Esconder mensagem';
    }
});

  