"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomAlias = void 0;
/* CUSTOM ALIAS */
var path = require('path');
function resolveCustomAlias(build) {
    build.configureWebpack.mergeConfig({
        additionalConfiguration: function (generatedConfiguration) {
            if (!generatedConfiguration.resolve.alias) {
                generatedConfiguration.resolve.alias = {};
            }
            // webparts folder
            generatedConfiguration.resolve.alias['@webparts'] = path.resolve(__dirname, '..', 'lib/webparts');
            // components folder
            generatedConfiguration.resolve.alias['@components'] = path.resolve(__dirname, '..', 'lib/components');
            //root src folder
            generatedConfiguration.resolve.alias['@src'] = path.resolve(__dirname, '..', 'lib');
            return generatedConfiguration;
        },
    });
}
exports.resolveCustomAlias = resolveCustomAlias;
/* CUSTOM ALIAS END */
//# sourceMappingURL=customAlias.js.map