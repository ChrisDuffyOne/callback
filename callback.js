//NAMED Function---------------------------------------
/*console.log('Before Calling setTimeout:',new Date());

var callbackFunction = function(){
	console.log('Inside Callback Function:', new Date());
};

var seconds = 3;
setTimeout(callbackFunction, seconds * 1000);

console.log('After Calling setTimeout:', new Date());*/

//ANON Function---------------------------------------
/*console.log('Before Calling setTimeout:',new Date());

var seconds = 3;
setTimeout(function(){
	console.log('Inside Callback Function:', new Date())
}, seconds * 1000);

console.log('After Calling setTimeout:', new Date());*/

//WAIT Function---------------------------------------
function wait(seconds, callback){
	setTimeout(function(){
		callback(new Date());
	}, seconds * 1000);
}

console.log('Before Calling Wait:',new Date());

wait(3, function(date){
	console.log('Anon Callback:', date);
});

console.log('After Calling Wait:', new Date());