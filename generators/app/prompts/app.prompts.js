module.exports = {
  app: [
    {
      type: 'input',
      name: 'appName',
      message: 'What is the name of your application?',
      default: 'app'
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'What package manager will you use?',
      choices: ['none', 'yarn', 'npm'],
      default: 'npm'
    }
  ]
};
