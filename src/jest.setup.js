require('@testing-library/jest-dom');

const React = require('react');

// mock getContext canvas function
global.HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({});
global.React = React;

// Mock axios globally
jest.mock('axios', () => {
  return {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  };
});
