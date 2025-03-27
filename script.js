var value = document.getElementById('num')
var maisButton = document.getElementById('mais')
var menosButton = document.getElementById('menos')

let count = 0;
let intervalId = 0;

const updateValue = () => {
    value.innerHTML = count;
};

maisButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue()
    }, 100)
});

document.addEventListener()

