

echarts.init(document.getElementById('box2')).setOption({
    color: ["#f8e612", "#DF5757", "#9af693"],
    /*'#f8e612','#DF5757','#9af693'*/
    series: [{
        hoverAnimation: false,
        name: '半径模式',
        type: 'pie',
        radius: ['80%', '100%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                value: 13,
                name: 'rose3'
            },
            {
                value: 10,
                name: 'rose1'
            },
            {
                value: 6,
                name: 'rose2'
            }
        ]
    }]
})


var year = 2018;//2018年
var xnums = 31;//x轴
var ynums = 12;//y轴
var itemWidth = 63;
var itemHeight = 40;
function makeRandom() {
    var chance = Math.ceil(Math.random() * 100);
    if (chance <= 40) {
        return Math.random() * 50
    } else if (chance > 40 && chance <= 60) {
        return Math.random() * 50 + 50
    } else if (chance > 60 && chance <= 75) {
        return Math.random() * 50 + 100
    } else if (chance > 75 && chance <= 85) {
        return Math.random() * 50 + 150
    } else if (chance > 85 && chance <= 95) {
        return Math.random() * 100 + 200
    } else if (chance > 95 && chance <= 100) {
        return Math.random() * 300 + 300
    }
}

function makeData() {
    var data = [];
    for (var j = 1; j <= ynums; j++) {
        let num2 = ''+j;
        if(j<10){
            num2 = '0'+j;
        }
        var d = new Date(year,j,0).getDate();
        for (var i = 1; i <= d; i++) {
            let num = ''+i;
            if(i<10){
                num = '0'+i;
            }
            data.push([num, num2 + '月', parseInt(makeRandom())])
        }
        
    }
    return data
}

function makeXdata() {
    var xData = [];
    for (var i = 1; i <= xnums; i++) {
        let num = ''+i;
        if(i<10){
            num = '0'+i;
        }
        xData.push(num);
    }
    return xData
}

function makeYdata() {
    var yData = [];
    for (var i = ynums; i >= 1; i--) {
        let num = ''+i;
        if(i<10){
            num = '0'+i;
        }
        yData.push(num + '月');
    }
    return yData
}
echarts.init(document.getElementById('box4')).setOption({
    title: {
        text: year+'年AQI指数分布图',
        left: 'center',
        top:'4%',
        textStyle: {
            fontSize: 30,
            fontWeight:'normal',
            color:'#11b6d9'
        }
    },
    tooltip: {
        formatter: function(params){
            return year+'年'+params.value[1]+params.value[0]+'日<br/>'+params.marker+'AQI：'+params.value[2]            
        },
        textStyle: {
            fontSize: 18,
            color: '#fff'
        }
    },
    calculable: true,
    grid: {
        show: false,
        top: '15%',
        left: '5%',
        right: '2%',
        bottom:'15%'
    },
    visualMap: {
        min: -1,
        max: 600,
        splitNumber: 6,
        pieces: [

            {
                min: 301,
                label: '301-500'
            },

            {
                min: 201,
                max: 300,
                label: '201-300'
            },
            {
                min: 151,
                max: 200,
                label: '151-200'
            },
            {
                min: 101,
                max: 150,
                label: '101-150'
            },
            {
                min: 51,
                max: 100,
                label: '51-100'
            },
            {
                min: 0,
                max: 50,
                label: '0-50'
            },
            {
                max: -1,
                label: '暂无数据'
            },
        ],
        itemWidth: 30,
        itemHeight: 20,
        color: [ '#420004', '#8d2c01', '#e60c00', '#ff5500', '#ffc710','#b5ff21','#dfdfdf'],
        bottom: '3%',
        left: 'center',
        orient: 'horizontal',
        textStyle: {
            fontSize: 22,
            color:'#fff'
        }
    },
    xAxis: [{
        data: makeXdata(),
        axisTick: {
            show: true,
            lineStyle:{
                color:'#fff'
            }
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#fff'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 20,
                color: '#fff'
            },
            showMinLabel: true,
            showMaxLabel: true
        }
    }],
    yAxis: [{
        axisTick: {
            show: true,
            lineStyle:{
                color:'#fff'
            }
        },
        axisLine: {
            show: false
        },
        data: makeYdata(),
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 20,
                color: '#fff'
            }
        }
    }],
    series: [{
        type: 'scatter',
        symbol: 'rect',
        label:{
            show:true,
            formatter:function(params){
                return params.value[2]
            },
            textStyle: {
                fontSize: 18,
                color: '#fff'
            }
        },
        symbolSize: [itemWidth, itemHeight],
        itemStyle: {
            borderWidth: 0.5,
            borderColor: '#000'
        },
        data: makeData()
    }]
})

echarts.init(document.getElementById('box5')).setOption({
    color: ["#749bdb", "#425986"],
    series: [{
        name: '',
        type: 'pie',
        radius: ['65%', '75%'],
        /*饼图的半径，数组的第一项是内半径，第二项是外半径，默认是【0,"75%"】*/
        avoidLabelOverlap: false,
        /*是否启用*/
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: ''
            },
            {
                value: 310,
                name: ''
            },
        ]
    }]
})

