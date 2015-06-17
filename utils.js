function getRealYearMonth(){
	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth() + 1;
	return new YearMonth(y, m);
}

function getSelectedYearMonth(){
	var url = new String(window.location);
	var GET = parseGET(url);
	if(GET && GET['y'] && GET['m']){
		return new YearMonth(GET['y'], GET['m']);
	}else{
		return getRealYearMonth();
	}
}

function YMtoStr(YM){
	return YM.y+"."+YM.m;
}


function parseGET(str){
	var GET = Array();
	var anchor = "";
	str = str.split('?');
	if(str[1]){
		str = str[1];
		if(str.indexOf('#')!=-1){
			anchor = str.substr(str.indexOf('#')+1);
			str = str.substr(0,str.indexOf('#'));
		}
		params = str.split('&');
		for (i=0; i<params.length; i++){
			var keyval = params[i].split('=');
			GET[keyval[0]]=keyval[1];
		}
		return (GET);
	}else{
		return false;
	}
};

function decodeMonth(monthNum, padej){
	padej = padej || false;
	var months = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	];
	var monthsR = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];
	if(padej == 'R'){
		return monthsR[(monthNum-1)%12];
	}else{
		return months[(monthNum-1)%12];
	}

}

function res(url){
	return '/calendar'+url;
}

function newDate(dateStr){
	var m = dateStr.match(/(.+)-(.+)-(.+) (.+):(.+):(.+)/);
	return new Date(m[1], m[2]-1, m[3], m[4], m[5], m[6]);
}