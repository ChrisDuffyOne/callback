console.log('Progress Callback');

function progress(onStart, onProgress, onEnd) {
    var timer = 1;
    onStart(timer, onProgress, onEnd);
}

progress(
	function(timeUnit, onProgress, onEnd) {
		function onStart(){
			setTimeout(function(){
				timeUnit++;
				if(timeUnit === 100){
					onEnd(timeUnit);
				}else if(timeUnit % 10 === 0){
					onProgress(timeUnit);
					onStart();
				}else if(timeUnit <= 99){
					onStart();
				}
			}, 25)
		}
		onStart(); 	
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