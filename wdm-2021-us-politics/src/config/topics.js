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
        pointFormat: '<b>{point.name}</b> <br> <b>Political Orientation:</b> {point.political}<br><b>Sentiment:</b> {point.sentiment}<br>\
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
        name: 'Period 6 - from 17 Nov to 30 Nov',
        data: [{
            name: 'Stop counting/recount movement',
            political: 'Democrats -> 15285, Republicans->12934',
            sentiment: 'pos -> 10482, neg -> 11671, neu -> 6066',
            representativeWords: 'ballot, georgia, court, count, recount',
            value: 28219
        }, {
            name: "Biden's goals & message for unity",
            political: 'Democrats -> 12644, Republicans->7221',
            sentiment: 'pos -> 7738, neg -> 9158, neu -> 2969',
            representativeWords: 'make, year, life ,people, american',
            value: 19865
        }, {
            name: "Biden's goals message for unity",
            political: 'Democrats -> 21456, Republicans->13464',
            sentiment: 'pos -> 15004, neg -> 14227, neu -> 5689',
            representativeWords: 'like, people, want, care, support',
            value: 34920
        }, {
            name: 'Voting fraud claims',
            political: 'Democrats -> 10189, Republicans->10011',
            sentiment: 'pos -> 5810, neg -> 9508, neu -> 4882',
            representativeWords: 'fraud, evid, votter, claim, legal',
            value: 20200
        }, {
            name: 'Trump starts giving pardons (Comparison with Obama)',
            political: 'Democrats -> 14969, Republicans->8750',
            sentiment: 'pos -> 10342, neg -> 8695, neu -> 4682',
            representativeWords: 'pardon, obama, flynn, state',
            value: 23719
        },
        ]
    }, {
        name: 'Period 5 - from 3 Nov to 16 Nov',
        data: [{
            name: "Ballot's counting",
            political: 'Democrats -> 23700, Republicans->17544',
            sentiment: 'pos -> 14455, neg -> 17329, neu -> 9460',
            representativeWords: 'ballot, count. state, fraud, win',
            value: 41244
        }, {
            name: 'Theories of vote fraud"',
            political: 'Democrats -> 8388, Republicans->9410',
            sentiment: 'pos -> 4508, neg -> 5738, neu -> 7552',
            representativeWords: 'donald, president, fraud',
            value: 17798
        }, {
            name: 'Senate election battle',
            political: 'Democrats -> 19031, Republicans->11816',
            sentiment: 'pos -> 15092, neg -> 10656, neu -> 5099',
            representativeWords: 'senat, american, peopl, need',
            value: 30847
        }, {
            name: "Biden's goals/comitments",
            political: 'Democrats -> 11658, Republicans-> 8725',
            sentiment: 'pos -> 9819, neg -> 7012, neu -> 3552',
            representativeWords: '',
            value: 20383
        }, {
            name: 'Kamala Harris first woman in office',
            political: 'Democrats -> 13930, Republicans-> 7410',
            sentiment: 'pos -> 8312, neg -> 8147, neu -> 4881',
            representativeWords: 'watch, first, offic, victori, woman',
            value: 21340
        },
        ]
    }, {
        name: 'Period 3 - from 6 Oct to 19 Oct',
        data: [{
            name: 'Affordable Care Act (Obamacare) in Supreme Court',
            political: 'Democrats -> 19786, Republicans->12513',
            sentiment: 'pos -> 13167, neg -> 13309, neu -> 5823',
            representativeWords: 'american, care, court, health',
            value: 32299
        }, {
            name: 'The first Vice Presidential debate',
            political: 'Democrats -> 18272, Republicans->10776',
            sentiment: 'pos -> 12093, neg -> 11038, neu -> 5917',
            representativeWords: 'penc, kamala, harri, mike',
            value: 29048
        }, {
            name: "Trump & Biden's Duelling Town Halls",
            political: 'Democrats -> 15489, Republicans->11555',
            sentiment: 'pos -> 11290, neg -> 10308, neu -> 5446',
            representativeWords: 'town, hall, ralli',
            value: 27044
        }, {
            name: 'Hunter Biden emails to Ukrainian Businessman',
            political: 'Democrats -> 16859, Republicans->13343',
            sentiment: 'pos -> 9832, neg -> 13569, neu -> 6801',
            representativeWords: 'hunter, email, russian, report',
            value: 30202
        }, {
            name: 'Supreme Court decisions about ballots',
            political: 'Democrats -> 11626, Republicans->12867',
            sentiment: 'pos -> 10537, neg -> 9317, neu -> 4639',
            representativeWords: 'ballot, court, state, confirm',
            value: 24493
        },
        ]
    }, {
        name: 'Period 1 - from 8 Sept to 21 Sept',
        data: [{
            name: "State Houses' responses for COVID",
            political: 'Democrats -> 19554, Republicans->11436',
            sentiment: 'pos -> 11063, neg -> 14887, neu -> 5040',
            representativeWords: 'state, house, response, death',
            value: 30990
        }, {
            name: 'WFH',
            political: 'Democrats -> 18334, Republicans->12948',
            sentiment: 'pos -> 13344, neg -> 12804, neu -> 5134',
            representativeWords: 'make, want, go, work, like',
            value: 31282
        }, {
            name: 'Supreme Court Justice Ginsburg death & replacement',
            political: 'Democrats -> 15528, Republicans->10228',
            sentiment: 'pos -> 11719, neg -> 10037, neu -> 4000',
            representativeWords: 'justice, court, elect, supreme, ginsburg',
            value: 25756
        }, {
            name: "Trump's video attack to Kamala Harris",
            political: 'Democrats -> 12005, Republicans->9372',
            sentiment: 'pos -> 9209, neg -> 9007, neu -> 3161',
            representativeWords: 'kamala. peace, fire, ralli',
            value: 21377
        }, {
            name: 'Start of mail voting',
            political: 'Democrats -> 17138, Republicans->10156',
            sentiment: 'pos -> 9459, neg -> 13487, neu -> 4348',
            representativeWords: 'ballot, voter, mail, elect',
            value: 27294
        },
        ]
    }, {
        name: 'Period 2 - from 22 Sept to 5 Oct',
        data: [{
            name: 'Supreme Court Justice replacement Amy Coney Barrett',
            political: 'Democrats -> 17583, Republicans->10080',
            sentiment: 'pos -> 12143, neg -> 9324, neu -> 6196',
            representativeWords: 'court, suprem, elect, barrett',
            value: 27663
        }, {
            name: "Trump's taxes",
            political: 'Democrats -> 22175, Republicans->11591',
            sentiment: 'pos -> 13259, neg -> 13880, neu -> 6627',
            representativeWords: 'paid, tax, donald, year',
            value: 33766
        }, {
            name: 'White voters change of preferences',
            political: 'Democrats -> 16881, Republicans->11914',
            sentiment: 'pos -> 13223, neg -> 10560, neu -> 5012',
            representativeWords: 'white, ballot, voter',
            value: 28795
        }, {
            name: 'The first 2020 presidential debate 30 sep',
            political: 'Democrats -> 14252, Republicans->10217',
            sentiment: 'pos -> 8363, neg -> 9986, neu -> 6120',
            representativeWords: 'die, debate, million',
            value: 24469
        }, {
            name: 'Covid',
            political: 'Democrats -> 17539, Republicans->10147',
            sentiment: 'pos -> 11130, neg -> 11808, neu -> 4748',
            representativeWords: 'mask, wear, test, countri',
            value: 27686
        },
        ]
    }, {
        name: 'Period 4 - from 20 Oct to 2 Nov',
        data: [{
            name: 'Trump and Biden final debate',
            political: 'Democrats -> 21104, Republicans->12638',
            sentiment: 'pos -> 12011, neg -> 14970, neu -> 6761',
            representativeWords: 'american, debate, covid, countri',
            value: 33742
        }, {
            name: 'Biden campaign to Texas',
            political: 'Democrats -> 10336, Republicans->9534',
            sentiment: 'pos -> 6699, neg -> 8641, neu -> 4530',
            representativeWords: 'campaign, texas, voter, million',
            value: 19870
        }, {
            name: 'Supporting or not Kamala Harris"',
            political: 'Democrats -> 13269, Republicans->10373',
            sentiment: 'pos -> 9200, neg -> 9583, neu -> 4859',
            representativeWords: 'support, like, kamala, shut',
            value: 23642
        }, {
            name: 'Hunter Biden and his China business dealings',
            political: 'Democrats -> 12059, Republicans->10933',
            sentiment: 'pos -> 8313, neg -> 8329, neu -> 6350',
            representativeWords: 'hunter, china, famili, laptop',
            value: 22992
        }, {
            name: 'Elections forecasts',
            political: 'Democrats -> 17474, Republicans->15462',
            sentiment: 'pos -> 17372, neg -> 9301, neu -> 6263',
            representativeWords: 'elect, ballot, make',
            value: 32936
        },
        ]
    }]
}