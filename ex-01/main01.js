







function changeColor(event) {
    let button = event.target.parentElement;
    // let ourMain = document.getElementById('colorMain')
    // button = ourMain.id;
    console.log(button)
    if (button.style.backgroundColor === 'gray') {
        button.style.backgroundColor = 'yellow';
    } else {
        button.style.backgroundColor = 'gray';
    }
}
