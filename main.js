// code goes here :)

//first answer
var filteredArray = itemsArray.filter(function(item){
  return item.price;
});
var mapArray = filteredArray.map(function(item){
  return {price: item.price};
});
var sum= 0;
var endArray = mapArray.forEach(function(item, index){
   sum += item.price;
  }
);
var avg = mapArray.length;
var emptyHole = sum / avg;
document.getElementById("answer1").innerHTML = emptyHole;


//second answer
var emptyArray = [];
var anotherFilterArray = filteredArray.filter(function(item){
  return item.price >= 14 && item.price <= 18;
});
var lastArray = anotherFilterArray.forEach(function(item){
  emptyArray += "<p>" + item.title + "</p>";

})
document.getElementById("answer2").innerHTML = emptyArray;



//third answer
var emptyData= "";
var filteredData = itemsArray.filter(function(item) {
  return item.currency_code == "GBP";
});
var endData = filteredData.forEach(function(item){
  emptyData += "<p>" + item.title + ": " + "$" + item.price + "</p>";

})
document.getElementById("answer3").innerHTML = emptyData;



//fourth answer
var emptyDataOne= "";
var filteredDataOne = itemsArray.filter(function(item) {
  return item.materials.includes("wood");
});
var endDataOne = filteredDataOne.forEach(function(item){
  emptyDataOne += "<p>" + item.title + ":" +  " " + "$" + item.price + "</p>";

})
document.getElementById("answer4").innerHTML = emptyDataOne;




//fifth answer
var emptyHoleOne= "";
var filteredArrayOne = itemsArray.filter(function(item) {
  return item.materials.length > 7;
});
var endArrayOne = filteredArrayOne.forEach(function(item){
  emptyHoleOne += "<p>" + item.listing_id + ": " + item.materials.length + ": " + item.materials + ", " + "</p>";

})
document.getElementById("answer5").innerHTML = emptyHoleOne;





//sixth answer
var filteredDataTwo = itemsArray.filter(function(item) {
  return item.who_made == "someone_else";
});
var emptyTwo = filteredDataTwo.length;
document.getElementById("answer6").innerHTML = emptyTwo;
