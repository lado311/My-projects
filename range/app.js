let input = document.querySelector('input')
let number = document.querySelector('.number');

      input.addEventListener('input' , () => {
        number.textContent = input.value;

    });