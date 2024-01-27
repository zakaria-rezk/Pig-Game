'use strict';
//starting condition const init =funca 
const image =document.querySelector('.dice');
const palyerzero =document.querySelector('.player--0');
const palyerone =document.querySelector('.player--1');
const scorezero =document.querySelector('#score--0');
const scoreone =document.querySelector('#score--1');
const diceel=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnhold=document.querySelector('.btn--hold');
const btnroll=document.querySelector('.btn--roll')
let scores=[0,0];
let activepalyer =0;
let currentscore=0;
scoreone.textContent=0;
scorezero.textContent=0;
diceel.classList.add('hidden');

const init=function(){
    activepalyer =0;
    currentscore=0;
    scoreone.textContent=0;
    scorezero.textContent=0;
    diceel.classList.add('hidden'); 
}
// swith palyer
const switchPlayer =function(){
     document.getElementById(`current--${activepalyer}`).textContent=0;
    currentscore=0;
    activepalyer = activepalyer === 0 ? 1:0;
  palyerzero.classList.toggle('player--active');
  palyerone.classList.toggle('player--active');
   
    }

btnroll.addEventListener('click', function(){
    //geneate a random number
const rollnum =Math.trunc(Math.random()*6)+1;
//display the dice 
diceel.classList.remove('hidden');
image.src= `dice-${rollnum}.png`;

//add dice to current score
if (rollnum!==1) {
 //add rollnum to current score
currentscore += rollnum;
 document.getElementById(`current--${activepalyer}`).textContent=currentscore;
    //  scores[activepalyer] += rollnum;
     console.log(`palyer ${activepalyer} score  is ${currentscore}`);   
}

else {
    
    switchPlayer();

}
})
//
btnhold.addEventListener('click',function(){
    
    scores[activepalyer] += currentscore;
    document.getElementById(`score--${activepalyer}`).textContent= scores[activepalyer];
    switchPlayer();
})
//new game ;;;
btnnew.addEventListener('click',init)
