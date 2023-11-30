const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const main = document.getElementById('main');
const root = document.getElementById('root');
const width = document.getElementById('width');
const cols = document.getElementById('cols');
const regenerate = document.getElementById('regenerate');

function generate() {
    root.innerHTML = '';

    const rowsNum = 25;
    const colsNum = cols.value;

    for (let row = 0; row < rowsNum; row++) {
        const parent = document.createElement('div');
        parent.classList.add('row');

        for (let col = 0; col < colsNum; col++) {
            const child = document.createElement('div');
            child.classList.add('col');
            if (Math.round(colsNum / 2) - 1 === col) {
                child.style.fontWeight = 'bold';
            }

            const randomLetter =
                letters[Math.floor(Math.random() * letters.length)];
            child.innerText = randomLetter;
            parent.appendChild(child);
        }

        root.appendChild(parent);
    }
}

function updatePadding() {
    root.style.padding = `0 ${width.value}px`;
}

width.addEventListener('input', () => {
    window.localStorage.setItem('width', width.value);
    updatePadding();
});

cols.addEventListener('input', () => {
    window.localStorage.setItem('cols', cols.value);
    generate();
});

regenerate.addEventListener('click', generate);

width.max = main.clientWidth;
width.min = 0;
width.value = window.localStorage.getItem('width') || main.clientWidth / 10;

cols.value = window.localStorage.getItem('cols') || 5;

updatePadding();
generate();
