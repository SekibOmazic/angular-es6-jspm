class GitHubProvider {

  setUrl(url) {
    this.baseURL = url;
  }

  constructor() {
    this.$get = (http) => new GitHubCont(this.baseURL, http);
    this.$get.$inject = ['$http'];
  }

/*
  $get($http) {
    return new GitHubCont(this.baseURL, $http);
  }
*/

}


class GitHubCont {
  constructor(url, $http) {
    this.baseURL = url;
    this.$http = $http;
  }

  contributors (owner, repo) {
    console.log('PROVIDER');
    return this.$http.get(`${this.baseURL}/repos/${owner}/${repo}/contributors`)
      .then(data => data.data);
  }

}

export { GitHubProvider };
