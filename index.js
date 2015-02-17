var rollbar = require('rollbar');

module.exports = function(options) {
  options = options || {};
  options.levels = options.levels || ['error']
  options.msg = options.msg || 'Loglog Entry';
  rollbar.init(options.accessToken);
  
  return function handleEntry(entry) {
    if (options.levels.indexOf(entry.level) === -1) return;
    rollbar.reportMessageWithPayloadData(options.msg, entry);
  };
};
