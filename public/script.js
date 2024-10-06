document.addEventListener('DOMContentLoaded', (e) => {
    
    button = document.getElementById('genBtn');
    button.addEventListener('click', (e) => {
        genNewKey();
        //getJSONBet();
    });

});

/*
function addText() {
    listofnumbers = document.getElementById('olMain');
    listofnumbers.innerHTML = '';

    newli = document.createElement('li');
    newli.innerText = '99';

    listofnumbers.appendChild(newli);
}*/

/*
function getRandomNumbers(n, min, max) {

    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }

    return [...setOfNumbers].sort((a,b) => a - b);

}


function getJSONBet() {

    let numbers = getRandomNumbers(5,1,50);
    let stars = getRandomNumbers(2,1,12);

    let newBet = {
        timestamp: Date.now(),
        numbers: numbers,
        stars: stars
    }

    return JSONBet = JSON.stringify(newBet);


}*/

async function genNewKey() {

 /* let JSONBet = getJSONBet();
  let bet = JSON.parse(JSONBet);    // de string para objeto*/

  // fazer a requisição à API criada (colocar async na funcao para fazer a req. de forma assincrona)

    const response = await fetch('/api/key');   // recebe a resposta da API em forma de string (JSON)
    const key = await response.json();  // converte o JSON novamente em Objeto Javascript
                                        // (basicamente faz o que o parse faz)
  
    console.log(key);
    console.log('-----------------')

   theOLNumbers = document.getElementById('olMain');
   theOLNumbers.innerHTML = '';

   key.numbers.forEach(number => {
        newLi = document.createElement('li');
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
   });

   theOLStars = document.getElementById('olStars');
   theOLStars.innerHTML = '';

   key.stars.forEach(star => {
        newLi = document.createElement('li');
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
   });


}