# USNX Boilerplate

This is some boilerplate for developing web apps. It makes use of modern
developments tools such as [Bower](http://bower.io/) 
and [Grunt](http://gruntjs.com/), which in turn make use of the 
[NodeJS](http://nodejs.org) engine.

## Dependencies

* [Git](http://git-scm.com/downloads)
* [Node JS](http://nodejs.org/download/)
* [Bower](https://github.com/twitter/bower)
* [Grunt](http://gruntjs.com/getting-started)

## Installation

1. If you have not done so already, install [Git](http://git-scm.com/downloads)
and [Node JS](http://nodejs.org/download/).

2. Use the Node Package Manager (NPM) to install Bower and Grunt (You will need
administration privligaes).
	
		npm install -g bower grunt-cli

3. Clone the git repository to a directory on your development machine.

		git clone git://github.com/USNX/webapp-boilerplate.git [target-directory]
		cd webapp-boilerplate

4. Install your project dependencies using the Node Package Manager (NPM) and
Bower.

		npm install && bower install

5. Run `grunt build` to build your project.

6. Run `grunt server` to start the server on port 8000

7. Open your browser and navigate to `http://localhost:8000`. You should see
the home page.

## Installing Packages with Bower

You can install packages from any git repo using Twitter's 
[Bower](https://github.com/twitter/bower). This places that package under the
directory specified in your `.bowerrc` file (defaults to `components`), and
adds an entry to the dependencies section of the `bower.json` file. Help with 
Bower is available via `bower help` or the [Bower web site](http://bower.io/).

### Example

There are several ways to install the jQuery UI plugin:

1. If the following entry is in your directory's bower.json

		// bower.json

		"dependiencies": {
			"jquery-ui": "~1.10.2"
		}

	then simply typing:

		bower install

	will install jQuery UI ver. 1.10.*.

2. You can quickly install the newest version of jQuery UI by typing:

		bower install jquery-ui

3. You can specify a specific version of jQuery UI and make an entry in the
depencencies section of your `bower.json` by entering:

		bower install jquery-ui#1.10.2 --save

## Grunt

[Grunt](http://gruntjs.com) is a task runner that can be configured to automate
certain tasks. It is compatable with many modern web technologies such as 
Compass, Less, and CoffeeScript.

This software comes with Grunt packages for [Compass](http://compass-style.org/),
[jsHint](http://www.jshint.com/), and has a stand-alone webserver that will
automatically push detected changes in your files to the browser.

### Using Grunt

You can start the server and start watching for changes in *.html, *.scss, and
*.js files by using:

		grunt server

This will start a local development server at `localhost:8000`. Any changes you
make to `public/*.html`, `public/js/*.js`, and `public\css\sass\*.scss` will be
automatically pushed to the browser every time you save them.