module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
    }],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md"],
    }],
    ['@semantic-release/npm', {
      "pkgRoot": "lib"
    }]
  ],
};
