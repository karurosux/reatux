const { projectFileHelper } = require('../helpers');

const runApplicationGenerator = props => name => {
  return () => {
    const { env } = props;
    env.run('reatux', {
      appName: name
    });
  };
};

module.exports = props => (...args) => {
  projectFileHelper
    .ifNotProjectFolder()
    .then(runApplicationGenerator(props)(...args));
};
