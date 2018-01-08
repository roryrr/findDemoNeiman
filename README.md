# Custom Overlay (1.4)
Most probably you will have Node and Npm installed on your system. To check, run the following commands in Terminal:
1) node -v
2) npm -v
Both these commands must return a version number as output. If you observe node or npm is not installed, just follow the below steps in Dev dependencies.

### Dev dependencies

To build and run this project locally you will need have the following tools installed:

1. Download Node.js from [https://nodejs.org/en/](https://nodejs.org/en/) (LTS) or install it using [homebrew](https://brew.sh/): `$ brew install node`
2. Install [Bower](https://bower.io/): `$ npm install -g bower`
3. Install [Grunt](https://gruntjs.com/): `$ npm install -g grunt-cli`
4. Install all development dependencies: `$ npm install`


### Front dependencies

This project depends on the following Bower modules:

- angular
- angular-i18n
- angular-animate
- angular-cookies
- angular-translate
- angular-sanitize
- angular-uuid
- angular-scroll
- angularjs-slider

To install them, just run: `$ bower install`


### Running the project

Once both dev and front dependencies have been installed, run `$ grunt --force` to launch a local web server listening on port `9999`: [http://localhost:9999/overlay.html](http://localhost:9999/overlay.html)

This process also watches for changes in `/src`, so the server is reloaded automagically every time it detects a change in the sources.

Note: This port can be changed in `Gruntfile.js`

By here, your front end would be ready.

###Running Node application
In the project folder, run the command "node app.js". This will start the node application.

###Starting MongoDB
The easiest way would be to install an app called MongoDB Compass and start MongoDB from there.

Once all the above three are up, the Demo would work as expected.
