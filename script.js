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

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.photo-gallery img');

  images.forEach(img => {
    img.style.cursor = 'pointer';  // dá dica ao usuário que é clicável

    img.addEventListener('click', () => {
      // adiciona classe que faz zoom
      img.classList.add('zoomed');

      // depois de 2s, remove para voltar ao normal
      setTimeout(() => {
        img.classList.remove('zoomed');
      }, 2000);
    });
  });
});
  