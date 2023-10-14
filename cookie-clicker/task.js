const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clickCount = 0;
let isCookieGrowing = true;

function handleClick(){
    clickCount++;
    clickerCounter.textContent = clickCount;

    if(isCookieGrowing) {
        cookie.width += 10;
        cookie.height += 10;
    }else {
        cookie.width -= 10;
        cookie.height -= 10;
    }

    isCookieGrowing = !isCookieGrowing;

}

cookie.addEventListener('click', handleClick)