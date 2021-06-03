export const demAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Democratic users and their ages'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Age groups',
        colorByPoint: true,
        data: [{
            name: '18-29',
            y: 37.13
        }, {
            name: '30-49',
            y: 57.86
        }, {
            name: '50-65',
            y: 4.19
        }, {
            name: '66+',
            y: 0.42
        }]
    }]
}

export const repAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Republican users and their ages'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Age groups',
        colorByPoint: true,
        data: [{
            name: '18-29',
            y: 41.66
        }, {
            name: '30-49',
            y: 52.97
        }, {
            name: '50-65',
            y: 4.76
        }, {
            name: '66+',
            y: 0.59
        }]
    }]
}

export const demGender = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Democratic users and their gender'
    },
    subtitle: {
        text: ''
    },
    colors: ["#7cb5ec", "#f15c80"],
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Gender',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 74.84
        }, {
            name: 'Female',
            y: 25.15
        }]
    }]
}

export const repGender = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Republican users and their gender'
    },
    subtitle: {
        text: ''
    },
    colors: ["#7cb5ec", "#f15c80"],
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Gender',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 72.61
        }, {
            name: 'Female',
            y: 27.38
        }]
    }]
}

export const demSentiment = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Democratic users and their sentiment analysis'
    },
    subtitle: {
        text: ''
    },
    colors: ["#ff2e2e", "#fdff7a", "#39fa3d"],
    xAxis: {
        categories: ['Sentiment'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of tweets',
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Negative',
        data: [43.39]
    }, {
        name: 'Neutral',
        data: [17.61]
    }, {
        name: 'Positive',
        data: [38.99]
    }]
}

export const repSentiment = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Republican users and their sentiment analysis'
    },
    subtitle: {
        text: ''
    },
    colors: ["#ff2e2e", "#fdff7a", "#39fa3d"],
    xAxis: {
        categories: ['Sentiment'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of tweets',
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Negative',
        data: [36.30]
    }, {
        name: 'Neutral',
        data: [23.21]
    }, {
        name: 'Positive',
        data: [40.47]
    }]
}

export const demSubjectivity = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Democratic users and their subjectivity'
    },
    subtitle: {
        text: ''
    },
    colors: ["#7cb5ec"],
    xAxis: {
        categories: ['Subjectivity'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of tweets',
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '0-0.1',
        data: [25.21]
    },
    {
        name: '0.1-0.2',
        data: [4.83]
    },
    {
        name: '0.2-0.3',
        data: [8.82]
    },
    {
        name: '0.3-0.4',
        data: [9.03]
    },
    {
        name: '0.4-0.5',
        data: [12.39]
    },
    {
        name: '0.5-0.6',
        data: [16.59]
    },
    {
        name: '0.6-0.7',
        data: [8.82]
    },
    {
        name: '0.7-0.8',
        data: [4.83]
    },
    {
        name: '0.8-0.9',
        data: [3.15]
    },
    {
        name: '0.9-1',
        data: [6.30]
    }]
}

export const repSubjectivity = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Republican users and their subjectivity'
    },
    subtitle: {
        text: ''
    },
    colors: ["#7cb5ec"],
    xAxis: {
        categories: ['Subjectivity'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of tweets',
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '0-0.1',
        data: [32.03]
    },
    {
        name: '0.1-0.2',
        data: [5.09]
    },
    {
        name: '0.2-0.3',
        data: [8.98]
    },
    {
        name: '0.3-0.4',
        data: [8.68]
    },
    {
        name: '0.4-0.5',
        data: [10.47]
    },
    {
        name: '0.5-0.6',
        data: [14.67]
    },
    {
        name: '0.6-0.7',
        data: [7.18]
    },
    {
        name: '0.7-0.8',
        data: [4.19]
    },
    {
        name: '0.8-0.9',
        data: [2.39]
    },
    {
        name: '0.9-1',
        data: [6.28]
    }]
}

export const agePolitical = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Distribution of age group by political orientation'
    },
    xAxis: {
        categories: ['Democrats', 'Republicans']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: '18-29',
        data: [21.83, 17.27]
    }, {
        name: '30-49',
        data: [33.98, 22.40]
    },{
        name: '50-65',
        data: [2.47, 1.98]
    }, {
        name: '66+',
        data: [0.26, 0.25]
    }]
}

export const genderPolitical = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Distribution of gender by political orientation'
    },
    colors: ["#7cb5ec", "#f15c80"],
    xAxis: {
        categories: ['Democrats', 'Republicans']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Male',
        data: [43.90, 30.03]
    }, {
        name: 'Female',
        data: [14.75, 11.32]
    }]
}