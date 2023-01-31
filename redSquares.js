
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('styleCard');
    return square;
}

function createDivSquares() {
    const div = document.createElement('div');
    div.classList.add('squares');
    return div;
}

function appendSquare(boxSquares) {
    let square = createSquare();
    boxSquares.appendChild(square);
    square.addEventListener('click', () => {
        const color = window.getComputedStyle(square).backgroundColor;
        if (color === 'rgb(255, 67, 67)') square.style.backgroundColor = 'rgb(119, 147, 255)';
        else if (color === 'rgb(119, 147, 255)') square.style.backgroundColor = 'rgb(169, 255, 123)';
        else square.style.backgroundColor = 'rgb(255, 67, 67)';
    })
}

function logicDrawBoxes(countSquare) {
    let boxSquares = createDivSquares();
    for (let indexSquare = 0; indexSquare < countSquare; indexSquare++) {
        if (indexSquare !== 0 && indexSquare % 10 === 0 || indexSquare % 10 === 5) {
            document.body.appendChild(boxSquares);
            boxSquares = createDivSquares();
        }
        appendSquare(boxSquares);
    }
    document.body.appendChild(boxSquares);
}
function logicApp() {
    const form = document.querySelector('.form-square');
    let countSquare = 0;

    form.addEventListener('submit',evt => {
        evt.preventDefault();

        const input = form.querySelector('#input-square');
        countSquare = +input.value;
        if (countSquare < 0) {
            alert("Введите число больше 0!");
            return;
        }

        const area = document.querySelectorAll('.squares');
        area.forEach(box => {
            document.body.removeChild(box);
        });

        logicDrawBoxes(countSquare);
    });
}

logicApp();
