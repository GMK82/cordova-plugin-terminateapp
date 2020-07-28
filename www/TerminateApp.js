var exec = require('cordova/exec');

module.exports = {
  /**
   * Exits the PhoneGap application with no questions asked.
   */
  terminateApp: function() {
    exec(null, null, 'TerminateApp', 'terminateApp', []);
  }
};
