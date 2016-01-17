"use strict";
function Gruntfile(grunt) {
    grunt.initConfig({
        'asset-manager': {
            default: {
                files: {
                    'tmp/AssetManager.ts': ['test/fixtures/**/*.*']
                },
                options: {}
            }
        },
        ts: {
            default: {
                options: {
                    module: 'commonjs'
                },
                src: ["src/**/*.ts", "!node_modules/**/*.ts"],
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadTasks('./src/tasks');
    grunt.registerTask('default', [
        'asset-manager'
    ]);
}
module.exports = Gruntfile;
