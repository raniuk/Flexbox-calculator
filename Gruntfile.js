module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      my_target:{
        files: [{
          expand : true,
          cwd: 'css/',
          src: ['style.css', '!style.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        //manage: false
        report: 'min',
        mangle: false
      },
      my_target:{
        files: {
          'js/main.min.js': ['js/main.js', 'js/app.js']
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      my_target: {
        files: ['index.html', 'css/**/*.css'],
        tasks: ['cssmin'],
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '/var/www/html/curso'
        }
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['watch']);
  // grunt.registerTask('server', "Serve your app", [
  //   'connect:server', 'watch' ]);
};
