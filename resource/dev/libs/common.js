if (typeof (jQuery) != 'undefined') {
    jQuery.support.cors = true;
    jQuery.ajaxSetup({
        async: false, 
        xhrFields: {withCredentials: true}
    });
}

window.CheckUpdateVersion = function(){
		$.ajax({
			type: "get",
			url: "http://192.168.0.106/api/mobile/getVersion",
			data:{
				appkey:plus.runtime.appid,
				version:plus.runtime.version
			},
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:"json",
			success: function(data) {
				console.log(JSON.stringify(data))
				if(data != null) {
					plus.ui.confirm("有新版本是否更新？", function(i) {
						if(0 == i.index && data.id !="") {
							if(mui.os.ios) {
								plus.runtime.openURL(data.ios);
							}else{
								plus.runtime.openURL(data.android);
							}
							
						}
					}, "更新", ["立即更新", "取　　消"]);
				}
			},
			error:function(){
				mui.toast("网络请求失败");
			}
		});
}