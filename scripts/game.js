var words = [
    'APPLE', 'BABY', 'CARTOON', 'DONKEY', 'EDGE', 'FOOTBALL',
    'GOALKEEPER', 'HAPPY', 'IGNITE', 'JAR', 'KINGDOM', 'LAMP',
    'MAP', 'NET', 'OX', 'PARKING', 'QUEST', 'RAMP', 'STATION',
    'TARGET', 'USER', 'VIRTUAL', 'WINDOWS', 'XRAY', 'YOUTUBE', 'ZODIAC'
];

var answerSection = document.getElementById('answer-section');
var key = document.querySelectorAll('.letter');

var winAudio = new Audio('assets/audio/win-sound-effect.mp3');
var loseAudio = new Audio('assets/audio/game-over.mp3');
var clickAudio = new Audio('assets/audio/click-sound-effect.mp3');

key.forEach((pressedKey) => {
    pressedKey.addEventListener('click', (event) =>{
        clickAudio.play();
        var pressedLetter = event.target.textContent;
        letterChecker(pressedLetter);
    })
});

function generateRandNum()
{
    var min = 0;
    var max = words.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randNum = generateRandNum();

var randomWord = words[randNum];
var length = randomWord.length;

function addDashes(randNum)
{
    var dashes = []; 
    for (var x = 0; x < randomWord.length; x++)        
        dashes.push('_ ');

    return dashes;
};

var arrayDashes = addDashes(length);
answerSection.textContent = arrayDashes.join('');

var keyCounter =0;
function letterChecker (letterClicked)
{
    for(var x = 0; x < randomWord.length; x++){
        if(letterClicked == randomWord[x]){
            arrayDashes[x] = letterClicked;
            answerSection.textContent = arrayDashes.join('');
        }
    }

    if((randomWord.indexOf(letterClicked)) == -1)
    {
        keyCounter++;
        addBodyPart();
    }

    if (arrayDashes.join('').toString() == randomWord)
    {
        clickAudio.pause();
        var lettersDiv = document.getElementsByClassName('letters')[0];
        lettersDiv.style.pointerEvents = 'none'; 
        winAudio.play();
        answerSection.textContent = 'YOU WIN!';
        setTimeout(() =>{
            location.reload();
        }, 2000);
    }
    else if(arrayDashes.join('').toString() != randomWord && keyCounter >= 6)
    {
        clickAudio.pause();
        var lettersDiv = document.getElementsByClassName('letters')[0];
        lettersDiv.style.pointerEvents = 'none';
        loseAudio.play();   
        answerSection.textContent = 'GAME OVER!';
        setTimeout(() =>{
            location.reload();
        }, 2100);
    }
};