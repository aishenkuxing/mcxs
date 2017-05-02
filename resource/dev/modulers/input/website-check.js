var websiteFormAttribute = {
	header : 'website-form',
	minLength : 0,
	maxLength : 9999999,
	isnull : true
}

window.websiteFormValidate = function(){
	var flag = true;
	$('.website-form-check').each(function(i , v){
		var taget = $(this);
		var empty = taget.data('empty')
		if(!!empty&&taget.val()===''){
			mui.toast(empty);
			flag=false;
			return false;
		}	
	});
	return flag;
}
