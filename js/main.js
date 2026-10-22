// Número do WhatsApp da Cycloponto: só dígitos, com DDI 55 + DDD 21.
// TODO: substituir pelo número oficial.
const WHATSAPP_NUMBER = '5521999999999';

// Monta o link de cada botão com a mensagem já preenchida (atributo data-wa).
document.querySelectorAll('[data-wa]').forEach((el) => {
  const text = encodeURIComponent(el.dataset.wa);
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
});

// Nav ganha fundo sólido depois do hero.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('nav--solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
