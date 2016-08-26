(function(){
	
	/**
	 *
	 * Account Module Handler
	 *
	 */
	if(!frw.account) frw.account = {};
	frw.account = function(){

		var $popUp = $("#pop-up"), 
			$overlay = $("#overlay");

		//Init Function
		var init = function(){
			showPopUp();
		};

		//Display Pop Up Information
		var showPopUp = function(){
			fadeInTool($overlay, 1000, function(ready){
				if(ready){
					fadeInTool($popUp, "swing", function(){
						fillProgressControl();
					});
				}
			})
		};

		//Progress bar Handler
		var fillProgressControl = function(){
			var $msg   = $popUp.find(".msg"), 
				$barContent = $popUp.find(".bar-content"),
				$indicator = $popUp.find(".bar-indicator span"),
				targetValue = Number($barContent.data("current")),
				startValue  = 0;

			var interval = setInterval(function(){
				$barContent.find(".bar").css("width", startValue + "%");
				$indicator.html("$"+startValue).toggleClass("bold");

				if(startValue >= targetValue) {
					clearInterval(interval);

					//Show Callback Content//
					fadeInTool($msg, "swing");
					$indicator.addClass("bold");
				}

				startValue++;
			}, 16);
		};

		//Re-usable FadeIn $ Function
		var fadeInTool = function($elem, time, callback) {
			$elem.animate({"opacity": 1, "display":"block"}, time, function(){
				if(typeof callback == 'function') {
					callback(true);
				}
			});
		}

		//Return Only Init Function
		return {
			init : init
		};
	};

	//Execute Account Module
	frw.account().init();
})();
