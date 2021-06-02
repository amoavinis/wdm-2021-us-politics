export const daviesBouldin = {
    title: {
        text: 'Number of clusters vs Davies-Bouldin score score (less is better)'
    },
    yAxis: {
        title: {
            text: 'Davies-Bouldin score'
        }
    },
    xAxis: {
        title: {
            rangeDescription: 'Range: 2 to 10'
        },
        tickInterval: 1
    },
    colors: ['red'],
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
        name: 'Davies-Bouldin score of clusters',
        data: [2.3340179425393113, 1.97685034232358, 1.99730080145659, 1.8389113835313928, 1.7868579825557998, 1.7864821309092467, 1.6052272601718318, 1.5412942599164952, 1.5394636697625734]
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