var nav3 = document.getElementById('option3');

function startModal(ModalID) {
    const modal = document.getElementById(ModalID);
    modal.classList.add('open-modal');

    modal.addEventListener('click', (e) => {
        if (e.target.id == ModalID || e.target.className == 'clouse') {
            modal.classList.remove('open-modal');
            nav3.classList.remove('active');
        }
    });
}

const recovery = document.querySelector('.recovery');
recovery.addEventListener('click', () => {
    startModal('modal-recovery');
    nav3.classList.add('active');
});