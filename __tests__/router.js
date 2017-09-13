const Router = require('../src/router.js');
const url = require('url');

global.URLSearchParams = url.URLSearchParams;

describe('router', () => {
  describe('Router', () => {
    test('works', () => {
      const mockFn = jest.fn();

      const router = new Router({
        routes: [
          {
            path: '*',
            component: () => false
          },
          {
            path: 'home',
            component: () => false,
            controller: {
              onEnter() {
                mockFn();
              }
            }
          }
        ]
      });

      router.mount();
      router.transitionTo('home');
      expect(mockFn.mock.calls.length).toBe(1);
    });
  });
});
