module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      }, all: {
        src: ['src/**/*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
