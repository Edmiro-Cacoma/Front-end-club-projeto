
let index = 0;
let bike = document.querySelectorAll('.bike');
let elementColor = document.querySelector('.image');
let bikeOne = "Bike : Hibrida <br> Fabricante: Unknown <br> Ano: Unknown";
let showDescription = document.getElementById('paragraphy');
showDescription.innerHTML = `${bikeOne}`;

function bikeInfo(index) {

    function bikesDescription() {
        let bikeTwo = "Bike : Speed <br> Fabricante: Unknown <br> Ano: Unknown";
        let bikeThree = "Bike : Time Trial <br> Fabricante: Unknown <br> Ano: Unknown";
        return { bikeTwo, bikeThree }
    }
    let {bikeTwo, bikeThree} = bikesDescription();
    

    function changeDescription() {
        if (index == 0) {
            showDescription.innerHTML = `${bikeOne}`;
        } else if (index == 1) {
            showDescription.innerHTML = `${bikeTwo}`;
        } else {
            showDescription.innerHTML = `${bikeThree}`;
        }
    }
    changeDescription();
    
}







function changeColor(index) {
    if (index == 0) {
        elementColor.style.setProperty("--primary-color", "#b4f2fb");
    } else if (index == 1) {
        elementColor.style.setProperty("--primary-color", "#90CBFA");
    } else {
        elementColor.style.setProperty("--primary-color", "#e5e5e5");
    }
}

function showPopup() {
    let popup = document.getElementById('popup');
    popup.classList.toggle('show');
}

function showOffPopup() {
    let popup = document.getElementById('popup');
    popup.classList.remove('show');
}



function next() {
    bike[index].classList.remove('active');
    index = (index + 1) % bike.length;
    bike[index].classList.add('active');
    changeColor(index);
    bikeInfo(index);
}

function previous() {
    bike[index].classList.remove('active');
    index = (index + 1) % bike.length;
    bike[index].classList.add('active');
    changeColor(index);
    bikeInfo(index);
}

