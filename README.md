# ll-table

Data-driven table generator.

Features:


- **Configuration-driven:** Generates and updates entire table from one required and one optional json object, plus optional element attributes. (See demo and /demo/sample-data.js for examples.) Dynamic insertion and deletion of individual rows is not supported.
- **Static or configuration-generated cell content:** Table cell content can be simple text or configuration-generated html elements:
    * Example - Static cell content: Any string or numeric data. (No HTML tags).
    * Example - Configuration-generated cell content with event-handling. If you need a more complete HTML element displayed within a cell, use an 'element' object in place of a string or number:
      
        element: {
          tag: 'span', // The type of HTML element that to generate.
          innerHTML: 'DELETE', // Optional content inside tag (currently no HTML allowed inside the main HTML tag)
          classes: [ // Optional list of classes to add to the element. Does not override the Polymer classes automatically added by Polymer.dom.
            'btn',
            'btn-primary',
            'remove-unit'
          ],
          events: [ // Optional event configuration:
            {
              in: 'click', // Event to listen for.
              out: 'remove-unit', // Event to fire.
            }
          ]
        }
      
- **Column-wide repeating content:** Populate an entire column of cells with the same static content or generated element by defining it in the column's configuration.
- **Column-wide item selection UI:** Any column may be designated as an item selection UI column. In this case, the entire column of cells is populated with a UI corresponding to the itemSelector.type. The "selectedItemIds" array property reflects which items are selected. Optionally, you may indicate which checkboxes are initially checked by setting the value of the 'selected' key to true in the cfg.items[..].cells objects. ('selected' is never displayed as a column value itself). Currently, only simple checkboxes are supported, but any other type of UI could be implemented.
- **Table-less markup:** Table is built with divs and css, not a table element.
- **Optional column headers:** To show column header row, include a 'label' node in at least one column definition.


## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/ll-table/`, where `ll-table` is the name of the directory containing it.

Mess around with /demo/sample-data.js


## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/ll-table/test/`


### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.
