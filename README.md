# Ember-cli-inuitcss

A quick start to use inuitcss/itcss in an ember-cli app.

## Installation

* `ember install ember-cli-inuitcss`

## Usage

You can use the `app.scss` the addon provides or just use what you need.
The `app.scss` the addon provides looks like this:

For more information how to use inuitcss visit [https://github.com/inuitcss/inuitcss](https://github.com/inuitcss/inuitcss)

```scss
// SETTINGS
@import "inuitcss/settings/settings.core";
@import "settings/settings.config";
@import "settings/settings.global";

// TOOLS
@import "inuitcss/tools/tools.font-size";
@import "inuitcss/tools/tools.clearfix";
@import "sass-mq/mq";

// GENERIC
@import "inuitcss/generic/generic.box-sizing";
@import "inuitcss/generic/generic.normalize";
@import "inuitcss/generic/generic.shared";

// ELEMENTS
@import "inuitcss/elements/elements.page";
@import "inuitcss/elements/elements.headings";

// OBJECTS
@import "inuitcss/objects/objects.layout";
@import "inuitcss/objects/objects.media";
@import "inuitcss/objects/objects.flag";
@import "inuitcss/objects/objects.list-bare";
@import "inuitcss/objects/objects.list-inline";
@import "inuitcss/objects/objects.box";
@import "inuitcss/objects/objects.block";
@import "inuitcss/objects/objects.tables";

// COMPONENTS
@import "components/components.example";

// UTILITIES
@import "inuitcss/utilities/utilities.widths";
@import "inuitcss/utilities/utilities.headings";
@import "inuitcss/utilities/utilities.spacing";
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
