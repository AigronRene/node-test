const { execSync } = require('child_process');

try {
  const branchName = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();

  console.log('Current branch:', branchName);
} catch (error) {
  console.error('Error occurred:', error.message);
}
