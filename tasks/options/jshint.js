module.exports = {
  app: {
    src: [
      'app/**/*.js'
    ],
    options: { jshintrc: '.jshintrc' }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: 'tasks/.jshintrc' }
  },

  tests: {
    src: [
      'spec/**/*.js',
    ],
    options: { jshintrc: 'spec/.jshintrc' }
  },

  options: {
    force: true
  }
};
