console.log('Progress Callback');

function progress(onStart, onProgress, onEnd) {
    var timer = 1;
    onStart(timer, onProgress, onEnd);
}

progress(
	function(timeUnit, onProgress, onEnd) {
		function delayCounter(){
			setTimeout(function(){
				timeUnit++;
				if(timeUnit === 100){
					onEnd(timeUnit);
				}else if(timeUnit % 10 === 0){
					onProgress(timeUnit);
					delayCounter();
				}else if(timeUnit <= 99){
					delayCounter();
				}
			}, 25)
		}
		delayCounter();	
	},
	function(timeUnit){
		var tenth = timeUnit/10;
		for(var i=0; i < tenth; i++){
			process.stdout.write("=");
		};
		process.stdout.write("\n");
	},
	function(timeUnit){
		console.log('Complete', timeUnit);
		return;
	}
);