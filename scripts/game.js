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

//console.log(randNum);

var randomWord = words[randNum];

console.log(randomWord);

var answerSection = document.getElementById('answer-section');

var length = randomWord.length;
//console.log(length);

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

//console.log(arrayDashes);

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

    /*console.log(arrayDashes.join(''));
    console.log(keyCounter);*/

    if (arrayDashes.join('').toString() == randomWord)
    {
        var lettersDiv = document.getElementsByClassName('letters')[0];
        lettersDiv.style.pointerEvents = 'none'; 
        var winAudio = new Audio('assets/audio/win-sound-effect.mp3');
        winAudio.play();
        answerSection.textContent = 'YOU WIN!';
        setTimeout(() =>{
            location.reload();
        }, 2000);
    }
    else if(arrayDashes.join('').toString() != randomWord && keyCounter >= 6){
        var lettersDiv = document.getElementsByClassName('letters')[0];
        lettersDiv.style.pointerEvents = 'none';
        var loseAudio = new Audio('assets/audio/game-over.mp3');
        loseAudio.play();   
        answerSection.textContent = 'GAME OVER!';
        setTimeout(() =>{
            location.reload();
        }, 2100);
    }; 
};