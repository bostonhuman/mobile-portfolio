
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'dist/css/style.min.css' : ['css/style.css']
				}
			}
		},
		concat: {
			dist: {
				src: ['css/style.css', 'views/css/style.css'],
				dest: 'dist/css/style.min.css'
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/css/style.min.css': 'css/style.css',
					'dist/css/print.min.css': 'css/print.css',
					'dist/css/bootstrap-grid.min.css': 'views/css/bootstrap-grid.css',
					'dist/css/style2.min.css': 'views/css/style.css'
    			}
  			}
		}
		
	});	
	grunt.registerTask('default', [
		'cssmin'
	]);
};