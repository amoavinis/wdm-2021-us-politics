export const ageGeneral = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'General Demographics - Age of the users'
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
            y: 31.15
        }, {
            name: '30-49',
            y: 55.79
        }, {
            name: '50-65',
            y: 4.47
        }, {
            name: '66+',
            y: 0.57
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
        name: 'Genders',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 73.91
        }, {
            name: 'Female',
            y: 26.09
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
        text: ''
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
            y: 58.65
        }, {
            name: 'Republicans',
            y: 41.35
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
        data: [40.43]
    }, {
        name: 'Neutral',
        data: [19.97]
    }, {
        name: 'Positive',
        data: [39.58]
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
        data: [27.95]
    },
    {
        name: '0.1-0.2',
        data: [4.92]
    },
    {
        name: '0.2-0.3',
        data: [8.99]
    },
    {
        name: '0.3-0.4',
        data: [8.86]
    },
    {
        name: '0.4-0.5',
        data: [11.57]
    },
    {
        name: '0.5-0.6',
        data: [15.76]
    },
    {
        name: '0.6-0.7',
        data: [8.12]
    },
    {
        name: '0.7-0.8',
        data: [4.67]
    },
    {
        name: '0.8-0.9',
        data: [2.83]
    },
    {
        name: '0.9-1',
        data: [6.28]
    }]
}