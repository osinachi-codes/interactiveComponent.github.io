const submitBtn = document.querySelector('.card__submit-btn');
const cardContent1 = document.querySelector('.card__content--1');
const cardContent2 = document.querySelector('.card__content--2');
const ratingBtns = document.querySelectorAll('.card__rating-btn');
const score = document.querySelector('.score');
let starScore = 4; //default score


submitBtn.addEventListener('click', function(){
    cardContent1.classList.add('hide');
    cardContent2.classList.remove('hide');
    score.textContent = starScore;
});

ratingBtns.forEach(btn => {
    btn.addEventListener('click', ratingBtnsClick)
})

function ratingBtnsClick(e) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('card__active');
    })
    

    if (e.target.classList.contains('card__rating-btn')){
        e.target.classList.add('card__active');
    } else {
        e.target.parentElement.classList.add('card__active');
    }

    starScore = e.target.textContent;

    console.log(starScore);
}

