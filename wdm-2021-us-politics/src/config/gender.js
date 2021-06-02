export const femaleAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Female users and their ages'
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
            y: 46.19
        }, {
            name: '30-49',
            y: 50.26
        }, {
            name: '50-65',
            y: 3.07
        }, {
            name: '66+',
            y: 0.46
        }]
    }]
}

export const maleAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Male users and their ages'
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
            y: 36.66
        }, {
            name: '30-49',
            y: 57.74
        }, {
            name: '50-65',
            y: 4.96
        }, {
            name: '66+',
            y: 0.61
        }]
    }]
}

export const femalePolitical = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'Female users and their political orientation'
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
        name: 'Political orientation',
        colorByPoint: true,
        data: [{
            name: 'Democrats',
            y: 56.40
        }, {
            name: 'Republicans',
            y: 43.60
        }]
    }]
}

export const malePolitical = {
    chart: {
        type: 'pie',
    },
    title: {
        text: 'Male users and their political orientation'
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
        name: 'Political orientation',
        colorByPoint: true,
        data: [{
            name: 'Democrats',
            y: 59.46
        }, {
            name: 'Republicans',
            y: 40.54
        }]
    }]
}

export const femaleSentiment = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Female users and their sentiment analysis'
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
        data: [38.33]
    }, {
        name: 'Neutral',
        data: [19.09]
    }, {
        name: 'Positive',
        data: [42.57]
    }]
}

export const maleSentiment = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Male users and their sentiment analysis'
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
        data: [41.18]
    }, {
        name: 'Neutral',
        data: [20.29]
    }, {
        name: 'Positive',
        data: [38.53]
    }]
}

export const femaleSubjectivity = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Female users and their subjectivity'
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
        data: [27.00]
    },
    {
        name: '0.1-0.2',
        data: [4.26]
    },
    {
        name: '0.2-0.3',
        data: [7.69]
    },
    {
        name: '0.3-0.4',
        data: [8.46]
    },
    {
        name: '0.4-0.5',
        data: [11.57]
    },
    {
        name: '0.5-0.6',
        data: [16.19]
    },
    {
        name: '0.6-0.7',
        data: [8.72]
    },
    {
        name: '0.7-0.8',
        data: [5.20]
    },
    {
        name: '0.8-0.9',
        data: [3.49]
    },
    {
        name: '0.9-1',
        data: [7.42]
    }]
}

export const maleSubjectivity = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Male users and their subjectivity'
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
        data: [28.26]
    },
    {
        name: '0.1-0.2',
        data: [5.24]
    },
    {
        name: '0.2-0.3',
        data: [9.48]
    },
    {
        name: '0.3-0.4',
        data: [9.00]
    },
    {
        name: '0.4-0.5',
        data: [11.58]
    },
    {
        name: '0.5-0.6',
        data: [15.56]
    },
    {
        name: '0.6-0.7',
        data: [7.95]
    },
    {
        name: '0.7-0.8',
        data: [4.46]
    },
    {
        name: '0.8-0.9',
        data: [2.58]
    },
    {
        name: '0.9-1',
        data: [5.87]
    }]
}