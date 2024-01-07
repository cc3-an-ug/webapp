const hour = Math.random() * 24;
const minute = Math.random() * 60;
const second = Math.random() * 60;
const date = new Date(2024, 0, 5, hour, minute, second, 0).toString();

const { execSync } = require('child_process');

execSync(
  `GIT_COMMITTER_DATE="${date}" git commit --amend --no-edit --date "${date}"`,
);
