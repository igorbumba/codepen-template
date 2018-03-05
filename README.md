# [CodePen](https://codepen.io/) template

You need to install node modules in order to run Gulp tasks. Executing the following before an npm install dramatically speeds up the process:

```bash
npm set progress=false
rm -rf node_modules
time npm install
```

## Gulp tasks

``default`` - HTML, SCSS and JS watcher with [Browsersync](https://browsersync.io/docs/gulp) that automatically loads ``./index.html`` file in the browser with the address ``http://localhost:3000/``

``SCSS`` - generates SCSS file ``./index.scss`` to CSS file ``./index.css``

``HTML`` - concats HTML files ``./template/header.html``, ``./_index.html`` and ``./template/footer.html`` to single HTML ``index.html``

## How to write and where?

- HTML frame - ``./_index.html``
- CSS/SCSS frame - ``./index.scss``
- JS frame - ``index.js``

### HTML

HTML (``./index.html``) is automatically generated from ``./_index.html``, ``./template/header.html`` and ``./template/footer.html`` files.

### CSS/SCSS

It's a common practice to apply CSS to a page that styles elements such that they are consistent across all browsers. CodePen offers two of the most popular choices: [normalize.css](https://necolas.github.io/normalize.css/) and a [reset](https://meyerweb.com/eric/tools/css/reset/).

To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance ``-webkit-`` or ``-moz-``.

Vendor prefixing is included in the Gulpfile ``default`` or ``sass`` task.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.