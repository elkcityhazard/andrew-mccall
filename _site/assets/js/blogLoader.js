let el = document.querySelectorAll('body > div > main > section > ul > li');

el.forEach(e => {
    e.classList.add('hide-me');
})

let array = [...el].reverse();

const loadItems = setInterval(function() {
    let number = array.pop();
    if (number === undefined) {
        return;
    }
    number.classList.remove('hide-me');

},50);


