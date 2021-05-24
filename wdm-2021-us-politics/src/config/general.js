export const ageGeneral = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'General Demographics - Age of the users'
    },
    subtitle: {
        text: 'sample subtitle'
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
            y: 318676
        }, {
            name: '30-49',
            y: 454111
        }, {
            name: '50-65',
            y: 36401
        }, {
            name: '66+',
            y: 4693
        }]
    }]
}

export const genderGeneral = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'General Demographics - Gender of the users'
    },
    subtitle: {
        text: 'sample subtitle'
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
        name: 'Genders',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 601585
        }, {
            name: 'Female',
            y: 212296
        }]
    }]
}

export const politicalGeneral = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'General Demographics - Political affiliation of the users'
    },
    subtitle: {
        text: 'sample subtitle'
    },
    colors: ["#0062ff", "#ff2e2e"],
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
        name: 'Parties',
        colorByPoint: true,
        data: [{
            name: 'Democrats',
            y: 477387
        }, {
            name: 'Republicans',
            y: 336464
        }]
    }]
}

export const sentimentGeneral = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sentiment analysis of the tweets'
    },
    subtitle: {
        text: 'sample'
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
            text: 'Number of tweets',
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
        data: [329114]
    }, {
        name: 'Neutral',
        data: [162607]
    }, {
        name: 'Positive',
        data: [322160]
    }]
}

export const subjectivityGeneral = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Subjectivity analysis of the tweets'
    },
    subtitle: {
        text: 'sample'
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
            text: 'Number of tweets',
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
        data: [227344]
    },
    {
        name: '0.1-0.2',
        data: [40617]
    },
    {
        name: '0.2-0.3',
        data: [73384]
    },
    {
        name: '0.3-0.4',
        data: [72120]
    },
    {
        name: '0.4-0.5',
        data: [94255]
    },
    {
        name: '0.5-0.6',
        data: [127985]
    },
    {
        name: '0.6-0.7',
        data: [66337]
    },
    {
        name: '0.7-0.8',
        data: [37891]
    },
    {
        name: '0.8-0.9',
        data: [22829]
    },
    {
        name: '0.9-1',
        data: [51119]
    }]
}