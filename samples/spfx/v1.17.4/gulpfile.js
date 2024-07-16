'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`
);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

const gulp = require('gulp');
const rename = require('gulp-rename');

/* fast-serve */
const { addFastServe } = require('spfx-fast-serve-helpers');
addFastServe(build);
/* end of fast-serve */

/* CUSTOM ALIAS AND VERSION BUMP AND OTHER SPFxAppDev TASKS START */
build.addSuppression(/Warning - [sass] The local CSS class/gi);

const {
  resolveCustomAlias,
  registerBumbVersionTask,
  disableWarningsCommandDefinition,
} = require('./@spfxappdev');
resolveCustomAlias(build);
// You can use the "gulp bump-version" command. See here: https://spfx-app.dev/package-spfx-solution-with-one-command-and-automatically-increase-the-version
registerBumbVersionTask(build);
// You can use the "gulp build --ship --warnoff" command. This prevents warnings from causing the build to fail
disableWarningsCommandDefinition(build);
/* CUSTOM ALIAS AND VERSION BUMP AND OTHER SPFxAppDev TASKS END */

build.initialize(require('gulp'));
