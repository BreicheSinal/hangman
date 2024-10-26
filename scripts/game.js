var words = [
    'APPLE', 'BABY', 'CARTOON', 'DONKEY', 'EDGE', 'FOOTBALL',
    'GOALKEEPER', 'HAPPY', 'IGNITE', 'JAR', 'KINGDOM', 'LAMP',
    'MAP', 'NET', 'OX', 'PARKING', 'QUEST', 'RAMP', 'STATION',
    'TARGET', 'USER', 'VIRTUAL', 'WINDOWS', 'XRAY', 'YOUTUBE', 'ZODIAC'
];

function generateRandNum(){
    var min = 0;
    var max = words.length - 1;
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

var counter = 0;
var keyCounter =0;

function letterChecker (letterClicked){
    for(var x = 0; x < randomWord.length; x++){
        if(letterClicked == randomWord[x]){
            arrayDashes[x] = letterClicked;
            answerSection.textContent = arrayDashes.join('');
            counter++;
        }
    }

        if((randomWord.indexOf(letterClicked)) == -1)
        {
            console.log('IM HERE!');
            keyCounter++;
            addBodyPart();
        }


        /*console.log(arrayDashes.join(''));*/
        console.log(keyCounter);

        if (arrayDashes.join('').toString() == randomWord)
        {
            answerSection.textContent = 'YOU WIN!';
            setTimeout(() =>{
                location.reload();
            }, 1000);
        }
        else if(arrayDashes.join('').toString() != randomWord && keyCounter >= 6){
            answerSection.textContent = 'GAME OVER!';
            setTimeout(() =>{
                location.reload();
            }, 1000);
        }; 
    
};