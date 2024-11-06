// Evento para Abrir e Fechar um Menu na Versão Mobile

// Criando uma variavel e colocando pra ela uma função de documento, mandando pegar o elemento do id sitado, lá no HTML (No caso, open-menu-button)
let botaoAbrirMenu = document.getElementById('open-menu-button')

// Fazendo a mesma coisa do código acima, aqui
let mobileMenu = document.getElementById('mobile-menu')

let overlay = document.getElementById('overlay-menu')

// Criando uma função de evento; damos o nome do evento de "click"; criamos uma arrow function e dentro dela, digo o que irá acontecer toda vez que clicarem no botão.
botaoAbrirMenu.addEventListener('click', () => {
    // Está função irá criar uma classe toda vez que clicarem no botão (está classe não pode existir dentro do CSS, por que ele criara dinamicamente)
    mobileMenu.classList.add('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu
mobileMenu.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão, toda vez que clicarem no botão para fechar
    mobileMenu.classList.remove('abrir-menu')
})

// Fazendo a mesma coisa do código acima, mas desta vez, para fechar o menu ao clicar na tela fora do menu
overlayMenu.addEventListener('click', () => {
    // Está função irá remover a classe que foi criada anteriormente, ao clicarem no botão ou na tela fora do menu
    mobileMenu.classList.remove('abrir-menu')
})


// ----------  ||  ---------- \\
// ----------  Swipper - Slide para os Cards  ---------- \\


// Pegando os elementos do HTML.
const cards = document.querySelectorAll('.testimonial-card');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const dots = document.querySelectorAll('.dot');

// Índice do card atual: Iniciamos em 0, indicando o primeiro card. Essa variável serve como um marcador para indicar qual dos cards está atualmente sendo exibido.
let currentCardIndex = 0;


// Inicializando a Biblioteca Swiper para criar os slides dos cards.
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Número de slides visíveis
  spaceBetween: 0, // Espaço entre os slides
  loop: true,
  simulateTouch: false,
  allowTouchMove: false,
  breakpoints: {
    // Tela com tamanho menor ou igual a >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // Tela com tamanho menor ou igual a >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // Tela com tamanho menor ou igual a >= 1188px
    1188: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});


// Função para atualizar a exibição do card ativo e a bolinha de paginação.
function showCard() {
  // Remove a classe 'active' de todos os cards
  cards.forEach((card) => card.classList.remove('active'));

  // Define o card atual como ativo
  cards[currentCardIndex].classList.add('active');

  // Remove a classe 'active' de todas as bolinhas
  dots.forEach((dot) => dot.classList.remove('dotActive'));
  
  // Atualiza a bolinha ativa para corresponder ao card ativo
  dots[currentCardIndex].classList.add('dotActive');

  // Atualiza o slide visível diretamente
  swiper.slideTo(currentCardIndex);  // Atualiza o slide conforme o índice do card
}


// ----------  Botões de Navegação e Paginação  ---------- \\

// Quando o botão esquerdo é clicado, calculamos o índice do card anterior. A fórmula (currentCardIndex - 1 + cards.length) % cards.length garante que se chegarmos ao primeiro card e clicarmos para trás, voltaremos para o último card. O mesmo serve para o botão direito.

// Função para avançar para o próximo card
function nextCard() {
  // Incrementa o índice do card, permitindo o looping
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  // Atualiza a exibição do card atual
  showCard();
}

// Função para retroceder para o card anterior
function prevCard() {
  // Decrementa o índice do card, permitindo o looping
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;

  // Atualiza a exibição do card atual
  showCard();
}

// Eventos de clique para as setas de navegação
arrowRight.addEventListener('click', nextCard);
arrowLeft.addEventListener('click', prevCard);

// Eventos de clique para as bolinhas de paginação
// Essa linha inicia um loop com o forEach, que irá percorrer cada elemento (cada bolinha) dentro do conjunto de elementos dots
dots.forEach((dot, index) => {
  // Essa linha adiciona um "ouvinte de eventos" a cada bolinha
  dot.addEventListener('click', () => {

    // Atualiza o índice do card com base na bolinha clicada
    currentCardIndex = index;
    
    // Atualiza a exibição do card atual
    showCard();
  });
});

// Inicializa o primeiro card e bolinha como ativos
showCard();


// ------------------------ || ------------------------ \\

// Para fins de aprendizado:

//currentCardIndex - 1: Essa parte calcula o índice do card anterior.

// + cards.length: Aqui, adicionamos o número total de cards. Isso é feito para garantir que, mesmo se o resultado da subtração anterior for negativo (por exemplo, quando estamos no primeiro card e queremos ir para o último), o resultado final seja positivo.

// % cards.length: O operador % calcula o resto da divisão. Neste caso, ele serve para "circular" pelos índices. Se o resultado da soma anterior for maior que o número total de cards, o operador % garante que o resultado final seja um índice válido dentro do nosso conjunto de cards.

// -----------

// currentCardIndex + 1: Calcula o índice do próximo card.

// % cards.length: Garante que, ao chegar no último card e tentar ir para o próximo, o índice volte para o primeiro card.