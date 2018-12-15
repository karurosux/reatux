# Reatux CLI Tool for React

## Description
This is a CLI tool for generating redux ready projects of react, with the capacity of generate 
more redux or react components too.

## Installation

> NodeJs 8.0.0 or newer version required.

For installing globally just run the command below:
```bash
npm -g install reatux
```
## Generate a project

> You can use `rtx` or `reatux` command for executing the tool, for comfort reasons, in this readme we will use `rtx`.

Create the folder where you want to create a project, open CLI Tool in that folder location, then execute the following command:

```bash
rtx app
```

The console will prompt some questions:

```bash
? What is the name of your application? myApp
? What package manager will you use? none
```

Answer them and voila, you generated a readux ready react application.

Also we have the way to directly specify the name of our app, we just need to execute the command as the following example:

```bash
rtx app myApp
```
Where `myApp` is the name given to the application.

## Generate components

There are 2 diferent types of components that could be generated with `reatux`:
- Container
- Presentational

Depending on the component that we want to generate, we could run 1 of the following commands:

```bash
rtx container
```
or 

```bash
rtx presentation
```
After running this command, `reatux` will just ask for the name of the component.

```bash
? Name of the container component? my-comp
   create src/containers/my-comp/my-comp.container.js
   create src/containers/my-comp/my-comp.container.scss
```
As `app` command, we can specify the name or also the route where we want our component to be generated.

```bash
rtx container my-component
```
or

```bash
rtx container subfolder1/subfolder2/my-component
```
`reatux` will handle both.

## Generating Reducers

The command for generating reducer is:

```bash
rtx reducer
```

or 

```bash
rxt reducer my-reducer
```
Where `my-reducer` could be the name of the reducer or the route inside the reducers folder.

## Configuration File

After generating a project, a file named `.reatux.json` will be also created into the folder, this file contains some important configuration for the `reatux` tool, it contains must be something like this:
```bash
{
  "appName": "myApp",
  "folders": {
    "reducers": "./src/reducers/",
    "actions": "./src/actions/",
    "containers": "./src/containers/",
    "presentations": "./src/presentations/",
    "types": "./src/types/",
    "tests": "./__tests__/"
  }
}
```
Here we can configure where we want our files to be generated, such as reducers or components, we just need to change  the values of folders.

## Command List
To see all the available commmands just execute the following command:
```bash
rtx --help
```

## Collaborate
If you want to make this tool grow up, dont hesitate to send me an email to `justdevelopitmx@gmail.com`.

## License

MIT © [Carlos Javier Gonzalez Vasquez]()

[npm-image]: https://badge.fury.io/js/generator-reatux.svg
[npm-url]: https://npmjs.org/package/generator-reatux
[travis-image]: https://travis-ci.org/karurosux/generator-reatux.svg?branch=master
[travis-url]: https://travis-ci.org/karurosux/generator-reatux
[daviddm-image]: https://david-dm.org/karurosux/generator-reatux.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/karurosux/generator-reatux
