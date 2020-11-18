let changeColour = document.getElementById('change_color');
changeColour.addEventListener('click', function () {
    let text = document.getElementsByTagName('p')[0].classList.add('changeColour');
});

let changeTitle = document.getElementById('change_title');
changeTitle.addEventListener('click', function () {
    let title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Victoria Gorovaja';
});

let count = document.getElementById('words_counter');
count.addEventListener('click', function () {
    let t = document.getElementsByTagName('p')[0].innerText;
    let spl = t.split(' ');
    let counter = document.getElementsByClassName('counter')[0];
    counter.innerText += spl.length;
});

let textAlert = document.getElementById('get_text');
textAlert.addEventListener('click', function () {
    let text = document.getElementsByClassName('second')[0].innerText;
    alert(text);
    document.getElementsByClassName('second')[0].innerHTML = '';
});


