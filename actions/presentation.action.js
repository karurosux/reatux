const { projectFileHelper } = require('../helpers');

const createPresentationaComponent = props => name => {
  const { env } = props;
  env.run('presentation', {
    name
  });
};

module.exports = props => (...args) => {
  projectFileHelper
    .ifProjectFolder()
    .then(createPresentationaComponent(props)(...args));
};
