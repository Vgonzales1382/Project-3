var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    dataLabels: {
        enabled: true,
        position: "top"
    },
    fill: {
        colors: [function ({ value, seriesIndex, w }) {
            if (value > 50) {
                return '#00e400'
            } else if (value >= 51 && value < 101) {
                return '#FFFF00'
            } else if (value >= 101 && value < 151) {
                return '#ff7e00'
            } else if (value >= 151 && value < 201) {
                return '#f00'
            } else if (value >= 201 && value < 301) {
                return '#8f3f97'
            } else {
                return '#7e0023'
            }
        }],
    },
    series: [],
    title: {
        text: "Air Quality Index in Selected Cities",
        floating: 0,
        offsetY: 320,
        align: "center",
        style: {
            color: "#444"
        }
    },
    noData: {
        text: 'Loading...'
    },
    xaxis: {
        categories: cityarray,

        position: "top",
        labels: {
            offsetY: -18
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();