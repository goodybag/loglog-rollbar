# Loglog Rollbar

> Rollbar logging transport for [Loglog](https://github.com/goodybag/loglog)

__Install__

```shell
npm install --save loglog-rollbar
```

__Usage__

```javascript
var loglog = require('loglog');

// Log 'error' and 'warn' level entries to Rollbar
var logger = loglog.create( 'App', {
  transports: [
    require('loglog-rollbar')({
      msg: 'Loglog Error'
    , levels: ['error', 'warn']
    , accessToken: 'ACCESS_TOKEN_HERE'
    })
  ]
});

