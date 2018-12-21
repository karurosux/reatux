const { projectFileHelper } = require('../helpers');

const createContainerComponent = props => name => {
  return () => {
    const { env } = props;
    env.run('container', {
      name,
      force: true
    });
  };
};

module.exports = props => (...args) => {
  projectFileHelper
    .ifProjectFolder()
    .then(createContainerComponent(props)(...args));
};
