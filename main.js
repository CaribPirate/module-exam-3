'use strict';
//dice game gambling

//variables
let loot = document.getElementById('loot');
let funds = Number(document.getElementById('funds').innerHTML);

//event listeners
document.getElementById('play-btn').addEventListener('click', rollDice);
document.getElementById('purchase-btn').addEventListener('click', buyLoot);
document.getElementById('clear-btn').addEventListener('click', clearLoot);
document.getElementById('reset-btn').addEventListener('click', resetPage);


//event functions

function rollDice() {

  //variables
  let bet = Number(document.getElementById('bet-input').value);

  //loading sequence
  document.getElementById('house-die').src = 'images/rolling.png';
  document.getElementById('player-die').src = 'images/rolling.png';

  setTimeout(function () {
    //house die
    let randNum1 = Math.floor(6 * Math.random()) + 1;
    document.getElementById('house-die').src = 'images/' + randNum1 + '.png';

    //player die
    let randNum2 = Math.floor(6 * Math.random()) + 1;
    document.getElementById('player-die').src = 'images/' + randNum2 + '.png';


    //money loss/gain
    if (randNum1 > randNum2) {
      funds = funds - bet;
    } else if (randNum1 < randNum2) {
      funds = funds + bet;
    }

    //update funds
    fundsWarning();
    document.getElementById('funds').innerHTML = funds;

  }, 500);
}

function buyLoot() {
  //under 1k
  if (funds < 1000) {
    loot.innerHTML += '<img src="images/socks.png">';
    //between 1k and 5k
  } else if (funds <= 5000) {
    let randNum = Math.random();

    if (randNum <= 0.33333) {
      loot.innerHTML += '<img src="images/ring.png">';
    } else if (randNum <= 0.66666) {
      loot.innerHTML += '<img src="images/trip.jpg">';
    } else {
      loot.innerHTML += '<img src="images/bike.jpg">';
    }

    funds -= 1000;
    //more than 5k
  } else {
    let randNum = Math.random();

    if (randNum <= 0.25) {
      loot.innerHTML += '<img src="images/motorcycle.jpg">';
    } else if (randNum <= 0.5) {
      loot.innerHTML += '<img src="images/car.png">';
    } else if (randNum <= 0.75) {
      loot.innerHTML += '<img src="images/boat.png">';
    } else {
      loot.innerHTML += '<img src="images/house.png">';
    }

    funds -= 5000;
  }

  //update funds
  fundsWarning();
  document.getElementById('funds').innerHTML = funds;

}

function fundsWarning() {
  //show low funds as a warning
  if (funds <= 0) {
    document.getElementById('funds').style.color = 'red';
  } else if (funds <= 500) {
    document.getElementById('funds').style.color = 'orangered';
  } else if (funds <= 1000) {
    document.getElementById('funds').style.color = 'orange';
  }
}

function clearLoot() {
  loot.innerHTML = '';
}

function resetPage() {
  document.location.reload();;
}