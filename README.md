# React Tap Room

This project was the result of our first week of studies in React at Epicodus. It is a single page app focused on practicing the styling differences between react and all other frameworks.
## Getting Started

1. download the repository from ```https://github.com/cworf/react-tap-room``` or use ```$ git clone https://github.com/cworf/react-tap-room```
2. from the project root, run ```$ npm i``` to install the dependencies
3. run ```npm run start``` to initialize the server and the project will automatically open in your default browser.


### Prerequisites

The .eslintrc.json file is set up in the project but because I use the eslint plugin in atom I dont have it set up in the webpack pipeline. either install https://atom.io/packages/linter-eslint or add the linter rules below into the webpack.config.js file in the root directory

```
...
module: {
  rules: [
    {
      test: /\.jsx?$/,
      enforce: "pre",
      loader: "eslint-loader",
      exclude: /node_modules/,
      options: {
        emitWarning: true,
        configFile: "./.eslintrc.json"
      }
    },
...
```

## Component tree

![Alt text](src/assets/images/tapRoom.jpg?raw=true "Flow Chart")

## Notes

##### Unforeseen issues

I thought on this one for a while, and other than the obvious issue of not being able to modify the data in any way due to the fact that all props are read only and pure, I did not run into any Unforeseen issues. I practiced installing and using the Material css framework. however some of their more advanced modules required the use of statefull components which I dont yet fully grasp, so I left them alone.

##### Differences

So far most of what we have learned has just been in styling and ui flow. At first I didnt like the inline styling aspect, and there are still some moments, but its growing on me, because it forces you to use the most efficient styling methods possible lest you not be DRY.

As Far as everything else goes, without knowing too much about the treatment of data beyond just displaying it, I cant say too much yet towards that, however I will say I am quite enjoying the lack of "automagical" dependencies and I like how explicit everything is in react vs angular.

so far so good! I cant wait to move on to state!

## Built With

* React v15.5.4

## Author

Colin Worf

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
