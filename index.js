var rollbar = require('rollbar');

module.exports = function(options) {
  options = options || {};
  options.levels = options.levels || ['error']
  rollbar.init(options.accessToken);
  
  return function handleEntry(entry) {
    if (options.levels.indexOf(entry.level) === -1) return;
    rollbar.reportMessageWithPayloadData(options.message || entry.message, entry);
  };
};
