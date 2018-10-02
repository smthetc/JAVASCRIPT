var i=0;
var total=0;
do {

	total=total+i
	i=i+2
	console.log(i);
	//console.log(total);
}
while (i<50)

console.log(total);
console.log(i);




var bone = {
	broken1: true,
	temperament: "vor",
	ideology: "communist",
	gender: "mr",
	name: "sir"
}


var mas = new Array (true, "vor", "communist", "mr", "sir");


console.log("______________")

for(var t in bone){
	console.log(t);
}

for(var tmp in bone){
	console.log(bone[tmp]);
}
//----------------------------------------
for(var _t in mas){
	console.log(_t);
}

for(var _tmp in mas){
	console.log(mas[_tmp]);
}










