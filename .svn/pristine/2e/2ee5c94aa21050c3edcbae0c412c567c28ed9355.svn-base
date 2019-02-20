
/**************弹窗显示/隐藏控制****** */

function popContorl() {
	$(document).mouseup(function (e) {
		var _con = $('.PopUpBox '); // 设置目标区域 
		if (!_con.is(e.target) && _con.has(e.target).length === 0) {
			// Mark 1 some code... // 功能代码
			$('.PopUpBox').removeClass('show');
		}
	});
	$("body").on('click', '.PopUpclose', function () {
		$('.PopUpBox').removeClass('show');
	})
	$("body").on('click', '.ax_default', function () {
		$('.PopUpBox').toggleClass('show');
	})
}

function contentToggle() {
	//selfTab
	$("body").on('click', '.selfTab', function () {
		$(this).siblings('.selfTab').removeClass('active');
		$(this).addClass('active');
		var contentName = $(this).attr("data-content");

		var $target = $('.tab-pane[id=' + contentName + ']');
		console.log($target);
		$target.siblings('.tab-pane').removeClass('active');
		$target.addClass('active');
	})
}

function loadImg() {
	$('img[data-src]').each(function (i, obj) {
		var _src = $(this).attr("data-src");
		$(this).attr("src", _src);

	});
}




function PlayCon(videoEleId) {
	this.id = videoEleId;
	this.Ele = document.getElementById(this.id);
	this.selfVideoControl = function () {
		var _this = this;
		$("body").on('click', "#" + this.id, function () {
			_this.toggle();
		})
		$("body").on('click', "#" + this.id + " .controlIcon", function () {
			_this.toggle();
		})
	}
	this.toggle = function () {
		if (this.Ele.paused) { //如果是播放按钮，则一直显示
			this.Ele.play();
			$("#" + this.id).siblings(".controlDiv").fadeOut();
			$("#" + this.id).siblings(".controlDiv").find(".controlIcon").addClass('pause');
		} else { //如果是暂停按钮，则显示一会儿，等一会然后
			this.Ele.pause();
			$("#" + this.id).siblings(".controlDiv").fadeIn();
			$("#" + this.id).siblings(".controlDiv").find(".controlIcon").removeClass('pause');
		}
	}

}
function InitPopCanvas(obj){
	this._obj=obj
	this.elementId=this._obj.elementId;
	this.colorArr=this._obj.colorArr;
	this.seriesArr=this._obj.seriesArr;
	this.Yname=this._obj.Yname;
	this.popUpChart=echarts.init(document.getElementById(this._obj.elementId));
	this.tabSpanS=this._obj.tabSpanS;
	this.setObj=function(newObj){
        this._obj=newObj
	}
	this.initCanvas=function(){
		let _colors=[];
		let _series=[];
		var noActiveN=0;
		for(let i=0;i<this.tabSpanS.length;i++){
			var item=this.tabSpanS[i];
			//if(item.className.)
		   if(hasActive(item.className)){
				_colors.push(this._obj.colorArr[i]);
				_series.push(this._obj.seriesArr[i]);
		   }else{
				noActiveN++;
		   }

		      if(noActiveN==3){//至少显示第一条
				_colors=this._obj.colorArr[0];
				_series=this._obj.seriesArr[0];
				$(this.tabSpanS[0]).addClass('active');
			  }
			//if(item.className.)
		}
		var newOption=this.getPopOption(_colors,_series);
		this.popUpChart.setOption(newOption,{
			notMerge: true,
		});
	}
	this.getPopOption=function(colorP,seriesP){
		var option = {
			color:colorP,//调色板
			tooltip : {
				//show:false,
				trigger: 'axis',
				axisPointer: {
					type: 'line',
					label: {
						backgroundColor: '#6a7985',
						fontSize:28
					}
				},
			},
			grid: {
				top:80,
				left: '0%',
				right: '0%',
				bottom: 0,
				containLabel: true,
				show:false
			},
			xAxis: {
				type: 'category',
				onZero:true,
				axisLine: {//X轴线的设置
					show: false,
					lineStyle:{
						color:"#324b75",
						type:'dashed',
						align:'right',
						padding: [3, 4, 5, 10]
						// verticalAlign:'top'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#c3d4ff',
					   fontSize:26
					}
				},
				data: this._obj.xData||arrMonth4,
				boundaryGap:false
			},
			yAxis: {
				type: 'value',
				name:this._obj.Yname,
				nameLocation:'end',
				nameTextStyle:{
					color:'#c3d4ff',
					align:'left',
					padding: [0,0,20,0],
					fontSize:28
				},
				axisLabel: {        
					show: true,
					textStyle: {
						color: '#c3d4ff',
						fontSize:26
					},
					formatter:this._obj.formatter||'{value}'
				},
				axisLine: {//Y轴线的设置
					show: false,
				},
				axisTick: {
					show: false
				},
				splitLine: {//Y轴线的设置
					show: true,
					lineStyle:{
						color:["#324b75"],
						type:'dashed'
					}
				},
				max:this._obj.max,
				min:this._obj.min,
				boundaryGap:['0%','0%']
			},
			series: seriesP
		};
		return option;
	}

}