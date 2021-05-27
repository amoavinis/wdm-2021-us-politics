export const topics = {
    chart: {
        type: 'packedbubble',
        //height: '100%'
    },
    title: {
        text: 'Emerging(trending) topics on Twitter regarding US Politics'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>Political Orientation:</b> {point.political}<br><b>Sentiment:</b> {point.sentiment}<br>\
        <b>Most representative words:</b>{point.representativeWords}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Period 1 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }, {
        name: 'Period 2 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }, {
        name: 'Period 3 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }, {
        name: 'Period 4 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }, {
        name: 'Period 5 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }, {
        name: 'Period 6 - from date to date',
        data: [{
            name: 'Topic1',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic2',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic3',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic4',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        }, {
            name: 'Topic5',
            political: '',
            sentiment: 0,
            representativeWords: '',
            value: 767.1
        },
        ]
    }]
}