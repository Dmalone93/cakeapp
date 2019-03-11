module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['src/App.js', 'src/NavBar.js', 'src/components/cakes/Cake.js', 'src/components/cakes/CakeEditForm.js', 'src/components/cakes/CakeForm.js', 'src/components/cakes/CakeList.js', 'src/components/cakes/DetailedCake.js', 'src/containers/cakes/CakeContainer.js', 'src/containers/cakes/CakeEditFormContainer.js', 'src/containers/cakes/CakeFormContainer.js', 'src/containers/main/MainContainer.js'],
        dest: 'build/js/script.js',
      },
      css : {
        src: ['src/css/App.css', 'src/css/Cake.css', 'src/css/CakeList.css', 'src/css/MainContainer.css', 'src/css/NavBar.css'],
        dest: 'build/css/cssScript.js',
      },
    },

    watch: {
      js: {
        files: ['build/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['build/**/*.css'],
        tasks: ['concat:css']
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'watch']);


}
