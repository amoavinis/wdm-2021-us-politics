export const demAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Democratic users and their ages'
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
            y: 178185
        }, {
            name: '30-49',
            y: 276229
        }, {
            name: '50-65',
            y: 20694
        }, {
            name: '66+',
            y: 2279
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
            y: 140491
        }, {
            name: '30-49',
            y: 177882
        }, {
            name: '50-65',
            y: 15707
        }, {
            name: '66+',
            y: 2414
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
        name: 'Gender',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 357646
        }, {
            name: 'Female',
            y: 119741
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
        name: 'Gender',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: 243939
        }, {
            name: 'Female',
            y: 92555
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
        data: [207199]
    }, {
        name: 'Neutral',
        data: [84291]
    }, {
        name: 'Positive',
        data: [185897]
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
        data: [121915]
    }, {
        name: 'Neutral',
        data: [78316]
    }, {
        name: 'Positive',
        data: [136263]
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
        data: [119957]
    },
    {
        name: '0.1-0.2',
        data: [23082]
    },
    {
        name: '0.2-0.3',
        data: [42719]
    },
    {
        name: '0.3-0.4',
        data: [43133]
    },
    {
        name: '0.4-0.5',
        data: [58896]
    },
    {
        name: '0.5-0.6',
        data: [79157]
    },
    {
        name: '0.6-0.7',
        data: [41959]
    },
    {
        name: '0.7-0.8',
        data: [23493]
    },
    {
        name: '0.8-0.9',
        data: [14689]
    },
    {
        name: '0.9-1',
        data: [30302]
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
        data: [107387]
    },
    {
        name: '0.1-0.2',
        data: [17535]
    },
    {
        name: '0.2-0.3',
        data: [30665]
    },
    {
        name: '0.3-0.4',
        data: [28987]
    },
    {
        name: '0.4-0.5',
        data: [35359]
    },
    {
        name: '0.5-0.6',
        data: [48828]
    },
    {
        name: '0.6-0.7',
        data: [24378]
    },
    {
        name: '0.7-0.8',
        data: [14398]
    },
    {
        name: '0.8-0.9',
        data: [8140]
    },
    {
        name: '0.9-1',
        data: [20817]
    }]
}