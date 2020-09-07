const NAME = document.getElementById('name');
const PRICE = document.getElementById('price');
const IMAGE = document.getElementById('image');

const NAMI = document.getElementById('nami');
NAMI.onclick = () => {
    NAME.textContent = 'のり弁当';
    PRICE.textContent = '320円';
    IMAGE.setAttribute('src', './image/nori.png');
}
const JOU = document.getElementById('jou');
JOU.onclick = () => {
    NAME.textContent = '上のり弁当';
    PRICE.textContent = '400円';
    IMAGE.setAttribute('src', './image/jounori.png');
}

const CART_BUTTON = document.getElementById('cartbutton');
const CART_LIST = document.getElementById('cartlist');
const CANCEL_BUTTON = document.getElementById('cancel');

CART_BUTTON.onclick = () => {
    const LI = `<li>${NAME.textContent}</li>`;
    CART_LIST.insertAdjacentHTML('beforeend', LI);

}
CANCEL_BUTTON.onclick = () => {
        CART_LIST.removeChild(CART_LIST.lastChild);

}
