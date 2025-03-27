var value = document.getElementById('num')
var maisButton = document.getElementById('mais')
var menosButton = document.getElementById('menos')

let count = 0;
let intervalId = 0;

const Novonum = () => {
    value.innerHTML = count;
};

maisButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        Novonum();
    }, 150);
});

maisButton.addEventListener('click' , () => {
    count += 1;
    Novonum();
});



menosButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
    if (count <0){
        count = 0;
    }
    Novonum();
}, 150);
});

menosButton.addEventListener('click' , () => {
   count -= 1;
   if (count <0){
    count = 0;
   };
   Novonum();
});
  


document.addEventListener('mouseup' , () => {
    clearInterval(intervalId);
});


