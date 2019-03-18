module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json');
		uglify:{
			businessRoutines:{
				'index.js':['*.js'],
			},
		},
	});
};