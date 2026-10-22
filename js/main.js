// WhatsApp da Cycloponto Recreio: (21) 2487-5182, só dígitos com DDI 55.
const WHATSAPP_NUMBER = '552124875182';
const DEFAULT_MESSAGE = 'Olá, Cycloponto! Quero alugar uma bike.';

// Monta o link de cada botão. data-wa pode trazer uma mensagem própria; vazio usa a padrão.
document.querySelectorAll('[data-wa]').forEach((el) => {
  const text = encodeURIComponent(el.dataset.wa || DEFAULT_MESSAGE);
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
});
