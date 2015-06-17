var Data = function (calendar) {
	var server = calendar.server;
	
	this.getMonthData = function(YM){
		return server.getMonthData(YM);
	};
}