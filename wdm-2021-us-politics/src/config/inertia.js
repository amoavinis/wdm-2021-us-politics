export const inertia = {
    title: {
        text: 'Number of clusters vs Inertia'
    },
    yAxis: {
        title: {
            text: 'Inertia value'
        }
    },
    xAxis: {
        title: {
            rangeDescription: 'Range: 2 to 10'
        }
    },
    colors: ['blue'],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2
        }
    },
    series: [{
        name: 'Inertia of clusters',
        data: [34772.482939862944, 30973.120617465043, 28930.04031596921, 27028.655040917416, 25388.238402777457, 23894.240100622737, 22540.91424972778, 21430.96591644874, 20448.169323247126]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 1000
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}