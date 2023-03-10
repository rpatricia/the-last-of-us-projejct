// const botoesCarrossel = document.querySelectorAll('.botao');
// const imagens = document.querySelectorAll('.imagem');

// botoesCarrossel.forEach((botao, indice) => {
//     const imagemAtual = document.querySelector('.ativa');
//     const botaoAtual = document.querySelector('.selecionado');
//     botao.addEventListener('click', () => {

//         botaoAtual.classList.remove('selecionado');
//         imagemAtual.classList.remove('ativa');

//         imagens[indice].classList.add('ativa');
//         botoesCarrossel[indice].classList.add('selecionado');
//     });
// });



const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.ativa');
		const botaoAtual = document.querySelector('.selecionado');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('ativa');
        
		imagens[indice].classList.add('ativa');
		botoesCarrossel[indice].classList.add('selecionado');
	});
});