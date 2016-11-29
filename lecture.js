var output = z
for (var output=1; output <= 100; output++) {
  if { multiple of 3
  console.log "fizz"
  }
  else if { multiple of 5
  console.log "buzz"
  }
  else if { multiple of 3 and 5
  console.log "fizzbuzz"
  }
  else {
  console.log z
  }
}


//

var places = ["Orange Ave", "Park Ave", "Sand Lake Road",]

var streets = []

for(var i =o; i<places.length; i++) {
  if (places[i].includes{"Ave") || places[i].includes("Road")){
    streets.push(places[i])
  }
}

function isStreet (name) {
  return (name.includes("Ave") || name.includes ("Road"))
}

for(var i =o; i<places.length; i++) {
  if (isStreet(places[i])) {
  streets.push(places[i])
  }
}

or:

streets = places.filter(isStreet)


var numbers = [1,2,3,4,5,6,7,8]


function isEven (n) {
  return (n % 2 === 0)
}

var evens = numbers.filter(isEven)


function isGreater (n) {
  return (n > 3)
}

var greater = numbers.filter(isGreater)


var fourtTimesTables = []

for (var i=0; i <= numbers.length; i++) {
  fourtTimesTables.push(numbers[i] *4)
}

function multiplyByFour (n){
  return n * 4
}

var fourtTimesTables = numbers.map(multiplyByFour)



//


function blitz (n) {
  return n + " Mississippi"
}

var blitzCount = numbers.map(blitz)





//


events.map(function(event){return event.Title})

events.map(event => event.Title)

function eventTitle (event) {
  if (event.Title.includes("MAGIC")){
    return true
  }
}

events.filter(eventTitle)

events.filter(eventTitle).map(function (object) {return object.Title})

or:
events.filter(eventTitle).map(object => object.Title)

or:

events.filter(event => event.Title.includes("MAGIC")).map(object => object.Title)




events.filter(event => event.Title.includes("WIZARDS")).map(object => object.StartDateTime)



[1,2,3,4].forEach(function(n) {console.log("Here is ", n, " without a for loop.")})
