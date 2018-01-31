var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

option = null;
app.title = '武汉信用——近年业务规模、业务收入情况';

option = {
    title: {
        text: '武汉信用投资集团近年业务规模、业务收入情况',
        left: 'center',
        textStyle: {
            color: 'red',
            fontSize: '20'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['业务规模', '业务收入'],
        left: "right",
        textStyle: {
            color: "#ffffff"
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            lineStyle: {
                color: "#ffffff"
            },
        },
        axisLabel: {
            formatter: '{value} 亿元'
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#ffffff"
            },
        },
        data: ['2014年','2015年','2016年']
    },
    backgroundColor: "#044161",
    symbolSize: 20,

    series: [
        {
            name: '业务规模',
            type: 'bar',
            data: [375.7, 419.9, 491.5],
            label: {
                normal: {
                    show: true,
                    textBorderColor: '#333',
                    textBorderWidth: 2,
                    formatter: '{c} 亿元'
                }
            },
            itemStyle: {
                normal: {color: '#46bee9'}
            },
            animationDelay: function (idx) {
                return idx * 1500;
            }
        },
        {
            name: '业务收入',
            type: 'bar',
            data: [15.6, 23.2, 27.5],
            label: {
                normal: {
                    show: true,
                    textBorderColor: '#333',
                    textBorderWidth: 2,
                    formatter: '{c} 亿元'
                }
            },
            itemStyle: {
                normal: {color: '#ffa022'}
            },
            animationDelay: function (idx) {
                return idx * 1500;
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}