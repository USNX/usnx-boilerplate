'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    compass: {
    	dist: {
    		options: {
    			sassDir: "public/css/sass",
    			cssDir: "public/css",
    			imagesDir: "public/img",
    			javascriptDir: "public/js",
    			environment: "production",
    			force: true
    		}
    	}
    },

    connect: {
    	livereload: {
    		options: {
    			port: 8000,
    			base: 'public',
    			middleware: function(connect, options) {
    				return [lrSnippet, folderMount(connect, options.base)];
    			}
    		}
    	}
    },

		jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },

      files: {
      	src: ['public/js/*.js']
      }
    },

    livereload: {
    	port: 1337
    },

    regarde: {
    	compass: {
    		files: ['public/css/sass/**/*.{scss,sass,css}'],
    		tasks: ['compass', 'livereload']
    	},

    	html: {
    		files: ['public/**/*.{html,php}'],
    		tasks: ['livereload']
    	},

    	js: {
    		files: ['public/js/**/*.js'],
    		tasks: ['jshint', 'livereload']
    	}
    }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['jshint', 'compass']);
	grunt.registerTask('build', ['jshint', 'compass']);
	grunt.registerTask('server', ['livereload-start', 'connect', 'regarde']);
};