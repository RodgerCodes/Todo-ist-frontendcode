const btn = document.getElementById('svg');
const bar = document.getElementById('side-menu');
const cancel = document.querySelector('.close');
const bol = false;
const text = document.querySelectorAll('.todos p');
const radiobtn = document.querySelectorAll('.radio');


btn.addEventListener('click', () => {
    bar.style.width = '180px';
})

cancel.addEventListener('click', () => {
    bar.style.width = '0'
})

// radiobtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         text.forEach(t => {
//             t.style.textDecoration ="line-through"
//         })
//     })
// })