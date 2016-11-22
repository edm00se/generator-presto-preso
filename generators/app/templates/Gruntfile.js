// our wrapper function (required by grunt and its plugins)
module.exports = function(grunt) {

  // CONFIGURE GRUNT
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // configure plugin with information
    ejs_static: {
      optimize: {
        options: {
          dest: 'docs',
          path_to_data: './data.json',
          path_to_layouts: './views',
          index_page: 'index',
          parent_dirs: true,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      }
    },

	copy: {
		main: {
			// includes files within public and its sub-directories
			files: [
				{
					expand: true,
					cwd: 'public/',
					src: ['**'],
					dest: 'docs/'
				}
			]
		}
	},

	rewrite: {
		main: {
			src: 'docs/index.html',
			editor: function(contents,filePath){
				return contents
					.replace('<script src="/socket.io/socket.io.js"></script>',
						'<!-- <script src="/socket.io/socket.io.js"></script> -->')
					.replace('<script src="/js/config.js"></script>',
						'<!-- <script src="/js/config.js"></script> -->')
					;
			}
		}
	},

  });

  // LOAD GRUNT PLUGINS
  grunt.loadNpmTasks('grunt-ejs-static');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rewrite');

  // CREATE TASKS
  grunt.registerTask('default', ['ejs_static:optimize','copy:main','rewrite:main']);

};
