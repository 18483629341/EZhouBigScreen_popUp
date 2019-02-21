/**************弹窗显示/隐藏控制****** */

function popContorl() {
	$(document).mouseup(function (e) {
		var _con = $('.PopUpBox '); // 设置目标区域 
		if (!_con.is(e.target) && _con.has(e.target).length === 0) {
			// 功能代码
			//$('.PopUpBox').removeClass('show');
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




function PlayCon(videoConEleId, videoEleId) {
	this.videoConEleId = videoConEleId;
	this.id = videoEleId;
	this.Ele = document.getElementById(this.id);
	this.selfVideoControl = function () {
		var _this = this;
		$("body").on('click', "#" + this.id, function () {
			console.log("#" + this.id + " .controlIcon");
			_this.toggle();
		})
		$("body").on('click', "#" + this.videoConEleId + " .controlIcon", function () {
			_this.toggle();
		})
		$("body").keydown(function (e) {
			var e = window.event ? window.event : e;    
			var keyCode = e.which ? e.which : e.keyCode;     //tab
			    
			if (keyCode == 32) {      
				//common.lastTabTime = new Date();
				_this.toggle();    
			}  
		});
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

function InitPopCanvas(obj) {
	//console.log(obj);
	this._obj = obj
	this.elementId = this._obj.elementId;
	this.colorArr = this._obj.colorArr;
	this.seriesArr = this._obj.seriesArr;
	this.unit = this._obj.unit;
	this.popUpChart = echarts.init(document.getElementById(this._obj.elementId));
	this.lineGraphS = this._obj.lineGraphS;
	this.setObj = function (newObj) {
		this._obj = newObj
	}
	this.initCanvas = function () {
		let _colors = [];
		let _series = [];
		var noActiveN = 0;
		for (let i = 0; i < this.lineGraphS.length; i++) {
			var item = this.lineGraphS[i];
			//if(item.className.)
			if (hasActive(item.className)) {
				_colors.push(this._obj.colorArr[i]);
				_series.push(this._obj.seriesArr[i]);
			} else {
				noActiveN++;
			}

			if (noActiveN == this.lineGraphS.length) { //至少显示第一条
				_colors = this._obj.colorArr[0];
				_series = this._obj.seriesArr[0];
				$(this.lineGraphS[0]).addClass('active');
			}
			//if(item.className.)
		}
		var newOption = this.getPopOption(_colors, _series);
		this.popUpChart.setOption(newOption, {
			notMerge: true,
		});
	}
	this.getPopOption = function (colorP, seriesP) {
		var option = {
			color: colorP, //调色板
			tooltip: {
				//show:false,
				trigger: 'axis',
				axisPointer: {
					type: 'line',
					label: {
						backgroundColor: '#6a7985',
						fontSize: 14
					}
				},
			},
			grid: {
				top: 40,
				left: '0%',
				right: 63,
				bottom: 40,
				containLabel: true,
				show: false
			},
			xAxis: {
				type: 'category',
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
				data: this._obj.xData || arrMonth4,
				boundaryGap: false
			},
			yAxis: {
				type: 'value',
				name: this._obj.unit,
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
					formatter: this._obj.formatter || '{value}'
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
				max: this._obj.max,
				min: this._obj.min,
				boundaryGap: ['0%', '0%']
			},
			series: seriesP
		};
		return option;
	}

}

function InitPopupObjByData(elementClass, Obj) { //将数据库转化为绘图 针对排污情况P4页面的方法  需要的含数组的对象
	//elementClass 弹窗的最大容器的独特的类  ,如‘.PopUpBox_jing’
	this.popUpDataObj = {};
	this.popUpDataObj.elementClass = elementClass,
	this.popUpDataObj.xData = Obj.xData;
	this.popUpDataObj.popupObjArr = [];
	this.dataArr = Obj.dataArr;
	this.pollNameList=Obj.pollNameList;
	this.initTablist = function () { //初始化某个弹幕的选框的dom
		console.log(this.pollNameList);
		let inhtml = '';
		inhtml = '<span class="selectSpan ">' +
			'<span class="spanInner active" data-key="'+this.pollNameList[0].pollId+'" >' + this.pollNameList[0].pollName + '</span>' +
			'<i class="icon dropIcon"></i>' +
			'</span>' +
			'<ul class="TreeList" >';
		let listArr = '';
		for (let i = 0; i < this.pollNameList.length; i++) {
			let lihtml = '';
			if (i == 0) {
				lihtml = '<li class="treeLi active" data-index="'+this.pollNameList[0].pollId+'" >' + this.pollNameList[i].pollName + '</li>'
			} else {
				lihtml = '<li class="treeLi" data-index="'+this.pollNameList[i].pollId+'">' + this.pollNameList[i].pollName + '</li>'
			}
			listArr += lihtml;
		}
		inhtml += listArr;
		inhtml += '</ul>';
		$(this.popUpDataObj.elementClass + ' .selectLi').html(inhtml);
	}
	this.init = function (elementId) {
		//生成需要渲染第一排污口的线图的 数据  
		let obj = this.setPopupObj(this.dataArr[0]);
		obj.elementId = elementId;
		return obj
	}
	this.setPopupObj = function (obj) { //初始化或更新数据源
		var popupObj2 = {};
		popupObj2.xData = Obj.xData; //注意Obj为原型参数
		//cloneObj(origin, target)
		popupObj2.colorArr = ["#00ccff", "#fd4800", "#f1ec3f", "#72e75e", "#cc00ff",'#1e90cc','#ff00cc'];
		popupObj2.unit = Obj.unit||'mg/l';
		var keys = Object.keys(obj);
		//console.log(obj,Obj.promtArr);
		popupObj2.seriesArr = [];
		for (let i = 0; i < keys.length; i++) {
			let item = keys[i];
			var seryObj = {
				name: Obj.promtArr[i],
				type: 'line',
				data: obj[item],
				smooth: true,
				lineStyle: {
					width: 2,
				},
				symbol: 'none'
			};
			//将所有数组  依次加入到   seriesArr数组中
			popupObj2.seriesArr.push(seryObj);
		}
		popupObj2.Ylabel = function (value) {
			return value.toFixed(1);
		};
		popupObj2.Yvalue = function (value) {
			return value.toFixed(1);
		};
		popupObj2.min = '0';
		popupObj2.max = function (value) {
			var a = value.max * 1.2;
			return a.toFixed(1);
		};
		popupObj2.lineGraphS = $(this.popUpDataObj.elementClass + ' .lineGraph');


		return popupObj2;
	}
}
/**
  
   * @param {String} text 设置中间文字
   * @param {Number} val 设置数值百分率
   * @param {String} bg 设置污染率的颜色
*/
function drawpollutionEcharts(text, val, bg){
    const value1 = val * 75 / 100;
    const value2 = 75 - value1;
    const num1 = value1 / 2;
    const num2 = value2 / 2;
    const series = [];
    for (let i = 0; i < num1; i++) {
      series.push(setValue(1, bg), setValue(1, 'transparent'));
    }
    for (let i = 0; i < num2; i++) {
      series.push(setValue(1, '#95989b'), setValue(1, 'transparent'));
    }
    series.push(setValue(25, 'transparent'));
    const option = {
      title: {
        x: '48%',
        y: '33%',
        subtext: text,
        textAlign: 'center',
        subtextStyle: {
          fontSize: 25,
          color: '#fff'
        }
      },
      series: [
		{
			name: '',
			type: 'pie',
			radius: ['67%', '68%'],
			center: ['50%', '50%'],
			startAngle: 225,
			hoverAnimation: false,
			legendHoverLink: false,
			labelLine: {
			  normal: {
				show: false
			  }
			},
			emphasis: {
			  show: false
			},
			data: [setValue(75, '#95989b'), setValue(25, 'transparent')]
		  },
		{
        name: '',
        type: 'pie',
        radius: ['75%', '85%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: true,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: series
	  },
	   {
        name: '',
        type: 'pie',
        radius: ['91%', '92%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: [setValue(75, '#95989b'), setValue(25, 'transparent')]
      }]
    };

    const pollutionEcharts = echarts.init(
     document.getElementById('polluEcharts')
    );
    pollutionEcharts.setOption(option);
}
/**
* 设置echarts显示对象
* @param {numbr} value 值
* @param {String} color 颜色
*/
function setValue(value, color) {
 return {
   value,
   itemStyle: {
	 normal: {
	   color,
	 }
   }
 };
}
function hasActive(str) {
	var reg = /active*/;
	return reg.test(str);
}
/* .深度克隆 对象（针对 对象 或 对象数组 或 数组） 经典 */

function cloneObj(origin, target) {
	var target = target || {};
	if (origin instanceof Array) {
		target = [];
	} else if (origin == null) { //null或者undefined时
		target = origin;
	}
	for (var key in origin) { //此方法即可遍历对象，也可遍历数组
		target[key] = typeof val === 'object' ? cloneObj(origin[key], target[key]) : origin[key];
		//typeof val==='object' 数组和对象以及null
	}
	return target;
}