'use client'

import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
        "month": "Januar",
        "Vermietete Tage": 1,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 30,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Februar",
        "Vermietete Tage": 0,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 28,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "März",
        "Vermietete Tage": 4,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 27,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "April",
        "Vermietete Tage": 20,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 10,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Mai",
        "Vermietete Tage": 10,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 21,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Juni",
        "Vermietete Tage": 21,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 9,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Juli",
        "Vermietete Tage": 22,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 9,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "August",
        "Vermietete Tage": 19,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 12,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "September",
        "Vermietete Tage": 15,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 15,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Oktober",
        "Vermietete Tage": 1,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 30,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "November",
        "Vermietete Tage": 3,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 27,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    },
    {
        "month": "Dezember",
        "Vermietete Tage": 2,
        "Vermietete TageColor": "hsl(258, 70%, 50%)",
        "Selbstnutzungstage": 29,
        "SelbstnutzungstageColor": "hsl(266, 70%, 50%)",
    }
]

const page = () => {
    return (
        <div className='h-[50vh]'>
            <h1>DASHBOARD</h1>

            <ResponsiveBar
                data={data}
                keys={['Vermietete Tage', 'Selbstnutzungstage']}
                indexBy="month"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderRadius={3}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 0
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Days',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 135,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />

        </div>
    )
}

export default page