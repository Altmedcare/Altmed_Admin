import moment from 'moment';

// mock data
const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `Day ${i}`,
    count: Math.floor(Math.random() * 10000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: 'Samsung',
    y: 4544,
  },
  {
    x: 'Apple',
    y: 3321,
  },
  {
    x: 'Xioami',
    y: 3113,
  },
  {
    x: 'Asus',
    y: 2341,
  },
  {
    x: 'Lenovo',
    y: 1231,
  },
  {
    x: 'Vivo',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: 'Samsung',
    y: 244,
  },
  {
    x: 'Apple',
    y: 321,
  },
  {
    x: 'Xiaomi',
    y: 311,
  },
  {
    x: 'Asus',
    y: 41,
  },
  {
    x: 'Lenovo',
    y: 121,
  },
  {
    x: 'Vivo',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: 'Samsung',
    y: 99,
  },
  {
    x: 'Apple',
    y: 188,
  },
  {
    x: 'Xiaomi',
    y: 344,
  },
  {
    x: 'Asus',
    y: 255,
  },
  {
    x: 'Lenovo',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: 'Kevin',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: 'Christ',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: 'Selena',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData = [];
const radarTitleMap = {
  ref: 'Time',
  koubei: 'On',
  output: 'Activity',
  contribute: 'Responsive',
  hot: 'Log',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

export default {
  'GET /api/fake_chart_data': getFakeChartData,
};
