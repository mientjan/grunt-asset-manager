function Gruntfile(grunt)
{
	grunt.initConfig({
		'asset-manager': {
			default: {
				files: {
					'tmp/AssetManager.ts': ['test/fixtures/**/*.*']
				},
				options: {

				}
			}
		}

	});
	grunt.loadTasks('./src/tasks');
	grunt.registerTask('test', [
		'asset-manager'
	]);
}

export = Gruntfile;
