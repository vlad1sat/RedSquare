function getValueForm() {
    const form = document.querySelector('.form-square');
    let number = 4;
    form.addEventListener('submit', () => {
        const input = form.querySelector('#input-square');
        number = input.value;
    });
    return number;
}