echarts.init(document.getElementById('box6')).setOption({
    tooltip: {
        trigger: 'axis'
    },
    color: ['#ed8061', '#f9d762', '#9ccc66'],
    legend: {
        selectedMode: false,
        data: ['劣V类比例', '水质优良率', '2020年优良率目标'],
        top: 30,
        textStyle: {
            fontSize: 24,
            color: '#fff'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '30px',
        top: '17%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 24,
                color: '#fff'
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 24,
                color: '#fff'
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#4562a2'
            },
        },
    }],
    series: [{
            name: '劣V类比例',
            type: 'line',
            areaStyle: {},
            data: [10, 40, 20, 10, 30, 10, 20],
        },
        {
            name: '水质优良率',
            type: 'line',
            symbol: 'triangle',
            symbolSize: 10,
            areaStyle: {},
            data: [10, 20, 30, 13, 15, 30, 6]
        },
        {
            name: '2020年优良率目标',
            type: 'line',
            data: [70, 70, 70, 70, 70, 70, 70],
            symbolSize: 0,
            symbol: 'rect',
            lineStyle: {
                normal: {
                    width: 4,
                    type: 'dashed'
                }
            },
        }
    ]
})

echarts.init(document.getElementById('three-box1')).setOption({
    color: ["#76A6FE", "#FACD89", "#B893FB", "#5ADDDD"],
    series: [{
        hoverAnimation: false,
        name: '半径模式',
        type: 'pie',
        radius: ['80%', '100%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                value: 13,
                name: 'rose3'
            },
            {
                value: 10,
                name: 'rose1'
            },
            {
                value: 6,
                name: 'rose2'
            }
        ]
    }]
})
var option = {
    color: ["#f8e612", "#DF5757", "#9af693"],
    /*'#f8e612','#DF5757','#9af693'*/
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            return params[0].name + '<br/>' +
                params[0].seriesName + ' : ' + params[0].value + '<br/>' +
                params[1].seriesName + ' : ' + (params[1].value + params[0].value);
        }
    },
    legend: {
        selectedMode: false,
        data: ['监控企业数', '超标企业数'],
        top: 20,
        textStyle: {
            fontSize: 24,
            color: '#fff'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '20px',
        top: '17%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 24,
                color: '#fff'
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    series: [{
            name: '监控企业数',
            type: 'bar',
            stack: 'sum',
            barWidth: '40%',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    color: 'tomato',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: 'insideTop',
                        textStyle: {
                            fontSize: 28,
                            color: '#fff'
                        }
                    }
                }
            },
            data: [260, 200, 220, 120, 100, 80, 100]
        },
        {
            name: '超标企业数',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                if (option.xAxis[0].data[i] == params.name) {
                                    return option.series[0].data[i] + params.value;
                                }
                            }
                        },
                        textStyle: {
                            fontSize: 28,
                            color: '#fff'
                        }
                    }
                }
            },
            data: [40, 80, 50, 80, 80, 70, 10]
        }
    ]
}
echarts.init(document.getElementById('three-box2')).setOption(option)

$(function () {
    $(".wrap .title-map .title-inner span").click(function () {
        $(this).addClass("block1").siblings().removeClass();
        var index = $(this).index();
        $(this).parents('.title-map').next().find('.search').hide();
        $(this).parents('.title-map').next().find('.search').eq(index).show();
    })
    $('.search p').click(function () {
        $(this).addClass("active").siblings().removeClass();
    })
    $(".wrap .wrap-one .three .div-title2 span").click(function () {
        $(this).addClass("tabwater").siblings().removeClass()
    })
})


// var oUl = document.getElementsByClassName("scroll-ul")[0]
// var oLi = $("#box3 li")
// if(oLi.length>6){
//     setInterval(function(){
//         oUl.style.top = oUl.offsetTop - 1 + "px"
//         if(oUl.offsetTop <= -110){
//             var oLi = oUl.getElementsByTagName("li")[0]
//             oUl.appendChild(oLi)
//             oUl.style.top = "0px"
//         }
//     },50)
// }

var oLiHeight = $('#box3 li').eq(0).height();
var oUl = $('.scroll-ul').eq(0)
var oLi = $("#box3 li")
var line = 1;
if (oLi.length > 5) {
    setInterval(function () {
        oUl.animate({
            top: '-=' + oLiHeight
        }, 5000, "linear", function () {
            for (var i = 1; i <= line; i++) {
                oUl.find("li:first").appendTo(oUl);
            }
            oUl.css({
                top: 0
            });
        });
    }, 1000);
}

// 表格滚动

var eleHeight1 = $('.topleft2 .tabbody tr').eq(0).height();
var timeHeight1 = $('.topleft2 .tabbody').eq(0)
var timeTr = $('.topleft2 .tabbody tr')
var line = 1;
if (timeTr.length > 6) {
    setInterval(function () {
        timeHeight1.animate({
            top: '-=' + eleHeight1
        }, 2000, "linear", function () {
            for (var i = 1; i <= line; i++) {
                timeHeight1.find("tr:first").appendTo(timeHeight1);
            }
            timeHeight1.css({
                top: 0
            });
        });
    }, 1000);
}