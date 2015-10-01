# ll-table

Data-driven table generator.

Features:

- **Configuration-driven:** Generates and updates entire table from a single json object.
- **Table-less markup:** Table is built with divs and css, not a table element.
- **Static or configuration-generated cell content:** Table cell content can be simple text or configuration-generated html elements.
- **Configuration-generated elements with event firing:** Generate any html element within a cell by setting an html tag and optional attributes, class list, inner-html, and events handlers. Each element can have one or more events. Each event configuration represents an event to listen for, and a corresponding event to fire from ll-table. When such an event is fired, it includes a data object containing the item ID, the event's configuration, and all element attributes (including a pseudo 'checked' attribute for checkboxes and radio-buttons).
- **Column-wide repeating content:** Populate an entire column of cells with the same static or generated element by defining it in the column's configuration.
- **Configurable item ID collection:** For column-wide, repeating configuration-generated content, generates a list of item IDs filtered by the value of a particular attribute of each configuration-generated html element within each cell. You specify the attribute and the attribute value to filter by in the column configuration.
- **Column headers are optional.**


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
