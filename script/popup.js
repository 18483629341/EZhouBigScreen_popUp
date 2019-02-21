$(function () {
	loadImg();
	popContorl();
	contentToggle();

	var playCon1 = new PlayCon("sha_video", "video1");
	playCon1.selfVideoControl();
	var playCon2 = new PlayCon("kai_video", "video2");
	playCon2.selfVideoControl();
	var playCon3 = new PlayCon("pol_video", "video3");
	playCon3.selfVideoControl();

	//纱帽弹窗上的线图   绘制
		//柱状图
	var echartsBar = echarts.init(document.getElementById('ShaCanvasBar'));
	echartsBar.setOption(optionBar);
		//线图
	 initPopupObjByData0 = new InitPopupObjByData('.PopUpBox_sha', dataSha);
	 popupObj0 = initPopupObjByData0.init('ShaCanvasLine');
	initPopCanvas0 = new InitPopCanvas(popupObj0);
	initPopCanvas0.initCanvas();
	shaPraghToggle();
	//开发区弹窗上的线图   绘制
		//线图
	initPopupObjByData1 = new InitPopupObjByData('.PopUpBox_kai', dataKai);
	popupObj1 = initPopupObjByData1.init('KaiCanvasLine');
	initPopCanvas1 = new InitPopCanvas(popupObj1);
	initPopCanvas1.initCanvas();
	kaiPraghToggle();
    //污染源弹窗上的线图   绘制
		//线图
	initPopupObjByData2 = new InitPopupObjByData('.PopUpBox_pol', dataPol);
	popupObj2 = initPopupObjByData2.init('PolCanvasLine');
	initPopCanvas2 = new InitPopCanvas(popupObj2);
	initPopCanvas2.initCanvas();
	polPraghToggle();
   
})
var initPopupObjByData0 = null;
var popupObj0 = null;
var initPopCanvas0 = null;
var initPopupObjByData1 = null;
var popupObj1 = null;
var initPopCanvas1= null;
var initPopupObjByData2 = null;
var popupObj2 = null;
var initPopCanvas2= null;
/*********popup1   柱状图的相关数据 / 纱帽 的数据对象数组***** */
var waterAssData = {//！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	arr: [1, 2, 3, 4, 5, 6, 4, 3, 3, 1, 6, 1]
}
var optionBar = {//样式设置相关
	color: ['#72e75e', '#1e90ff', "#00ccff", "#fd4800", "#f1ec3f", "#72e75e", "#cc00ff", '#1e90ff', "#00ccff", "#fd4800", '#00ff00', "#00ccff"], //调色板
	tooltip: {
		show: false,
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
			formatter: function (y) {
				var r = null;
				switch (y) {
					case 1:
						r = '劣Ⅳ类'
						break;
					case 2:
						r = 'Ⅴ类'
						break;
					case 3:
						r = 'Ⅵ类'
						break;
					case 4:
						r = 'Ⅲ类'
						break;
					case 5:
						r = 'Ⅱ类'
						break;
					case 6:
						r = 'Ⅰ类'
						break;
					default:
						r = ' '
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
		barCategoryGap: '80%',
		type: 'bar',

	}]
};
/*********popup1   线框图的相关数据 / 纱帽 的数据对象数组***** */
var dataSha = { //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	promtArr: ['氨氮', '高锰酸钾指数', '化学需氧量', '溶解氧', '总磷'],
	unit:['mg/l'],
	dataArr: [{
			//name:"",
			'andanArr': [9.0, 6.0, 8.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0],
			'MnArr': [4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 5.5, 4.0, 6.0],
			'CheOxyArr': [5.5, 4.0, 5.5, 4.0, 4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 6.0],
			'DisOxyArr': [8.0, 9.0, 6.0, 9.0, 6.0, 12.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0], //溶解氧
			'PArr': [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},

	],
	waterAssArr: []
}
/*********popup2   线框图的相关数据 / 开发区 的数据对象数组***** */
var dataKai = { //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	promtArr: ['AQI', 'SO2', 'NO2', 'CO', 'O3', 'PM2.5', 'PM10'],
	unit:['mg/l'],
	dataArr: [{
			//name:"",
			'AQIArr': [9.0, 6.0, 8.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0, 9.0, 6.0, 8.0],
			'SO2Arr': [4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 5.5, 4.0, 5.5, 4.0, 6.0],
			'NO2Arr': [5.5, 4.0, 5.5, 4.0, 4.0, 6.0, 5.5, 5.5, 5.5, 4.0, 6.0, 6.0],
			'COArr': [8.0, 9.0, 6.0, 9.0, 6.0, 12.0, 7.0, 6.0, 8.0, 9.0, 6.0, 8.0], //溶解氧
			'O3Arr': [6.0, 5.5, 6.0, 8.8, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6],
			'PM2.5Arr': [7.0, 6.0, 8.0, 9.0, 6.6, 5.0, 6.0, 5.5, 4.0, 6.0, 4.0, 5.6],
			'PM10Arr': [6.0, 5.5, 6.0, 12.0, 7.0, 6.0, 8.0, 5.5, 4.0, 6.0, 4.0, 5.6]
		},

	]
}
/*********popup3   线框图的相关数据 / 污染源 的数据对象数组***** */
var dataPol = { //！！！！！！！！！！！！！！！！！需要后台传输的数据
	xData: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12'],
	promtArr: ['废气', '废水', '二氧化硫', '氮氧化物', '烟尘'],
	unit:['平均浓度：mg/m³'],
	dataArr: [{
			//name:"",
			'wasteGasArr': [90, 60, 80, 70, 160, 80, 90, 60, 80, 90, 60, 80],
			'wasteWaterArr': [40, 60, 55, 55, 55, 40, 60, 55, 140, 55, 40, 60],
			'SO2Arr': [55, 40, 55, 140, 140, 60, 55, 55, 55, 140, 60, 60],
			'nitOxiArr': [80, 90, 160, 90, 60, 120, 70, 60, 80, 90, 60, 80], //溶解氧
			'smokeArr': [60, 55, 60, 88, 66, 50, 60, 155, 40, 60, 40, 56]
		}
	]
}


function shaPraghToggle() {
	$("body").on('click', '.PopUpBox_sha .lineGraph', function () {
		$(this).toggleClass('active');
		$('.PopUpBox_sha .barGraph').removeClass('active');

		$('.PopUpBox_sha .barCanvas').removeClass('active');
		$('.PopUpBox_sha .lineCanvas').addClass('active');
		initPopCanvas0.initCanvas();
	})
	$("body").on('click', '.PopUpBox_sha .barGraph', function () {
		$(this).addClass('active');
		$('.PopUpBox_sha .lineGraph').removeClass('active');

		$('.PopUpBox_sha .lineCanvas').removeClass('active');
		$('.PopUpBox_sha .barCanvas').addClass('active');
	})
}
function kaiPraghToggle() {
	$("body").on('click', '.PopUpBox_kai .lineGraph', function () {
		$(this).toggleClass('active');
		$('.PopUpBox_kai .barGraph').removeClass('active');

		//$('.PopUpBox_kai .barCanvas').removeClass('active');
		$('.PopUpBox_kai .lineCanvas').addClass('active');
		initPopCanvas1.initCanvas();
	})
}
function polPraghToggle() {
	$("body").on('click', '.PopUpBox_pol .lineGraph', function () {
		$(this).toggleClass('active');
		$('.PopUpBox_pol .barGraph').removeClass('active');

		//$('.PopUpBox_pol .barCanvas').removeClass('active');
		$('.PopUpBox_pol .lineCanvas').addClass('active');
		initPopCanvas2.initCanvas();
	})
}