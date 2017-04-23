if (typeof (jQuery) != 'undefined') {
    jQuery.support.cors = true;
    jQuery.ajaxSetup({
        xhrFields: {withCredentials: true}
    });
}
window.serverhost = "http://www.gametec.cn";

window.CheckUpdateVersion = function(){
		$.ajax({
			type: "get",
			url: window.serverhost + "/api/mobile/getVersion",
			data:{
				appkey:plus.runtime.appid,
				version:plus.runtime.version
			},
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:"json",
			success: function(req) {
				//console.log(JSON.stringify(data))
				if(req && req.data && req.code >0) {
					var data = req.data;
					plus.ui.confirm("有新版本是否更新？版本号:" + data.version, function(i) {
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
			error:function(err){
				//console.log(JSON.stringify(err));
				//mui.toast("网络请求失败");
			}
		});
}