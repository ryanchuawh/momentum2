let modal = document.getElementById('settingsmodal')
let modalBtn = document.getElementById('settings');
let closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}