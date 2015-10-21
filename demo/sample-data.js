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
var demoItems3 = [
  {
    id: 'c8ske82k',
    first: 'Darla',
    last: 'Beaufort',
    phone: '19997776666',
    selected: true
  },
  {
    id: 'jkwuu833',
    first: 'Gordon',
    last: 'Bolster',
    phone: '12778737630',
    selected: false
  },
  {
    id: 'skjd39ss',
    first: 'Darren',
    last: 'Levitt',
    phone: '12129998888',
    selected: true
  }
];
var demoItems4 = [
  {
    id: 'c8ske82k',
    first: 'Darla',
    last: 'Beaufort',
    phone: '19997776666'
  },
  {
    id: 'jkwuu833',
    first: 'Gordon',
    last: {
      element: {
        tag: 'span',
        innerHTML: 'Fun Button',
        classes: [
          'btn',
          'btn-warning'
        ],
        events: [
          {
            in: 'click',
            out: 'hey-item-was-clicked'
          },
          {
            in: 'mouseover',
            out: 'wow-item-moused-over'
          }
        ]
      }
    },
    phone: '12778737630'
  },
  {
    id: 'skjd39ss',
    first: 'Darren',
    last: 'Levitt',
    phone: '12129998888'
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
