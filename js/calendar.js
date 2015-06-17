function Calendar(){
	var server = this.server = new Server(this);
		data = this.data = new Data(this),
		shownYM = this.shownYM = new YearMonth();
		

	this.el = $("#calendar");

	this.init = function(){
		data.getMonthData(shownYM).done(function(data){
			console.log(data)
		});
	}
}