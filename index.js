const cards = document.querySelectorAll('.card');
const button = document.querySelector('.next');
const resultCard = document.querySelector('.resultCard');
const radio = document.querySelectorAll('.radio');
const unique = [];
let trueAnswer = 0;


while(unique.length < cards.length){
  let random = Math.floor((Math.random() * cards.length));
  if(unique.indexOf(random) === -1) unique.push(random);
}


button.addEventListener('click', function(){
  let visibleCard = document.querySelector('.show');
  let buttonText = document.querySelector('.next span');
  let index = unique.pop();

  buttonText.textContent = "Следующий вопрос";
  button.style.display = "none";
  button.style.padding = "10px";

  if(cards[index] === undefined){
    resultCardDesc(visibleCard);
  }

  else if(visibleCard){
    visibleCard.className = "card";
  }
  cards[index].className = "show";   
});


radio.forEach(function(checkedRadio){
  checkedRadio.addEventListener('click', function(){
    button.style.display = "block";
    if(event.target.className === "radio true"){
      trueAnswer++;
    }
  })
})

function resultCardDesc(visibleCard){
  visibleCard.style.display = "none";
  resultCard.style.display = "block";
  button.style.display="none";

  let resultWrap = document.createElement('h2');
  resultCard.appendChild(resultWrap);
  resultWrap.textContent = `${trueAnswer} / ${cards.length}`; 
  resultWrap.style.textAlign = "center";
  
}
