module.exports = {
  // The branches on which releases should happen
  branches: ["master"],
  repositoryUrl: "https://github.com/maelstrom-group/react-app",
  //Plugins are the things that actually do all the work in semantic-release.
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    //be responsible for creating a GitHub release
    "@semantic-release/github",
  ],
};
