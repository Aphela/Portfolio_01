window.onload = function() {
  window.setTimeout(fadein, 1000); //8 seconds
}

function fadein() {
  let elements = document.getElementsByClassName('home-title');
  for(let i = 0; i < elements.length; i+=1) {
    console.log(elements[i]);
    elements[i].style.opacity = '1';
  }

  console.log(elements)
}
