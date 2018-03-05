# [CodePen](https://codepen.io/) template

You need to install node modules in order to run Gulp tasks. Executing the following before an npm install dramatically speeds up the process:

```bash
npm set progress=false
rm -rf node_modules
time npm install
```

## CSS Reset

It's a common practice to apply CSS to a page that styles elements such that they are consistent across all browsers. CodePen offers two of the most popular choices: [normalize.css](https://necolas.github.io/normalize.css/) and a [reset](https://meyerweb.com/eric/tools/css/reset/).

### Vendor prefixing (CSS)

To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance ``-webkit-`` or ``-moz-``.

Vendor prefixing is included in the Gulpfile ``default`` or ``sass`` task.