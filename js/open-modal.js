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

function recovery(id) {
    startModal('modal-recovery');

    if (nav3.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
            nav3.classList.add('active');
        }
        else {
            nav3.classList.add('active')
        }
    }
}