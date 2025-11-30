// ==========================
// BOTÃO TEMA ESCURO / CLARO
// ==========================
const botaoTema = document.getElementById('botao-tema');
const body = document.body;

// Carregar tema salvo
const temaSalvo = localStorage.getItem('tema');

// Aplicar tema salvo ao carregar
aplicarTema(temaSalvo === 'escuro');

// Função para aplicar tema
function aplicarTema(escuro) {
    if (escuro) {
        body.classList.add('escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Ícone do modo escuro
    } else {
        body.classList.remove('escuro');
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Ícone do modo claro
    }
}

// Clique para alternar
botaoTema.addEventListener('click', () => {
    const isEscuro = body.classList.toggle('escuro');
    aplicarTema(isEscuro);

    // Salvar tema
    localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});


// ==========================
// SCROLL SUAVE DOS LINKS
// ==========================
const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            const header = document.querySelector('header');
            const headerAltura = header ? header.offsetHeight : 0;

            const posicao = destino.offsetTop - headerAltura - 20;

            window.scrollTo({
                top: posicao,
                behavior: 'smooth'
            });
        }
    });
});