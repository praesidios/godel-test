const cards = document.querySelectorAll('.card');
const button = document.querySelector('.next-button');


button.addEventListener('click', function(){
  let visibleCard = document.querySelector('.show');
  let index = getRandomIndex();

  function getRandomIndex() {
    return Math.floor((Math.random() * 4));
  }

  for(let i = 0; i<=cards.length; i++){
    if(visibleCard){
      visibleCard.className = "card";
    }
    cards[index].className = "show";
  }
  
});

