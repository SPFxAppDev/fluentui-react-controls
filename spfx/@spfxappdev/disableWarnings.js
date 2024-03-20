"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableWarningsCommandDefinition = void 0;
var disableWarningsCommandDefinition = function (build) {
    // Retrieve the current build config and check if there is a `warnoff` flag set
    var currentConfig = build.getConfig();
    var warningLevel = currentConfig.args['warnoff'];
    // Extend the SPFx build rig, and overwrite the `shouldWarningsFailBuild` property
    if (!warningLevel) {
        return;
    }
    build.log('\x1b[33m IMPORTANT: Warnings will not fail the build. \x1b[0m');
    build.addSuppression(/Warning/gi);
};
exports.disableWarningsCommandDefinition = disableWarningsCommandDefinition;
//# sourceMappingURL=disableWarnings.js.map