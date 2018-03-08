module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'), // read all the packages inside readJSON

    //write the concat task
    sass : {
    dist: {
      files: {
        'public/css/style.css' : 'sass/style.scss'
      }
    }
  },

  watch : {
    sass : {
      files: ['sass/*.scss'],
      tasks: ['sass'],
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('watchFiles', ['watch']);

};
