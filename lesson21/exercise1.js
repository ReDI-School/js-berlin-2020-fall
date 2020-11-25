const germanyPopulationData = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [80827002, 80855632, 80972628, 81174367, 81450378, 81787411, 82193768, 82658409, 83124418, 83517045],
    name: 'Germany',
    type: 'scatter'
};

const usPopulationData = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [309011475, 311584047, 311584047, 316400538, 318673411, 320878310, 323015995, 325084756, 327096265, 329064917],
    name: 'USA',
    type: 'scatter'
};

const data = [germanyPopulationData, usPopulationData];

const layout = {
    title: {
        text: 'Population over time'
    },
    xaxis: {
        title: {
            text: 'Year'
        }
    },
    yaxis: {
        title: {
            text: 'Population'
        }
    }
}

Plotly.newPlot('myGraph', data, layout);