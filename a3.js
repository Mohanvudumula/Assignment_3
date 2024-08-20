const button = document.getElementById('toggleButton');
const text = document.getElementById('text');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    container.classList.toggle('active');
    
    if (button.classList.contains('active')) {
        button.textContent = 'Click Again';
        text.textContent = 'After action';
    } else {
        button.textContent = 'Click Me';
        text.textContent = 'Before action';
    }
});
