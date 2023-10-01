const Input = document.querySelector('.input');
const body = document.querySelector('body');

Input.checked = JSON.parse(localStorage.getItem('mode'));
UpdateBody()
function UpdateBody() {
    if (Input.checked) {
        body.style.background = 'black'
    } else {
        body.style.background = 'white'
    }
}

Input.addEventListener('input', () => {
    UpdateBody()
    updateLocalstorage()
})

function updateLocalstorage() {
    localStorage.setItem('mode', JSON.stringify(Input.checked));

}