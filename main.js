let x = 25;
let sec = 0; 
let defWork = 25;
let defBreak = 5;
let zero = ("0" + sec).slice(-2);

let ifWork = 0;
let ifBreak = 0;

let T = undefined;
zman = document.getElementById('zman');
zman.innerHTML = defWork + ':' + zero;

session = document.getElementById('session');


let sessionTime = document.getElementById('timework');
let breakTime = document.getElementById('timebreak');

sessionTime.textContent = defWork;
breakTime.textContent = defBreak;

// let operator = document.getElementsByClassName('operator');
// console.log(operator);
operator = Array.from(document.getElementsByClassName('operator'));


operator.forEach(element =>  element.addEventListener('click',changeSession));


play = document.getElementById('play');
play.addEventListener('click', setTimer);

pause = document.getElementById('pause');
pause.addEventListener('click', setPause);


stop = document.getElementById('stop');
stop.addEventListener('click', setStop);


restart = document.getElementById('restart');
restart.addEventListener('click', setRestart);



function setRestart(e) {
    clearInterval(T);
    ifWork = 0;
    ifBreak = 0;
    zman.innerHTML = defWork + ':' + zero;
    sessionTime.textContent = defWork;
    breakTime.textContent = defBreak;
    document.getElementById('main-timer').style.backgroundColor = '#F8F8FF';
    session.innerHTML = 'Session';
    session.style.color = 'black';

}

function setStop(e) {
    clearInterval(T);
    ifWork = 0;
    ifBreak = 0;
    zman.innerHTML = sessionTime.textContent + ':' + zero;
    document.getElementById('main-timer').style.backgroundColor = '#F8F8FF';
    session.innerHTML = 'Session';
    session.style.color = 'black';

}


function setPause(e) {

    clearInterval(T);

}





function setTimer(e) {
let wholeTime = sessionTime.textContent * 60;
// let wholeTime = 60;
// zman.innerHTML = sessionTime.textContent + ':' + 0;
// document.getElementById('work').style.visibility = 'hidden';
// document.getElementById('title').style.visibility = 'hidden';
// document.getElementById('work').style.visibility = 'hidden';
// document.getElementById('break').style.visibility = 'hidden';
document.getElementById('main-timer').style.backgroundColor = '#DCDCDC';
// document.getElementById('main-timer').style.width= '600px';


if (ifBreak == 1) {
    session.innerHTML = 'Break';
    session.style.color = "#DAA520";
}
else {
    ifWork = 1;
    session.innerHTML = 'Work';
    session.style.color = "#008B8B";
}

T = setInterval(myTimer, 1000);

}


function myTimer() {
    // wholeTime--;
    sec  = zman.innerHTML.split(':');
    if (sec[0]==0 && sec[1]==0)
    {
        if (ifWork == 1)
        {   
            session.innerHTML = 'Break  ';
            session.style.color = "#DAA520";
            ifWork = 0;
            ifBreak = 1;
            zman.innerHTML = ("0" + breakTime.textContent).slice(-2) + ':' + zero;
        }
        else if (ifBreak == 1)
        {   
            session.innerHTML = 'Work';
            session.style.color = "#008B8B";
            ifWork = 1;
            ifBreak = 0;
            zman.innerHTML = ("0" + sessionTime.textContent).slice(-2) + ':' + zero;
        }
    }
    sec  = zman.innerHTML.split(':');
    if (sec[1] == 0) {
        sec[1] = 60
        sec[0]--;
    }
    sec[1]--;
    if (sec[0] == 0 && sec[1] >= 30)
    {
        // zman.style.color = "yellow";
        // zman.style.fontSize = '40px';
    }
    else if (sec[0] == 0 && sec[1]<30 && sec[1]>=10) {
        zman.style.color = "green";
        // zman.style.fontSize = '50px';


    }
    else if (sec[0] == 0 && sec[1] < 10) {
        zman.style.color = "red";
        // zman.style.fontSize = '60px';

    }
    else 
    zman.style.color = "black";

    zerosec = ("0" + sec[1]).slice(-2);
    zeromin = ("0" + sec[0]).slice(-2);
    zman.innerHTML = zeromin + ':' + zerosec;
    // log.console('nu????')
}




function changeSession(e) {
    console.log(e);
    console.log(e.target.classList[1]);
    console.log(e.target.id);
    if (ifWork == 0 && ifBreak == 0) {
    if (e.target.id == 'wrk') {
        if (e.target.classList[1] == 'fa-plus') {
            sessionTime.textContent++;

        }
        if (e.target.classList[1] == 'fa-minus') {
            if (sessionTime.textContent > 1) {
            sessionTime.textContent--;
                
        }

        }
        zeromin = ("0" + sessionTime.textContent).slice(-2);
        zman.innerHTML =  zeromin + ':' + zero;


    }
    if (e.target.id == 'br') {
        if (e.target.classList[1] == 'fa-plus') {
            breakTime.textContent++;

        }
        if (e.target.classList[1] == 'fa-minus') {
            if (breakTime.textContent > 1) {
                breakTime.textContent--;
        }

    }

    // sessionTime.textContent++;
}
}
}