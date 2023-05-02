function getQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      $(".advice_number").html(data.slip.id);
      $(".quote").html('"'+data.slip.advice+'"');
    });
}
getQuote();
$(document).on("click", "#diceIcon", function () {
  getQuote();
});
