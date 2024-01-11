/*
Játék szabályok:

- A játék 2 szereplős és körökre osztott
- Minden egyes körben az adott játékos dob a kockával, ahányszor csak szeretne. A dobások eredménye hozzáadódik a játékos adott körben
  elért pontszámához, ami értelem szerűen minden körben nulláról indul.
- Ha az aktuális játékos 1-et dob, akkor az összes addigi pontja elveszik, és átadja a dobás jogát a következő játékosnak.
- A játékos választhatja a 'Megtartom' gombot is. Ebben az esetben az adott körben elért pontok száma, hozzáadódik a játékos összes
  pontszámához. Majd a dobás joga a másik játékosra száll.
- Az a játékos nyer, aki előbb eléri a 100 pontot.  

*/

var pontszamok, korpontszamok, aktivjatekos, card, jatekfolyamatban;

init();


//document.querySelector('#current-' + aktivjatekos).textContent = kocka; 
//document.querySelector('#current-' + aktivjatekos).innerHTML '<u>' + kocka + '</u>';    

function gomb() {
  
  if (jatekfolyamatban)
  {
    card = Math.floor(Math.random() * 6) + 1;

    var carddom = document.querySelector('.card');
    carddom.style.display = 'block';
    carddom.src = 'img/cards/' + card + '.card.png';

    if (card !== 1)
    {
      korpontszamok += card;
      document.querySelector('#current-' + aktivjatekos).textContent = korpontszamok; 
    }   
    else
    {
      kovetkezojatekos();
    }
  }
}

document.querySelector('.btn-roll').addEventListener('click', gomb);

function tart() {
  pontszamok[aktivjatekos] += korpontszamok;

  document.querySelector('#score-' + aktivjatekos).textContent = pontszamok[aktivjatekos];

  if (pontszamok[aktivjatekos >= 10])
  {
    document.querySelector('#name-  ' + aktivjatekos).textContent = 'Győztes!';
    document.querySelector('.player-' + aktivjatekos + '-panel').classList.add("winner!");
    document.querySelector('.player-' + aktivjatekos + '-panel').classList.remove('active');
    jatekfolyamatban = false;
  }
  else
  {
    kovetkezojatekos();   
  }
}

document.querySelector('.btn-hold').addEventListener('click', tart); 

function kovetkezojatekos() {

  aktivjatekos === 0 ? aktivjatekos = 1 : aktivjatekos = 0;
  korpontszamok =  0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.card').style.display = 'none'
}

function init() 
{
  jatekfolyamatban = true;
  pontszamok = [0,0];
  korpontszamok = 0;
  aktivjatekos = 0;
  document.querySelector('.card').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('#name-0').textContent = 'House';
  document.querySelector('#name-1').textContent = 'Player';
  document.querySelector('.player-0-panel').classList.remove("winner!");
  document.querySelector('.player-1-panel').classList.remove('winner!');
  document.querySelector('.player-0-panel').classList.remove("active");
  document.querySelector('.player-1-panel').classList.remove('active'); 
  document.querySelector('.player-0-panel').classList.add("active");
}

document.querySelector('.btn-new').addEventListener('click', init);

