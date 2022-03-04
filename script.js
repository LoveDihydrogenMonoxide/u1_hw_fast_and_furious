let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  document.querySelector("#main-title").innerHTML = "I'm Dom Toretto. <br/> Welcome Family.";

  document.querySelector("body").style.backgroundImage = "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
  document.querySelector("body").style.backgroundRepeat = 'no-repeat';
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundAttachment = "fixed";

  document.querySelector("#favorite-things > li:nth-child(6)").remove(6);

  document.getElementById("quote-title").getElementbyClass("special-title").style.fontSize = "2-rem";

  document.querySelector("#past-races").firstChild.removeChild(4);

  document.querySelector("#past-races").createElement('li').appendChild("li:nth-child(6)").innerHTML = "Nürburg";


}

