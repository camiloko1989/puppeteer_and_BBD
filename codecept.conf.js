exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://phptravels.net/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    flightPage: './pages/flightPage.js',
    navBar: './pages/navBar.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: 20,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js', './step_definitions/loginSteps.js', './step_definitions/bookingSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    allure: {},

    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Proyecto_BDD'
}