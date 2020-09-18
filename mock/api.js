import mockjs from 'mockjs';

const titles = [
  'Slack',
  'Github',
  'Dribbble',
  'Zeplin',
  'Invision',
  'Jira',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://image.flaticon.com/icons/svg/732/732245.svg', // Slack
  'https://image.flaticon.com/icons/svg/733/733553.svg', // Github
  'https://image.flaticon.com/icons/svg/733/733544.svg', // Dribbble
  'https://cdn.worldvectorlogo.com/logos/zeplin.svg', // Zeplin
  'https://cdn.worldvectorlogo.com/logos/invision.svg', // Invision
  'https://cdn.worldvectorlogo.com/logos/jira-1.svg', // Jira
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://randomuser.me/api/portraits/men/35.jpg',
  'https://randomuser.me/api/portraits/women/35.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/women/36.jpg',
  'https://randomuser.me/api/portraits/men/37.jpg',
  'https://randomuser.me/api/portraits/women/37.jpg',
  'https://randomuser.me/api/portraits/men/38.jpg',
  'https://randomuser.me/api/portraits/women/38.jpg',
  'https://randomuser.me/api/portraits/men/39.jpg',
  'https://randomuser.me/api/portraits/women/39.jpg',
];

const covers = [
  'https://cdn.dribbble.com/users/110943/screenshots/3770982/02.jpg',
  'https://cdn.dribbble.com/users/366569/screenshots/3818287/gib-shot2.png',
  'https://cdn.dribbble.com/users/174756/screenshots/3565476/project_management_landingpage_anggityuniar_omnicreativora.png',
  'https://cdn.dribbble.com/users/1180831/screenshots/3623178/zeplin.png',
];
const desc = [
'Hel, they cant reach, they cant be touched',
'Hope is a good thing, maybe the best, good things wont die',
'Life is like a box of chocolates, and the results are often unexpected',
'There are so many pubs in the town, but she walked into my pub',
'At that time, I only thought about what I wanted, I didn’t want to have what I had',
];

const user = [
  'Thomas',
  'Kevin',
  'Banner',
  'Matt',
  'Riana',
  'Ari',
  'Mark',
  'Gifta',
  'Akram',
  'Princess',
];

function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        'In the development process of intermediate products, different design specifications and implementation methods will appear, but there are often many similar pages and components, and these similar components will be separated into a set of standard specifications',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        'The paragraph indicates: ant gold clothing design platform ant.design, with minimal workload, seamless access to ant gold clothing ecology, providing experience solutions across design and development. Ant ant design platform ant.design, with minimal workload, seamless access to ant gold clothing ecology, providing experience solutions across design and development',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'Jennys',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'Kevin',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'Matt',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

let sourceData;

function getFakeList(req, res) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  sourceData = result;
  return res.json(result);
}

function postFakeList(req, res) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData;

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = Object.assign(item, body);
        }
      });
      break;
    case 'post':
      result.unshift({
        body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.json(result);
}

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: 'Imagine what you’ll accomplish together, It’s a place where conversations happen, decisions are made, and information is always at your fingertips',
    updatedAt: new Date(),
    member: 'New Message',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: 'Join us for a day of sessions covering GitHub solutions, scaling, security, and more.',
    updatedAt: new Date('2019-07-24'),
    member: 'Pull Request',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: 'where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide.',
    updatedAt: new Date(),
    member: 'New Like',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: 'Connected space for product teams. Handoff designs and styleguides with accurate specs, assets, code snippets—automaticall',
    updatedAt: new Date(),
    member: 'New Comment',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: 'The digital product design platform powering the world’s best user experiences',
    updatedAt: new Date('2017-07-23'),
    member: 'Change Color',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: 'Powerful Project Management Software For Teams: Any Size, Anywhere. For Teams of All Sizes. Integrates w/ Other Tools. ',
    updatedAt: new Date('2017-07-23'),
    member: 'Dev Done',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: 'Mark',
      avatar: avatars2[0],
    },
    group: {
      name: 'High-force design',
      link: 'http://github.com/',
    },
    project: {
      name: 'June iteration',
      link: 'http://github.com/',
    },
    template: 'In @{group} New Project @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: 'Pay little',
      avatar: avatars2[1],
    },
    group: {
      name: 'High-force design',
      link: 'http://github.com/',
    },
    project: {
      name: 'June iteration',
      link: 'http://github.com/',
    },
    template: 'In @{group} New Project @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: 'Matt',
      avatar: avatars2[2],
    },
    group: {
      name: 'Secondary 2 Girls Group',
      link: 'http://github.com/',
    },
    project: {
      name: 'Kubro',
      link: 'http://github.com/',
    },
    template: 'in @{group} New Project @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: 'Matt',
      avatar: avatars2[4],
    },
    project: {
      name: '5 Monthly iterations',
      link: 'http://github.com/',
    },
    template: 'will @{project} Update to published status',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: 'Jen',
      avatar: avatars2[3],
    },
    project: {
      name: 'Engineering efficiency',
      link: 'http://github.com/',
    },
    comment: {
      name: 'Leave a Message',
      link: 'http://github.com/',
    },
    template: 'in @{project} Published @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: 'Lege',
      avatar: avatars2[5],
    },
    group: {
      name: 'Programmer everyday',
      link: 'http://github.com/',
    },
    project: {
      name: 'Brand iteration',
      link: 'http://github.com/',
    },
    template: 'in @{group} New Project @{project}',
  },
];

function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
}

export default {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
  'GET /api/fake_list': getFakeList,
  'POST /api/fake_list': postFakeList,
  'GET /api/captcha': getFakeCaptcha,
};
