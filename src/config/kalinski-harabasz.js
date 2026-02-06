export const kalinskiHarabasz = {
    title: {
      text: 'Number of clusters vs Calinski-Harabasz score (more is better)'
    },
    yAxis: {
      title: {
        text: 'Calinski-Harabasz score'
      }
    },
    xAxis: {
      title: {
        rangeDescription: 'Range: 2 to 10'
      },
      tickInterval: 1
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    colors: ['green'],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2
      }
    },
    series: [{
      name: 'Calinski-Harabasz score of clusters',
      data: [150824.40294700617, 150744.69492840386, 132957.57694523668, 125681.62753830913, 120965.35792147055, 118335.15112187467, 116761.18229413155, 114432.43839497097, 112360.32172689911]
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