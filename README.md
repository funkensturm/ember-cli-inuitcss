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
@import "bower_components/inuit-defaults/settings.defaults";
// Your settings
// @import "settings.colors";

// https://github.com/inuitcss/settings.responsive/blob/master/_settings.responsive.scss
@import "bower_components/inuit-responsive-settings/settings.responsive";

// Inuit tools
// https://github.com/inuitcss/tools.functions/blob/master/_tools.functions.scss
@import "bower_components/inuit-functions/tools.functions";
// https://github.com/inuitcss/tools.mixins/blob/master/_tools.mixins.scss
@import "bower_components/inuit-mixins/tools.mixins";
// https://github.com/inuitcss/tools.responsive/blob/master/_tools.responsive.scss
@import "bower_components/inuit-responsive-tools/tools.responsive";
// https://github.com/inuitcss/tools.widths/blob/master/_tools.widths.scss
@import "bower_components/inuit-tools-widths/tools.widths";

// add aliases `ember g ember-cli-inuitcss:aliases` don't forget to uncomment next line
// @import "tools.aliases";

// Inuit generics
@import "bower_components/inuit-normalize/generic.normalize";
@import "bower_components/inuit-reset/generic.reset";
@import "bower_components/inuit-box-sizing/generic.box-sizing";
@import "bower_components/inuit-shared/generic.shared";

// Inuit base
// https://github.com/inuitcss/base.page/blob/master/_base.page.scss
@import "bower_components/inuit-page/base.page";
// https://github.com/inuitcss/base.headings/blob/master/_base.headings.scss
@import "bower_components/inuit-headings/base.headings";
@import "bower_components/inuit-lists/base.lists";
@import "bower_components/inuit-images/base.images";
// Your base like
// @import "base.links";

// Inuit objects
// http://csswizardry.com/csswizardry-grids/
// https://github.com/csswizardry/csswizardry-grids
// https://github.com/inuitcss/objects.layout/blob/master/_objects.layout.scss
@import "bower_components/inuit-layout/objects.layout";
// see a full list of objects on github: https://github.com/inuitcss/?utf8=%E2%9C%93&query=objects

// Your components
// @import "components.page-head";

// Inuit trumps
@import "bower_components/inuit-clearfix/trumps.clearfix";

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
