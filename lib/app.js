import angular from 'angular';
import 'angular-animate';
import 'angular-growl';
import 'angular-route';

/*
 due to issue (https://github.com/systemjs/builder/issues/12)
 it is not possible to dynamically import css when bundling the app with
 jspm bundle-sfx lib/app --minify
 As a workaround you'd have to include CSS files directly into index.html
 */
import 'bootstrap/css/bootstrap.css!';
import './todo/todo.css!';

import { todoModule } from './todo/module'
import { gitHubModule } from './github/module';

import { Routes } from './Routes';

let app = angular.module('todo', [
  'ngAnimate',
  'angular-growl',
  'ngRoute',
  todoModule.name,
  gitHubModule.name
]);

app.config(Routes);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['todo']);
});


export { app };
