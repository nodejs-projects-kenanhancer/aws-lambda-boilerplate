let common = [
    'tests/integrationTests/features',
    '--require-module ts-node/register',
    '--require tests/integrationTests/steps/**/*.ts',
    '--require .env',
    '--format @cucumber/pretty-formatter',
    '--format json:coverage/integration-tests-report.json',
    '--publish'
  ].join(' ');
  
  module.exports = {
    default: common,
    // More profiles can be added if desired
  };