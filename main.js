
// Answer 1
var averagePrice = items.map(cost => cost.price).reduce((a,b) => a+b)/items.length;
var price = "The average price is $"+ Math.round(averagePrice * 100)/100

// Answer 2
var value = items.filter (compare => compare.price > 14 && compare.price < 18).map(name => name.title)

// Answer 3
// var currency = items.filter(item => item.currency_code.includes("GBP")).map(name => name.title)
//
// var currency2 = items.filter(item => item.currency_code.includes("GBP")).map(cost => cost.price)
//
var currency = items.filter(item => item.currency_code.includes("GBP")).map(name => name.title + " costs £"+ name.price)

// Answer 4
// var wood = items.filter (find => find.tags.includes("wood").map(name => name.title)
var wood = items.filter(find => find.materials.includes("wood")).map(name => name.title + " is made of wood.")

// Answer 5
var materials = items.filter(find => find.materials.length > 8).map(name => name.title + name.materials)

// Answer 6
var sellers = items.filter(seek => seek.who_made.includes("i_did")).length + " were made by their sellers"




function makeUL(array) {
   var list = document.createElement('ul');

   for(var i = 0; i < array.length; i++) {
       var item = document.createElement('li');
       item.appendChild(document.createTextNode(array[i]));
       list.appendChild(item);
   }
   return list;
}

document.getElementById('Answer2').appendChild(makeUL(value));
document.getElementById('Answer4').appendChild(makeUL(wood));
document.getElementById('Answer5').appendChild(makeUL(materials));


var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(price);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("Answer1").appendChild(node);     // Append <li> to <ul> with id

var node3 = document.createElement("LI");
var textnode3 = document.createTextNode(currency);
node3.appendChild(textnode3);
document.getElementById("Answer3").appendChild(node3);

var node6 = document.createElement("LI");
var textnode6 = document.createTextNode(sellers);
node6.appendChild(textnode6);
document.getElementById("Answer6").appendChild(node6);
