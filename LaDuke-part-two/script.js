var eventType = prompt("What kind of event are you going to?", "i.e. casual, semi-formal, formal");
var tempFahr = prompt("What is the temperature?", "<Number in Fahrenheit> e.g. 70");
var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear "
console.log(result);

if (eventType=='casual'){
console.log("something comfy and ");
} else if (eventType=='semiformal'){
	console.log("a polo and ");
  } else if (eventType=='formal'){
	  console.log("a suit and ");
	}
 
if (tempFahr <54){
 console.log("a coat.");
} else if (tempFahr >70){
	console.log("no jacket.");
} 	else if (tempFahr >=54<=70){ 
	  console.log("a jacket.");
}