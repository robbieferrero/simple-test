module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        basePath: '',
        exclude: [],
        preprocessors: {
            'js/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'text',
            dir: 'coverage/'
        },
        port: 9876,
        codlors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
