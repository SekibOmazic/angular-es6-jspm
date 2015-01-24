import angular from 'angular';

import { TodoService } from './TodoService';
import { TodoCtrl } from './TodoCtrl';

let todoModule = angular.module('todoModule', [])
    .service('TodoService', TodoService)
    .controller('TodoCtrl', TodoCtrl);

todoModule.routeInfo = { templateUrl: 'lib/todo/todo.html', controller: 'TodoCtrl', controllerAs: 'tc' };

export { todoModule };
