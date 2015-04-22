module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        reporter: 'checkstyle',
	reporterOutput: 'target/checkstyle.xml',
        jshintrc: '.jshintrc'
      }, all: {
        src: ['src/**/*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
