class GitHubService {

  constructor($http) {
    this.$http = $http;
    this.baseURL = 'https://api.github.com';
  }

  contributors (owner, repo) {
    console.log('SERVICE');
    return this.$http.get(`${this.baseURL}/repos/${owner}/${repo}/contributors`)
      .then(data => data.data);
  }

  static gitHubFactory($http) {
    return new GitHubService($http);
  }

}

GitHubService.gitHubFactory.$inject = ['$http'];

export { GitHubService };
