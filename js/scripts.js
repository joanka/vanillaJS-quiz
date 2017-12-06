(function() {
    
let points = 0; 
const answerBtns = document.querySelectorAll('.question-box__answers'),
        answer = document.querySelectorAll('.question-box__answers .answer'),
        checkBtn = document.querySelector('.check-btn'),
        showAnswersBtn = document.querySelector('.answers-btn'),
        clearBtn = document.querySelector('.clear-btn'),
        rightAnswers = document.querySelectorAll('.answer_correct'),
        checkPoints = document.querySelector('.points');

for(let i=0; i<answerBtns.length; i++) {
    let answerBtnList = answerBtns[i].children;
    let answerBtn = Array.prototype.slice.call(answerBtnList);

    const handleClick = function(e) {                  
        answerBtn.forEach(function(el){
            el.classList.remove('selected');           
        });        
        e.currentTarget.classList.add('selected');        
    };

    answerBtn.forEach(function(el) {
    el.addEventListener('click', handleClick);
    });
}

const showRightAnswers = function() {
    answer.forEach(function(el){
        el.setAttribute('disabled', 'disabled');
        if(el.classList.contains('selected') && !el.classList.contains('answer_correct')) {
            el.classList.add('wrongAnswer');
        }
        if(el.classList.contains('answer_correct')) {
            el.classList.add('show-correct');
            if(el.classList.contains('selected')) {
                el.classList.add('rightAnswer'); 
            }       
            return el;           
        }     
    });    
};

showAnswersBtn.addEventListener('click', showRightAnswers);

const countPoints = function() {         
    answer.forEach(function(el) {
        if(el.classList.contains('selected') && el.classList.contains('answer_correct')) {
            points += 1;
        } 
    });    
};

const addPoints = function() {
    countPoints();
    checkPoints.classList.remove('hide');
    checkPoints.classList.add('show');
    document.querySelector('.points span').innerHTML = points;
    answer.forEach(function(el){
        el.setAttribute('disabled', 'disabled');
    });   
};

checkBtn.addEventListener('click', addPoints);

const clear = function() {
    points = 0;
    answer.forEach(function(el){
        el.removeAttribute('disabled');
        el.classList.remove('selected', 'show-correct', 'rightAnswer', 'wrongAnswer');      
    });
    checkPoints.classList.remove('show');
    checkPoints.classList.add('hide');

};

clearBtn.addEventListener('click', clear);

})();








