/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('angular generator test', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('angular:app', [
                '../../lib/generators/app'
            ]);
            this.app.options['skip-install'] = true;
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            '.editorconfig',
            '.gitattributes',
            '.gitignore',
            '.jshintrc',
            'bower.json',
            'package.json'
        ];

        helpers.mockPrompt(this.app, {
            'githubUser': 'aarontimbo',
            'generatorName': 'temp'
        });

        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
