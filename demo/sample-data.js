/*
Variable names below to not correspond to demo numbers.
 */

var demoItems1 = [
  {
    first: 'Darla',
    last: 'Beaufort',
    phone: '19997776666'
  },
  {
    first: 'Gordon',
    last: 'Bolster',
    phone: '12778737630'
  },
  {
    first: 'Darren',
    last: 'Levitt',
    phone: '12129998888'
  }
];
var demoItems2 = [
  {
    id: 'c8ske82k',
    first: 'Darla',
    last: 'Beaufort',
    phone: '19997776666'
  },
  {
    id: 'jkwuu833',
    first: 'Gordon',
    last: 'Bolster',
    phone: '12778737630'
  },
  {
    id: 'skjd39ss',
    first: 'Darren',
    last: 'Levitt',
    phone: '12129998888'
  }
];

var demoItems5 = [];
for(var i=0;i<100;i++) {
  demoItems5.push({
    id: randomString(20),
    first: randomString(10),
    last: randomString(10),
    phone: randomString(10),
    addr: randomString(10)
  });
}

var demoItems6 = [
  {
    id: 'c8ske82k',
    first_name: 'Darla',
    last_name: 'Beaufort',
    phone_num: '19997776666'
  },
  {
    id: 'jkwuu833',
    first_name: 'Gordon',
    last_name: 'Bolster',
    phone_num: '12778737630'
  },
  {
    id: 'skjd39ss',
    first_name: 'Darren',
    last_name: 'Levitt',
    phone_num: '12129998888'
  }
];


var demoColumns1 =
{
  first: {
    label: 'First Name'
  },
  last: {
    label: 'Last Name'
  },
  phone: {
    label: 'Telephone'
  }
};

var demoColumns2 =
{
  first: {
    label: 'First Name'
  },
  last: {
    label: 'Last Name'
  },
  phone: {
    label: 'Telephone'
  },
  action: {
    label: 'Action',
    content: { // Overrides content of each cell in this column.
      element: {
        tag: 'span',
        innerHTML: 'DEL',
        classes: [
          'btn',
          'btn-primary',
          'remove-unit'
        ],
        events: [
          {
            in: 'click',
            out: 'delete-it-dude' // Can be any string
          }
        ]
      }
    }
  }
};

function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}
