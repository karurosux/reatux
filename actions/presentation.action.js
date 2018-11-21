module.exports = props => name => {
  const { env } = props;

  env.run('presentation', {
    name
  });
};
