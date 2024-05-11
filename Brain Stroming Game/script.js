const cardsArray = [
    {
        'name': 'lion',
        'img': 'https://media.istockphoto.com/id/1365329728/photo/african-male-lion-wildlife-animal-black-and-white-but-with-colored-eyes.webp?b=1&s=170667a&w=0&k=20&c=htVsEvFs7iDLj5k3SWwfe9Su3QxorNxcYKHvgENPdF8='
    }
    ,
    {
        'name': 'tiger',
        'img': 'https://media.istockphoto.com/id/1151170153/photo/portrait-of-a-siberian-tiger.webp?b=1&s=170667a&w=0&k=20&c=VQJInin85bsjTCBKwR7hKGX-aSBPqlRIowOrK0gS5zM='
    },
    {
        'name': 'elephant',
        'img': 'https://images.unsplash.com/photo-1517486430290-35657bdcef51?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlcGhhbnQlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D'
    }, {
        'name': 'bird',
        'img': 'https://media.istockphoto.com/id/505625400/photo/toucan-on-the-branch.webp?b=1&s=170667a&w=0&k=20&c=xkza6GPx2UkLHT-FMaplnK5OEV7ZoKNpEriUIEMaxUk='
    }, {
        'name': 'dog',
        'img': 'https://media.istockphoto.com/id/1293292142/photo/portrait-of-a-labrador-retriever-dog-on-an-isolated-black-background.webp?b=1&s=170667a&w=0&k=20&c=aXnL1lTgjgrcg600mTFfHHCCZNRAWWVMVCtOCiaiIKo='
    }, {
        'name': 'cat',
        'img': 'https://media.istockphoto.com/id/820785324/photo/stunning-black-kitten-the-amanda-collection.webp?b=1&s=170667a&w=0&k=20&c=Z5GXtVd_rrP82j_rTrmddFkfN5lRWqZgafE0wrB9Psc='
    }
]

const parentDiv = document.querySelector('#card_section');
const gamecard = cardsArray.concat(cardsArray);
let shuffledChild = Array.from(gamecard).sort(() => 0.5 - Math.random());


for (let i = 0; i < shuffledChild.length; i++) {

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const frontDIv = document.createElement('div');
    frontDIv.classList.add('front_card');

    const backDiv = document.createElement('div');
    backDiv.classList.add('back_card');
    backDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    parentDiv.appendChild(childDiv);
    childDiv.appendChild(frontDIv);
    childDiv.appendChild(backDiv);


}
let clickcount = 0;
let firstCard = "";
let SecondCard = "";

const card_matches = () => {
    let cardSelected = document.querySelectorAll(".card_selected");

    cardSelected.forEach((ele) => {
        ele.classList.add('card_match');
    })
}
const resetGame = () => {
    firstCard = "";
    SecondCard = "";
    clickcount = 0;
    let cardSelected = document.querySelectorAll(".card_selected");

    cardSelected.forEach((ele) => {
        ele.classList.remove('card_selected');

    })
}

parentDiv.addEventListener('click', (evt) => {
    let curCard = evt.target;
    if (curCard.id === "card_section") {
        return false;

    }
    clickcount++;

    if (clickcount < 3) {

        if (clickcount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');

        }
        else {
            SecondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');

        }

        if (firstCard !== "" && SecondCard !== "") {
            if (firstCard === SecondCard) {
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)
            }
            else {
                setTimeout(() => {

                    resetGame()
                }, 1000)
            }
        }

    }


})

