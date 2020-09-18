import mockjs from 'mockjs';

const basicGoods = [
  {
    id: '1234561',
    name: 'Mineral Water 550ml',
    barcode: '12421432143214321',
    price: '2.00',
    num: '1',
    amount: '2.00',
  },
  {
    id: '1234562',
    name: 'Herbal tea 300ml',
    barcode: '12421432143214322',
    price: '3.00',
    num: '2',
    amount: '6.00',
  },
  {
    id: '1234563',
    name: 'Delicious potato chips',
    barcode: '12421432143214323',
    price: '7.00',
    num: '4',
    amount: '28.00',
  },
  {
    id: '1234564',
    name: 'Particularly delicious egg rolls',
    barcode: '12421432143214324',
    price: '8.50',
    num: '3',
    amount: '25.50',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: 'Contact Clients',
    status: 'processing',
    operator: 'Picker ID1234',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: 'Picker departure',
    status: 'success',
    operator: 'Picker ID1234',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: 'Pick-up order',
    status: 'success',
    operator: 'Picker ID1234',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: 'Application approval',
    status: 'success',
    operator: 'System',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: 'Initiate a return request',
    status: 'success',
    operator: 'user',
    cost: '5mins',
  },
];

const advancedOperation1 = [
  {
    key: 'op1',
    type: 'Subscription relationship takes effect',
    name: 'Arie',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: 'Financial review',
    name: 'Heri',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Failure reason',
  },
  {
    key: 'op3',
    type: 'Departmental preliminary review',
    name: 'Armi',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: 'Submit orders',
    name: 'Alex',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Great',
  },
  {
    key: 'op5',
    type: '',
    name: 'Create Order',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation2 = [
  {
    key: 'op1',
    type: 'Subscription relationship takes effect',
    name: 'Alex',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation3 = [
  {
    key: 'op1',
    type: 'Create Order',
    name: 'Destya',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];
const getProfileAdvancedData = {
  advancedOperation1,
  advancedOperation2,
  advancedOperation3,
};

const { Random } = mockjs;

export default {
  'GET /api/profile/advanced': getProfileAdvancedData,
  'GET /api/profile/basic': (req, res) => {
    const { id } = req.query;
    const application = {
      id,
      status: 'Picked up',
      orderNo: Random.id(),
      childOrderNo: Random.id(),
    };
    const userInfo = {
      name: Random.cname(),
      tel: '18100000000',
      delivery: 'Rookie logistics',
      addr: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      remark: 'Remarks',
    };
    res.json({
      userInfo,
      application,
      basicGoods,
      basicProgress,
    });
  },
};
