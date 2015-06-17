function Calendar(){
	var data = new Data(this),
		shownYM = new YearMonth();

	this.el = $("#calendar");
	this.config = {
		dataUrl = '/data'
	}


	this.data = data;
	this.shownYM = shownYM;

	this.init = function(){
		
	}
}