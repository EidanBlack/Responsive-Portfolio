function changeLetter(){
  let letter = document.getElementById('letter');
  if(letter.innerHTML == 'o'){
    letter.innerHTML = "a";
  } else {
    letter.innerHTML = "o";
  }
}

setInterval('changeLetter()', 1000);