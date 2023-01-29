
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('styleCard');
    return square;
}

function logicApp() {
    const form = document.querySelector('.form-square');
    let countSquare = 4;
    form.addEventListener('submit',evt => {
        evt.preventDefault();
        const input = form.querySelector('#input-square');
        countSquare = +input.value;
        const area = document.getElementById('squares');
        area.replaceChildren();
        for (let indexSquare = 0; indexSquare < countSquare; indexSquare++) {
            let square = createSquare();
            area.appendChild(square);
            square.addEventListener('click', () => {
                const color = window.getComputedStyle(square).backgroundColor;
                if (color === 'rgb(255, 0, 0)') square.style.backgroundColor = 'green';
                else square.style.backgroundColor = 'red';
            })
        }
    });
}

logicApp();