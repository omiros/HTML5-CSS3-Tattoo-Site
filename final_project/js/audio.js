$(document).ready(function(){
	alarmClock();
})


function alarmClock(){
		$('#clock').on('mouseover', function() {
			$('#alarmsound').get(0).play();
		});
}