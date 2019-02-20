$(function () {
	loadImg();
	popContorl();
	contentToggle();

	var playCon1 = new PlayCon("video1");
	playCon1.selfVideoControl();
	// var playCon2 = new PlayCon("video2");
	// playCon2.selfVideoControl();
	// var playCon3 = new PlayCon("video3");
	// playCon3.selfVideoControl();

	//纱帽弹窗上的线图   绘制
	//柱状图
	var echartsBar = echarts.init(document.getElementById('ShaCanvasBar'));
	echartsBar.setOption(optionBar);
	//线图
	var initPopupObjByData0 = new InitPopupObjByData('.PopUpBox_sha', dataSha);
	popupObj0 = initPopupObjByData0.init('ShaCanvasLine');
	initPopCanvas = new InitPopCanvas(popupObj0);
	initPopCanvas.initCanvas();
	shaPraghToggle();

})
/**************弹窗显示/隐藏控制****** */
/*********popup1   线框图的相关数据 / 纱帽 的数据对象数组***** */
var dataSha = { //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	promtArr: ['氨氮', '高锰酸钾指数', '化学需氧量', '溶解氧', '总磷'],
	dataArr: [{
			//name:"",
			'andanArr': [9.0, 6.0, 8.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0],
			'MnArr': [4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 5.5, 4.0, 6.0],
			'CheOxyArr': [5.5, 4.0, 5.5, 4.0, 4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 6.0],
			'DisOxyArr': [8.0, 9.0, 6.0, 9.0, 6.0, 8.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0], //溶解氧
			'PArr': [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},

	],
	waterAssArr: []
}

function shaPraghToggle() {
	$("body").on('click', '.PopUpBox_sha .lineGraph', function () {
		$(this).toggleClass('active');
		$('.PopUpBox_sha .barGraph').removeClass('active');

		$('.PopUpBox_sha .barCanvas').removeClass('active');
		$('.PopUpBox_sha .lineCanvas').addClass('active');
		initPopCanvas.initCanvas();
	})
	$("body").on('click', '.PopUpBox_sha .barGraph', function () {
		$(this).addClass('active');
		$('.PopUpBox_sha .lineGraph').removeClass('active');

		$('.PopUpBox_sha .lineCanvas').removeClass('active');
		$('.PopUpBox_sha .barCanvas').addClass('active');
	})
}
var waterAssData={
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	arr:[1, 2, 3, 4, 5, 6, 4, 3, 3, 1, 6,1]
}
var optionBar = {
	//color:colorP,//调色板
	color: ['#72e75e','#1e90ff',"#00ccff","#fd4800", "#f1ec3f","#72e75e","#cc00ff",'#1e90ff',"#00ccff","#fd4800",'#00ff00',"#00ccff"], //调色板
	tooltip: {
		show:false,
	},
	grid: {
		top: 40,
		left: '0%',
		right: 33,
		bottom: 20,
		containLabel: true,
		show: false
	},
	xAxis: {
		type: 'category',
		data: waterAssData.xData,
		onZero: true,
		axisLine: { //X轴线的设置
			show: false,
			lineStyle: {
				color: "#324b75",
				type: 'dashed',
				align: 'right',
				padding: [3, 4, 5, 10]
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: true,
			rotate: -45,
			textStyle: {
				color: '#c3d4ff',
				fontSize: 14,
			}
		},
		boundaryGap: true
	},
	yAxis: {
		type: 'value',
		//name: this._obj.Yname,
		nameLocation: 'end',
		nameTextStyle: {
			color: '#c3d4ff',
			align: 'left',
			padding: [0, 0, 5, 0],
			fontSize: 14
		},
		axisLabel: {
			show: true,
			textStyle: {
				color: '#c3d4ff',
				fontSize: 13,

			},
			formatter:function(y){
				var r=null;
				switch(y)
					{
						case 1:r='劣Ⅳ类'
							break;
						case 2:r='Ⅴ类'
							break;
						case 3:r='Ⅵ类'
							break;
						case 4:r='Ⅲ类'
							break;
						case 5:r='Ⅱ类'
							break;
						case 6:r='Ⅰ类'
							break;
						default:
							r=' '
					}
				return r;
			}
		},
		axisLine: { //Y轴线的设置
			show: false,

		},
		axisTick: {
			show: false
		},
		splitLine: { //Y轴线的设置
			show: true,
			lineStyle: {
				color: ["#324b75"],
				type: 'dashed'
			}
		},
		max: 6,
		min: 0,
		boundaryGap: ['0%', '0%']
	},
	series: [{
		data: waterAssData.arr,
		barCategoryGap:'80%' ,
		type: 'bar',
		
	}]
};