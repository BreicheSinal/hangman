var bodyParts = [
    './assets/head.svg', './assets/body.svg', './assets/left-hand.svg', 
    './assets/right-hand.svg', './assets/left-leg.svg', './assets/right-leg.svg'
];

var bodyPartsClasses = ['head', 'body', 'left-hand', 'right-hand',
    'left-leg', 'right-leg'
];

var cnt = -1;

function addBodyPart(){
    cnt++;

    var hangDiv = document.getElementById('hang');
    var bodyPart = document.createElement("img");

    bodyPart.src = bodyParts[cnt];
    bodyPart.className = bodyPartsClasses[cnt];
    hangDiv.append(bodyPart);
};