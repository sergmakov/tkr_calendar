function Server (calendar) {
	
	this.getMonthData = function(YM){
		var handlerUrl = '/getMonthData/';

		return $.post(handlerUrl,  JSON.stringify({y: YM.y, m: YM.m}));
		
	}
}