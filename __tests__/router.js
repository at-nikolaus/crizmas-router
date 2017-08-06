const Router = require('../src/router.js');
const url = require('url');

beforeAll(() => {
  global.URLSearchParams = url.URLSearchParams;
});

describe('router', () => {
  describe('Router', () => {
    test('works', () => {
      const router = new Router({
        routes: [
          {
            path: '*',
            component: () => false
          }
        ]
      });

      router.onChange(() => {
        console.log('route changed', router.currentRouteFragment);
      });

      router.mount();
    });
  });
});
