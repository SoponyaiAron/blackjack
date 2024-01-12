
var card, jatekfolyamatban;

init();

function gomb() {
  
  if (jatekfolyamatban)
  {
    card = Math.floor(Math.random() * 10) + 2;

    if (card == 10)
    {
      secondary = Math.floor(Math.random() * 16) + 1;
    }
    else
    {
      secondary = Math.floor(Math.random() * 4) + 1;
    }
    var carddom2 = document.querySelector('.card2');
    carddom2.style.display = 'block';
    carddom2.src = 'img/cards/' + card + '-' + secondary +'.card.png';
    pscr += card;
    document.querySelector('#current-1').textContent = pscr; 
    if (pscr >= 21 && card == 11)
    {
      pscr -= 10;
    }
    if (pscr >= 22)
    {
      document.querySelector('#name-1').textContent = 'Vesztes!';
      document.querySelector('.player-1-panel').classList.add("ender");
      jatekfolyamatban = false;
    }
  }
}

document.querySelector('.btn-roll').addEventListener('click', gomb);

function tart()
{
  if (jatekfolyamatban)
  {
    while (house <= pscr)
    {
      card = Math.floor(Math.random() * 10) + 2;

      if (card == 10)
      {
        secondary = Math.floor(Math.random() * 16) + 1;
      }
      else
      {
        secondary = Math.floor(Math.random() * 4) + 1;
      }
      var carddom = document.querySelector('.card');
      carddom.style.display = 'block';
      carddom.src = 'img/cards/' + card + '-' + secondary +'.card.png';
      house += card;
      document.querySelector('#current-0').textContent = house;
    }
    if (pscr == 21 || house <= pscr || house >= 21)
    {
      document.querySelector('#name-1').textContent = 'Győztes!';
      document.querySelector('.player-1-panel').classList.add("win");
      jatekfolyamatban = false;
    }
    else
    {
      document.querySelector('#name-1').textContent = 'Vesztes!';
      document.querySelector('.player-1-panel').classList.add("ender");
      jatekfolyamatban = false;
    } 
  }
}

document.querySelector('.btn-hold').addEventListener('click', tart); 

function init() 
{
  dealerstart = Math.floor(Math.random() * 10) + 2;
  jatekfolyamatban = true;
  var carddom = document.querySelector('.card');
    carddom.style.display = 'block';
    carddom.src = 'img/cards/' + dealerstart + '-1.card.png';
  pscr = 0;
  house = dealerstart;
  document.getElementById('current-0').textContent = dealerstart;
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Díler';
  document.querySelector('#name-1').textContent = 'Játékos';
  document.querySelector('.player-1-panel').classList.remove('win');
  document.querySelector('.player-1-panel').classList.remove('ender');
}

document.querySelector('.btn-new').addEventListener('click', init);

