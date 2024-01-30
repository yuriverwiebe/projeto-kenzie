const modal = document.querySelector('.modal')

const botaoAbrirModal = document.querySelector('.botao-chamada')

const botaoFecharModal = document.querySelector('.botao-fechar')

botaoAbrirModal.addEventListener('click', () => {
    modal.showModal();
})

botaoFecharModal.addEventListener('click', () => {
    modal.close()
})
