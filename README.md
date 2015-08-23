svgpng
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-svgpng
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-svgpng
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-svgpng.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-svgpng/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-svgpng
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-svgpng.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-svgpng.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-svgpng
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-svgpng.svg
[bd_npm_url]: http://www.npmjs.org/package/svgpng
[bd_npm_shield_url]: http://img.shields.io/npm/v/svgpng.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Node.js module to convert SVG image into PNG image.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install svgpng --save
```
Usage
----


```javascript
#!/usr/bin/env/node

var svgpng = require('svgpng');

svgpng(
    'src/foo.svg',
    'dest/foo.png',
    {
        size:{
            width:400,
            height:300
        }
    },
    function(err){
        /*...*/
    }
);

```



<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-svgpng/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [glob](https://www.npmjs.com/package/glob)

<!-- Links End -->
