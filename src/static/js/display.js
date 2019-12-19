// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('charts'));
let programTitleArr = data.map(d => d.name)
let programPollArr = data.map(d => d.poll)

// specify chart configuration item and data
var option = {
    title: {
        text: '实时投票'
    },
    tooltip: {},
    legend: {
        data:['Sales']
    },
    xAxis: {
        data: programTitleArr
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: programPollArr
    }]
};

// use configuration item and data specified to show chart
myChart.setOption(option);

const socket = io('http://192.168.199.108:8889')
socket.on('flush', (data) => {
    console.log('刷新', data)
    console.log('option', option)
    flush(data)
    myChart.setOption({
        xAxis: { data: programTitleArr},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: programPollArr
        }]
    });
})

const flush = (data) => {
    programTitleArr = data.map(d => d.name)
    programPollArr = data.map(d => d.poll)
}