let changeColour = document.getElementById('change_color');
changeColour.addEventListener('click', function () {
    let text = document.getElementsByTagName('p')[0].classList.add('changeColour');
})

let changeTitle = document.getElementById('change_title');
changeTitle.addEventListener('click', function () {
    let title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Victoria Gorovaja';
})
