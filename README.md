# ll-table

Data-driven table generator.

Features:

- **Configuration-driven:** Generates and updates entire table from a single json object. Dynamic insertion and deletion of individual rows is not supported.
- **Static or configuration-generated cell content:** Table cell content can be simple text or configuration-generated html elements.
- **Configuration-generated elements with event firing:** Generate any html element within a cell by setting an html tag and optional attributes, class list, inner-html, and list of event in/out pairs. The element listens for the "in" event and fires the corresponding "out" event with a data object containing the item ID, the event's configuration, and all element attributes (including a pseudo 'checked' attribute for checkboxes). Currently, only single, non-nested elements are supported.
- **Column-wide repeating content:** Populate an entire column of cells with the same static content or generated element by defining it in the column's configuration.
- **Configurable item ID selection and collection:** When a column definition contains an itemSelector node, the entire column of cells is populated with corresponding UI used to maintain an array of item IDs within the top-level "selectedItemIds" property. For example, if the 'assoc' column definition contains the node itemSelector: {type: 'checkbox'}, then a checkbox will appear in each cell of the column. Optionally, you may indicate which checkboxes are initially checked by setting the value of the 'assoc' key to true in the cfg.items[..].cells objects. Currently, only simple checkboxes are supported, but any other type of UI could be implemented.
- **Table-less markup:** Table is built with divs and css, not a table element.
- **Column headers are optional.**
- **'dev' attribute:** Set 'dev' attribute to true on ll-table to output debugging messages to console.


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
