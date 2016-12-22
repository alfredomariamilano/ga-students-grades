(function() {
  'use strict';

  authProvider.$inject = ['$authProvider'];
  function authProvider($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      storage: 'localStorage'
    });
  }

  return this.config(authProvider);

}).call(app);
