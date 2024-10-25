var words = [
    'APPLE', 'BABY', 'CARTOON', 'DONKEY', 'EDGE', 'FOOTBALL',
    'GOALKEEPER', 'HAPPY', 'IGNITE', 'JAR', 'KINGDOM', 'LAMP',
    'MAP', 'NET', 'OX', 'PARKING', 'QUEST', 'RAMP', 'STATION',
    'TARGET', 'USER', 'VIRTUAL', 'WINDOWS', 'XRAY', 'YOUTUBE', 'ZODIAC'
];

function generateRandNum(){
    var min = 0;
    var max = words.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randNum = generateRandNum();

console.log(randNum);

var randomWord = words[randNum];

console.log(randomWord);

var answerSection = document.getElementById('answer-section');

var length = randomWord.length;
console.log(length);

function addDashes(randNum)
{
    var dashes = []; 
    for (var x = 0; x < randomWord.length; x++)
    {           
        console.log('im here');
        dashes.push('_ ');
    }

    return dashes;
};

var arrayDashes = addDashes(length);

console.log(arrayDashes);

answerSection.textContent = arrayDashes.join('');

var key = document.querySelectorAll('.letter');

key.forEach((pressedKey) => {
    pressedKey.addEventListener('click', (event) =>{
        console.log(`${event.target.textContent} clicked!`);
        var pressedLetter = event.target.textContent;
        letterChecker(pressedLetter);
    })
});

function letterChecker (letterClicked){
    for(var x = 0; x < randomWord.length; x++)
        {
            if(letterClicked == randomWord[x]){
                arrayDashes[x] = letterClicked;
                answerSection.textContent = arrayDashes.join('');
            }
        }
};