// import {cats} from './cats.js'

let cards;
let card;
let card__photo;
let card__name;
let card__rate;
let modal = document.querySelector('#modalWindow');

function createRateElement(rate= 0){
    let rateImg = [];

    for(let i=0; i<11; i++){
        rateImg.push(document.createElement('img'));
        if(i < rate){
            rateImg[i].setAttribute("src","img\/cat-fill.svg");
        } else { rateImg[i].setAttribute("src", "img\/cat-stroke.svg"); }
    }
    return rateImg
}

for(let i=0; i<cats.length; i++){
    card = document.createElement('div');
    card.className = "card";
    card.id = cats[i]["id"];
    card.addEventListener('click', catInfo);

    card__photo = document.createElement('div');
    card__photo.className = "card__photo";
    card__photo.style = "background-image: url('" + cats[i]['img_link'] + "')";

    card__name = document.createElement('p');
    card__name.className = "card__name";
    card__name.innerText = cats[i]["name"]

    card__rate = document.createElement('div');
    card__rate.className = "card__rate";

    createRateElement(cats[i]["rate"]).forEach((v) => { card__rate.append(v) })

    card.append(card__photo, card__name, card__rate);
    cards = document.querySelector('.cards');
    cards.append(card);
}

function catInfo(ev){
    let cardId = ev.currentTarget.getAttribute('id');
    let cardInArr = cats.findIndex((el) => el["id"] === +cardId);
    let close = document.querySelector('.modal__content_close');

    close.addEventListener('click',() => {
        modal.style.display = 'none';
    })
    document.querySelector('.modal__content_cat')
        .setAttribute('src', cats[cardInArr]["img_link"]);
    document.querySelector('.modal__content h1')
        .innerText = cats[cardInArr]["name"];
    document.querySelector('.modal__content h2')
        .innerText = ageForm(cats[cardInArr]["age"]);
    document.querySelector('.modal__content p')
        .innerText = cats[cardInArr]["description"];

    modal.style.display = 'flex';
}

function ageForm(age){
    let num = +age.toString().match(/\d$/)[0];

    switch (num){
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return age + ' лет';
        case 1:
            return age + ' год';
        case 2:
        case 3:
        case 4:
            return age + ' года';
        default:
            return '0 лет';
    }
}
