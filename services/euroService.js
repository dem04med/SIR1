exports.getKey = async () => {      //servico para gerar uma nova chave // em outros casos iria buscar os dados à BD
  
    let numbers = getRandomNumbers(5,1,50);
    let stars = getRandomNumbers(2,1,12);

    let key = {
        timestamp: Date.now(),
        numbers: numbers,
        stars: stars
    }

    return key; // retorna o objeto KEY

};

// poderia ficar numa pasta utils
function getRandomNumbers(n, min, max) {

    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }

    return [...setOfNumbers].sort((a,b) => a - b);
    
}

