var $ = {
	ajax: function (option) {
		var xhr;
		try {
			xhr = new XMLHttpRequest();
		} catch (e) {
			try {
				xhr = new ActiveXObject('Msxml2.XMLHTTP')
			} catch (e) {
				try {
					xhr = new ActiveXObject('Microsoft.XMLHTTP')
				} catch (e) {
					alert("请问你用的是哪个年代的浏览器");
				}
			}
		}
		var async = typeof (option.async) === 'undefined' ? true : option.async;

		xhr.open(option.type || 'get', option.url, async);
		if (option.type == 'post') {
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		}
		if (!option.data) {
			option.data = null;
		}
		xhr.send(option.data);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = null;
				if (option.datatype == 'text') {
					data = xhr.responseText;
				} else if (option.datatype == 'json') {
					text = xhr.responseText;
					data = eval("(" + text + ")");
				} else if (option.datatype == 'xml') {
					data = xhr.responseXML;
				}
				return option.success(data)
			}

		}
	}
}