
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.initConfig ({
        imagemin: {                          // Task        
            options: {
              progressive: true,                       // Target options
              optimizationLevel: 7
              
            },
         
            dist: {                // Another target
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: 'img/',                   // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'dist/'                // Destination path prefix
            }]
          },
        },     	  
   		uglify: {
			my_target: {
				files: {
					'dist/js/perfmatters.min.js' : ['js/perfmatters.js']
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
		'cssmin',
		'imagemin'
	]);
};