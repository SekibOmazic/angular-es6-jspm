class GitHubCtrl {

  constructor(GitHub) {
    this.gitHubService = GitHub;

    this.contributors = [];
  }

  getContributors(owner, repo) {
    this.gitHubService.contributors(owner, repo).then(contributors => {
      this.contributors = contributors;
    });
  }

}

// use this line if you want to se a factory in action
GitHubCtrl.$inject = ['GitHubService'];

// use this line if you want to see provider in action
//GitHubCtrl.$inject = ['GitHub'];

export { GitHubCtrl };
