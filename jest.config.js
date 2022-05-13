module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
    "<rootDir>/dist/",
  ],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    ".+\\.(svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
