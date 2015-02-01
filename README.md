# angular-es6-jspm

Sample application showing how to use AngularJS with ES6. Built with awesome [JSPM](Http://jspm.io)


## Setup
1. Install [NodeJS](http://nodejs.org/)
2. `npm install -g live-server`
3. `npm install -g jspm`
4. `jspm init` and just take default options
5. `jspm install angular@1.3.8 angular-route@1.3.8 angular-animate@1.3.8`
6. `jspm install github:marcorinck/angular-growl -o "{ main: 'build/angular-growl.min.js', dependencies: { 'angular': '1.3.8'} }"`
7. `jspm install bootstrap css@0.1.0`


## Running it

For running in development mode:

1. `live-server`
2. go to [localhost:8080](http://localhost:8080)

For running in production mode:

1. make a bundle with `jspm bundle-sfx lib/app`
2. edit index.html  - lines 8-11 and 49-61


## Issues

1. Due to following [issue](https://github.com/systemjs/builder/issues/12) it is not possible to dynamically import css files with `bundle-sfx` option. Workaround is to include css files in index.html directly

