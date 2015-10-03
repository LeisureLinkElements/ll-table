window.sampleData = {
  cols: {
    assoc: {
      content: {
        itemSelector: { // See README for more info.
          type: 'checkbox'
        }
      },
    },
    id: {
      label: 'Item ID' // Not necessary. Just for confirming check-box selections.
    },
    first: {
      label: 'First'
    },
    last: {
      label: 'Last'
    },
    phone: {
      label: 'Phone'
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
              out: 'remove-unit',
              itemIdOnly: true
            }
          ]
        }
      }
    }
  },
  items: [
    {
      id: 'c8ske82k',
      cells: {
        assoc: true,
        id:'c8ske82k',
        first: 'Charles',
        last: 'Koehl',
        phone: '18087782244'
      }
    },
    {
      id: 'jkwuu833',
      cells: {
        assoc: false,
        id:'jkwuu833',
        first: 'Gordon',
        last: {
          element: {
          tag: 'span',
          innerHTML: 'Fun',
          classes: [
            'btn',
            'btn-warning'
          ],
          events: [
            {
              in: 'click',
              out: 'clicking-sends-full-data'
            },
            {
              in: 'mouseover',
              out: 'mouseover-sends-just-item-id',
              itemIdOnly: true
            }
          ]
        }},
        phone: '12778737630'
      }
    },
    {
      id: 'skjd39ss',
      cells: {
        assoc: true,
        id:'skjd39ss',
        first: 'Darren',
        last: 'Levitt',
        phone: '12129998888'
      }
    }
  ]
};
