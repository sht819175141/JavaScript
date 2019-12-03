var Upload = {
	obj:null,		  //渲染按钮
	upType:'static',  //上传类型 static|img|video
	isMulti:false,	  //是否允许多张
	saveType:'local', //local | qiniu
	qn:[], 		      //七牛参数[]
	callback:null,	  //确定回调方法
	data:[],		  //确定返回结果数组
	html:'',
	//绑定按钮事件
	bandEvent:function(obj) {
		var _t = this;
		_t.obj = obj;
		//点击事件
		//$(obj).click(function() {
			_t.open();
		//});
	},
	//图片数据
	img:function(obj,isMulti,saveType,qn,callback) {
		this.isMulti = isMulti;
		this.saveType = saveType;
		this.upType = 'img';
		this.qn = qn;
		this.callback = callback;
		this.bandEvent(obj);
	},
	//视频数据
	video:function(obj,saveType,qn,callback) {
		this.isMulti = false;
		this.saveType = saveType;
		this.upType = 'video';
		this.qn = qn;
		this.callback = callback;
		this.bandEvent(obj);
	},
	//弹出框
	open:function() {
		var _t = this;
		if(_t.saveType == 'local') {
			_t.local();
		}
		if(_t.saveType == 'qiniu') {
			_t.qiniu();
		}
	},
	//本地上传
	local:function() {
		var _t = this;
		var url = '';
		var btnStr = '上传图片';
		var ext = 'jpg,jpeg,gif,png,bmp';
		if(_t.upType == 'static')  {
			url = '/uploads/upload';
		}
		if(_t.upType == 'img')  {
			url = '/uploads/uploadimg';
		}
		if(_t.upType == 'video')  {
			url = '/uploads/uploadvedio';
			btnStr = '上传视频';
			ext = 'mp4,flv,mov,rmvb';
		}

		var btn = _t.obj.substr(1);
		var container = btn+'container';

    var fileuploader = new plupload.Uploader({
        runtimes: 'html5,flash,html4',    //上传模式,依次退化
        browse_button: btn,       //上传选择的点选按钮，**必需**
        fileName: "Filedata",
        url: '/home/public/uploadimg', 
        container: container,           //上传区域DOM ID，默认是browser_button的父元素，
        flash_swf_url : '__PUBLIC__/js/plupload/Moxie.swf',
        silverlight_xap_url : '__PUBLIC__/js/plupload/Moxie.xap',  //引入flash,相对路径
        max_retries: 3,                   //上传失败最大重试次数
        drop_element: container,        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb',                //分块上传时，每片的体积
        multi_selection:_t.isMulti, //单选或者多选
    		//filters: {
				//  mime_types : [
				//    { title : "图片文件", extensions : ext}
				//   ],
				//   max_file_size : '6144kb', //最大只能上传100kb的文件
				//   prevent_duplicates : true //不允许队列中存在重复文件
				// },
				resize: {
				  width: 1080,
				  //height: 1080,
				  crop: false,
				  quality: 90,
				  preserve_headers: false
				}
    });
    
		fileuploader.init(); //初始化


		//文件添加时，会在容器里显示待上传的文件列表
		fileuploader.bind('FilesAdded', function(up, files) {
			if(fileuploader.files.length>9) {
				layer.open({content:'最多上传9张图片',skin: 'msg', time: 1});
        return;
      }
			fileuploader.start();
		});

		//上传进度
		fileuploader.bind('UploadProgress',	function(up, file) {
			layer.open({type: 2,content: '上传中'});
			if(file.percent == 100){
				$('.pace-progress').hide();
			}else{
				$('.pace-progress').show();
				$('.pace-progress').css('width', file.percent + "%");
			}
		});


		fileuploader.bind('FileUploaded',function(up,file,obj){
			layer.closeAll('loading');
        var k = 0;
				//保存数组返回
				for(var i in obj) {
        	if(k == 0) {
	        	var p = eval("("+obj[i]+")");
	        	if(p.err == 0){
	        		alert('上传失败，请选择图片文件再试');
	        		return false;
	        	}
	        	_t.data[0] = p.url;
	        }
	        k++;
        }


				if(_t.callback != null) {
					//执行自定义回调
					if(_t.data.length > 0){
						_t.callback(_t.data);
						_t.operation();
					}else{
						console.log('别闹！你还没有上传呢');
						return false;
					}
					//清空数据
					_t.data = [];
				}
    });

	},
	//图片操作 放大与删除
	operation:function(){
		//已经上传图片操作
		var h = window.screen.height,li_number = '';
		$('#ImageArea li').click(function(){
		    var _t = $(this),li_number = _t.index(),images_arr = _t.find('img').attr("src"),size = images_arr.split("_")[1],size = size.split(".")[0];size = size.replace("X","x");size = size.split("x");
			var opacityBottom = '<div id="opacityBottom" style="display: none"><img class="bigImg" src="'+ images_arr +'" ><div class="am-g am-padding yd-pic-tools"><buttom type="buttom" class="am-btn am-btn-danger am-btn-xs am-round" id="delpic"><i class="am-icon-trash"></i> 删除</buttom><buttom type="buttom" class="am-btn am-btn-danger am-btn-xs am-round am-fr" id="colseview"><i class="am-icon-times"></i> 关闭</buttom></div></div>';  
		  $(document.body).append(opacityBottom);  
		  toBigImg(size[0],size[1]);//变大函数  
		});
	 
    function toBigImg(width,height){
	    $("#opacityBottom").addClass("opacityBottom");  
	    $("#opacityBottom").show();  
	    //$("html,body").addClass("none-scroll");//下层不可滑动  
	    $(".bigImg").addClass("bigImg");  
	    //删除图片结构
	    $('#delpic').click(function(){
	        layer.open({
	            content: '确定要删除这张图片吗？'
	            ,btn: ['确定', '取消']
	            ,yes: function(index){
	                $('#ImageArea li').eq(li_number).remove();
	                layer.close(index);
	                clickToSmallImg()
	            }
	            ,no:function(index){
	                layer.close(index);
	            }
	        });
	    });
	    /*隐藏*/  
	    $("#colseview").on("click",clickToSmallImg);  
	    $(".bigImg").on("click",clickToSmallImg);  
	        // var imgHeight = height;  
	        // if(imgHeight < h){  
	        //     $(".bigImg").css({"top":(h-imgHeight)/2 + 'px'});  
	        // }else{  
	        //     $(".bigImg").css({"top":'0px'});  
	        // }  
	    function clickToSmallImg() {  
	        //$("html,body").removeClass("none-scroll");  
	        $("#opacityBottom").remove();  
	    }  
    };  
	}
};


