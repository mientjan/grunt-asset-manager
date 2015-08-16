function Gruntfile(grunt) {
    grunt.initConfig({
        'asset-manager': {
            default: {
                files: {
                    'tmp/AssetManager.ts': ['test/fixtures/**/*.*']
                },
                options: {}
            }
        }
    });
    grunt.loadTasks('tasks');
    grunt.registerTask('test', [
        'asset-manager'
    ]);
}
module.exports = Gruntfile;
