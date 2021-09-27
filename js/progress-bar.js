
/*Progress bar*/
const container = document.querySelector('body');
const highlight = document.getElementById('highlight');
var containerHeight;



window.onscroll = function (){
  containerHeight = container.offsetHeight - window.innerHeight;

  containerPos = container.getBoundingClientRect();

  diff = containerHeight + containerPos.top;

  progressPercentage = diff / containerHeight * 100;
  
  cssWidth = Math.floor(100 - progressPercentage)

  highlight.style.width = cssWidth + "%";
};
/*Progress bar*/