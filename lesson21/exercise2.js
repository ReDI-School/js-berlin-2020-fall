const germanyPopulationData = {
    x: ['Under 15', '15-25', '25-50', '50-65', '65-80', '80 and older'],
    y: [11391259, 8547674, 26041785, 19095311, 12409547, 5681135],
    name: 'Germany',
    type: 'bar'
};

const data = [germanyPopulationData];

const layout = {
    title: {
        text: 'Population in Germany by age group 2020'
    }
}

Plotly.newPlot('myGraph', data, layout);