function YearMonth(y, m){
	if(y && m){
		this.y = parseInt(y);
		this.m = parseInt(m);
	} else {
		var d = new Date();
		this.y = d.getFullYear();
		this.m = d.getMonth() + 1;
	}
}

YearMonth.prototype.nextMonth = function(){
	if(this.m == 12){
		this.m = 1;
		this.y++;
	} else {
		this.m++;
	}
}	

YearMonth.prototype.prevMonth = function(){
	if(this.m == 1){
		this.m = 12;
		this.y--;
	} else {
		this.m--;
	}
}

YearMonth.prototype.nextYear = function(){
	this.y++;
}

YearMonth.prototype.prevYear = function(){
	this.y--;
}
