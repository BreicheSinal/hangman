var words =['Apple', 'Baby', 'Cartoon', 'Donkey', 'Edge', 'Football',
    'Goalkeeper', 'Happy', 'Ignite', 'Jar', 'Kingdom', 'Lamp', 'Map', 'Net',
    'Ox', 'Parking', 'Quest', 'Ramp', 'Station', 'Target', 'User',
    'Virtual', 'Windows', 'Xray', 'Youtube', 'Zodiac' 
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