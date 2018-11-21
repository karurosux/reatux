module.exports = props => name => {
  const { env } = props;

  env.run('reatux', {
    appName: name
  });
};
