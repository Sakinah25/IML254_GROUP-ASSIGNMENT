let loginForm = document.querySelector('.forget-password-container');

document.querySelector('#forget-password-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-change-password-btn').onclick = () => {
    loginForm.classList.remove('active');
    
    window.location.href = 'index.html';
}