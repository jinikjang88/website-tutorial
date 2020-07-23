
let iceCream = 'chocolate'
if (iceCream === 'chocolate') {
    alert('Yay, I Love')
} else {
    alert('No!')
}

let myVariable = document.querySelector('h1')
alert('hello!')

function multiply(num1, num2) {
    let result = num1 + num2;
    return result;
}

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop Poking me!');
// }

document.querySelector('li').onclick = function() {
    alert('My Li!! ');
}

let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/test.jpeg') {
        myImage.setAttribute('src', 'images/test1.jpeg');
    } else {
        myImage.setAttribute('src', 'images/test.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.')
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Well Come My Home ' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Well Come My Home Too ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
