const playDice = ()=> {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const randomImageSource1 = `assets/images/dice${randomNumber1}.png` 
  const randomImageSource2 = `assets/images/dice${randomNumber2}.png` 
  const image1 = document.querySelector('.img1')
  image1.setAttribute('src', randomImageSource1)
  const image2 = document.querySelector('.img2')
  image2.setAttribute('src', randomImageSource2)


  if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🚩player 1 Wins!';
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'player 2 Wins!🚩';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }

}