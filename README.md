# Ember-cli-inuitcss

A quick start to use inuitcss/itcss in an ember-cli app.

## Installation

* `npm install --save-dev broccoli-sass`
* `npm install --save-dev ember-cli-inuitcss`

## Usage

You can use the `app.scss` the addon provides or just use what you need.
The `app.scss` the addon provides:

```scss
// Inuit settings
// https://github.com/inuitcss/settings.defaults
$inuit-base-font-size:   12px;
$inuit-base-line-height: 18px;
$inuit-base-text-color: #333;
$inuit-base-background-color: #fff;
@import "inuit-defaults/settings.defaults";
// Your settings
// @import "settings.colors";

// https://github.com/inuitcss/settings.responsive
@import "inuit-responsive-settings/settings.responsive";

// Inuit tools
// https://github.com/inuitcss/tools.functions
@import "inuit-functions/tools.functions";
// https://github.com/inuitcss/tools.mixins
@import "inuit-mixins/tools.mixins";
// https://github.com/inuitcss/tools.responsive
@import "inuit-responsive-tools/tools.responsive";
// https://github.com/inuitcss/tools.widths
@import "inuit-tools-widths/tools.widths";

// Inuit generics
@import "inuit-normalize/generic.normalize";
@import "inuit-reset/generic.reset";
@import "inuit-box-sizing/generic.box-sizing";
@import "inuit-shared/generic.shared";

// Inuit base
// https://github.com/inuitcss/base.page
@import "inuit-page/base.page";

// https://github.com/inuitcss/base.headings
@import "inuit-headings/base.headings";
@import "inuit-lists/base.lists";
@import "inuit-images/base.images";
@import "inuit-paragraphs/base.paragraphs";

// Your base like
// @import "base.links";

// Inuit objects
// http://csswizardry.com/csswizardry-grids/
// https://github.com/csswizardry/csswizardry-grids
// https://github.com/inuitcss/objects.layout
@import "inuit-layout/objects.layout";
// see a full list of objects on github: https://github.com/inuitcss/?utf8=%E2%9C%93&query=objects

// Your components
// @import "components.page-head";

// Inuit trumps
@import "inuit-clearfix/trumps.clearfix";
@import "inuit-headings-trumps/trumps.headings";

$inuit-enable-paddings: true;
@import "inuit-spacing/trumps.spacing";
@import "inuit-spacing-responsive/trumps.spacing-responsive";

@import "inuit-widths/trumps.widths";
@import "inuit-widths-responsive/trumps.widths-responsive";

// Your trumps
// @import "trumps.widths";
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
