var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

option = null;
app.title = '武汉信用——近年业务规模、业务收入情况';

option = {
    title: {
        text: '武汉信用投资集团近年业务规模、业务收入情况'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['业务规模', '业务收入']
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
        axisLabel: {
            formatter: '{value} 亿元'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2014年','2015年','2016年']
    },
    symbolSize: 20,
    animationEasing: function (k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    animationDuration: 2000,
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
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}