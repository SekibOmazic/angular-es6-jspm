import { todoModule } from './todo/module';
import { gitHubModule } from './github/module';

class Routes {

  constructor($routeProvider) {
    $routeProvider
      .when('/todo', todoModule.routeInfo)
      .when('/github', gitHubModule.routeInfo)
      .otherwise({
        redirectTo: '/todo'
      })
  }

}

Routes.$inject = ['$routeProvider'];

export { Routes };
