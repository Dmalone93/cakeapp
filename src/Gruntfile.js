module.exports = function(grunt){

  grunt.initConfig({
    concat: {
      js: {
        components: ['src/App.js', 'src/NavBar.js', 'src/components/cakes/Cake.js', 'src/components/cakes/CakeEditForm.js', 'src/components/cakes/CakeForm.js', 'src/components/cakes/CakeList.js', 'src/components/cakes/DetailedCake.js'],
        conatiners: ['src/containers/cakes/CakeContainer.js', 'src/containers/cakes/CakeEditFormContainer.js', 'src/containers/cakes/CakeFormContainer.js', 'src/containers/main/MainContainer.js'],
        dest: 'dist/built.js',
      },
      css: {
        src: ['src/css/App.css', 'src/css/Cake.css', 'src/css/CakeList.css', 'src/css/MainContainer.css', 'src/css/NavBar.css'],
        dest: 'dist/built.js',
      },
    },

    watch: {
      js: {
        files: ['**/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['**/*.css'],
        tasks: ['concat']
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


}
