var lower = document.getElementById('lower');
var add = document.getElementById('add');
var theCount = document.getElementById('theCount');
var count = 0;

theCount.textContent = count;

function incrementCounter() {
  count += 1;
  if (count > 0) {
      theCount.style.color = 'green';
  } else if (count === 0) {
    theCount.style.color = 'blue';
  }

  theCount.textContent = count;
};

function decrementCounter() {
  count -= 1;
  if (count < 0) {
    theCount.style.color = 'red';
  } else if (count === 0){
    theCount.style.color = 'blue';
  }
  theCount.textContent = count;
};


add.addEventListener('click', incrementCounter);
lower.addEventListener('click', decrementCounter);
