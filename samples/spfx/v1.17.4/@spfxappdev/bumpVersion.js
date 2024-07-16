"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerBumbVersionTask = void 0;
var gulp = require('gulp');
var gutil = require('gulp-util');
var fs = require('fs');
var getJson = function (file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
};
var registerBumbVersionTask = function (build) {
    var bumpVersionSubTask = build.subTask('bump-version-subtask', function (gulp, buildOptions, done) {
        var currentCommand = buildOptions.args._[0];
        var skipFunc = gulp
            .src('./config/package-solution.json')
            .pipe(gutil.noop());
        if (typeof currentCommand != 'string') {
            gutil.log('The current command is undefined, skip version bump');
            return skipFunc;
        }
        var commandName = currentCommand.toLocaleLowerCase();
        if (commandName != 'bundle' && commandName != 'bump-version') {
            gutil.log("The current command is not 'bundle' or 'bump-version', skip version bump");
            return skipFunc;
        }
        var bumpVersion = commandName == 'bump-version' || buildOptions.args['ship'] === true;
        if (!bumpVersion) {
            gutil.log("The current command is not 'bump-version' or the --ship argument was not specified, skip version bump");
            return skipFunc;
        }
        var a = buildOptions.args;
        var skipMajorVersion = typeof a['major'] == 'undefined' || a['major'] === false;
        var skipMinorVersion = !skipMajorVersion ||
            typeof a['minor'] == 'undefined' ||
            a['minor'] === false;
        var skipPatchVersion = !skipMajorVersion || !skipMinorVersion || a['patch'] === false;
        if (skipMajorVersion && skipMinorVersion && skipPatchVersion) {
            gutil.log("skip version bump, because all specified arguments (major, minor, patch) are set to 'false'");
            return skipFunc;
        }
        var pkgSolutionJson = getJson('./config/package-solution.json');
        var currentVersionNumber = String(pkgSolutionJson.solution.version);
        var nextVersionNumber = currentVersionNumber.slice();
        var nextVersionSplitted = nextVersionNumber.split('.');
        gutil.log('Current version: ' + currentVersionNumber);
        if (!skipMajorVersion) {
            nextVersionSplitted[0] = parseInt(nextVersionSplitted[0]) + 1;
            nextVersionSplitted[1] = 0;
            nextVersionSplitted[2] = 0;
            nextVersionSplitted[3] = 0;
        }
        if (!skipMinorVersion) {
            nextVersionSplitted[1] = parseInt(nextVersionSplitted[1]) + 1;
            nextVersionSplitted[2] = 0;
            nextVersionSplitted[3] = 0;
        }
        if (!skipPatchVersion) {
            nextVersionSplitted[2] = parseInt(nextVersionSplitted[2]) + 1;
            nextVersionSplitted[3] = 0;
        }
        nextVersionNumber = nextVersionSplitted.join('.');
        gutil.log('New version: ', nextVersionNumber);
        pkgSolutionJson.solution.version = nextVersionNumber;
        fs.writeFile('./config/package-solution.json', JSON.stringify(pkgSolutionJson, null, 4), function () { });
        var packageJson = getJson('./package.json');
        packageJson.version = nextVersionNumber.split('.').splice(0, 3).join('.');
        fs.writeFile('./package.json', JSON.stringify(packageJson, null, 4), function () { });
        return gulp
            .src('./config/package-solution.json')
            .pipe(gulp.dest('./config'));
    });
    var bumpVersionTask = build.task('bump-version', bumpVersionSubTask);
    build.rig.addPreBuildTask(bumpVersionTask);
};
exports.registerBumbVersionTask = registerBumbVersionTask;
//# sourceMappingURL=bumpVersion.js.map