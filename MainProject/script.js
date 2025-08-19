
// pop up

document.querySelector('main>section>button').addEventListener('click', function () {
    document.getElementsByClassName('_alert')[0].style.height = 0
    document.getElementsByClassName('_alert')[0].style.width = 0
})

// alert('this is a dice game, winner must reach 30 points')

// making random number 

let _dice1 = document.getElementsByClassName('dice')[0]
let _dice2 = document.getElementsByClassName('dice')[1]

_dice1.addEventListener('click', function () {

    let _score = document.getElementsByClassName('score')[0]

    let _ps = parseInt(_score.innerHTML)

    let _dicenumber1 = parseInt(((Math.random()) * 6) + 1)

    _dice1.innerHTML = _dicenumber1

    _ps += _dicenumber1

    _score.innerHTML = _ps

    if (_ps > 30) {
        _dice1.innerHTML = 'W i n'
    }

    _dice1.style.background = 'white'

    if (_dicenumber1 == 6) {
        _dice1.style.background = 'green'
        // alert('you can try one more time')
    }
})

_dice2.addEventListener('click', function () {

    let _score1 = document.getElementsByClassName('score')[1]

    let _ps1 = parseInt(_score1.innerHTML)

    let _dicenumber2 = parseInt(((Math.random()) * 6) + 1)

    _dice2.innerHTML = _dicenumber2

    _ps1 += _dicenumber2

    _score1.innerHTML = _ps1

    if (_ps1 > 30) {
        _dice2.innerHTML = 'W i n'
    }

    _dice2.style.background = 'white'

    if (_dicenumber2 == 6) {
        _dice2.style.background = 'green'
        // alert('you can try one more time')
    }
})







// adding scores 