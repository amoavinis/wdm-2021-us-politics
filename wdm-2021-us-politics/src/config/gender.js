export const femaleAge = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Female users and their ages'
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
            y: 98079
        }, {
            name: '30-49',
            y: 106716
        }, {
            name: '50-65',
            y: 6524
        }, {
            name: '66+',
            y: 977
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
            y: 220597
        }, {
            name: '30-49',
            y: 347395
        }, {
            name: '50-65',
            y: 29877
        }, {
            name: '66+',
            y: 3716
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
        name: 'Political orientation',
        colorByPoint: true,
        data: [{
            name: 'Democrats',
            y: 119741
        }, {
            name: 'Republicans',
            y: 92555
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
        name: 'Political orientation',
        colorByPoint: true,
        data: [{
            name: 'Democrats',
            y: 357646
        }, {
            name: 'Republicans',
            y: 243939
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
        data: [81379]
    }, {
        name: 'Neutral',
        data: [40536]
    }, {
        name: 'Positive',
        data: [90381]
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
        data: [247735]
    }, {
        name: 'Neutral',
        data: [122071]
    }, {
        name: 'Positive',
        data: [231779]
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
        data: [57318]
    },
    {
        name: '0.1-0.2',
        data: [9050]
    },
    {
        name: '0.2-0.3',
        data: [16337]
    },
    {
        name: '0.3-0.4',
        data: [17967]
    },
    {
        name: '0.4-0.5',
        data: [24581]
    },
    {
        name: '0.5-0.6',
        data: [34388]
    },
    {
        name: '0.6-0.7',
        data: [18521]
    },
    {
        name: '0.7-0.8',
        data: [11056]
    },
    {
        name: '0.8-0.9',
        data: [7309]
    },
    {
        name: '0.9-1',
        data: [15769]
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
        data: [170026]
    },
    {
        name: '0.1-0.2',
        data: [31567]
    },
    {
        name: '0.2-0.3',
        data: [57047]
    },
    {
        name: '0.3-0.4',
        data: [54153]
    },
    {
        name: '0.4-0.5',
        data: [69674]
    },
    {
        name: '0.5-0.6',
        data: [93597]
    },
    {
        name: '0.6-0.7',
        data: [47816]
    },
    {
        name: '0.7-0.8',
        data: [26835]
    },
    {
        name: '0.8-0.9',
        data: [15520]
    },
    {
        name: '0.9-1',
        data: [35350]
    }]
}