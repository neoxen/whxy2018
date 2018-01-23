var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '武汉信用风险管理有限公司注册资本增长曲线',
        left: 'center',
        textStyle: {
            color: 'red',
            fontSize: '20'
        }
    },
    xAxis: {
        type: 'category',
        data: ['2002年11月', '2006年2月','2006年10月', '2007年7月', '2012年8月', '2012年10月', '2012年12月', '2016年2月','2016年7月' , '2017年12月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 万元'
        }
    },
    series: [{
        data: [2000, 10000, 20000, 40000, 100000, 150000, 200000, 500000, 800000, 810000],
        type: 'line',
        symbol: 'circle',
        symbolSize: 20,
        animationEasing: function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        animationDuration: 2000,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c} 万元',
                color: 'red'
            }
        },
        lineStyle: {
            normal: {
                color: 'red',
                width: 4,
                type: 'solid'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'red'
            }
        }
    }]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}