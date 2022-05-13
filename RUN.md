# Available Scripts

<hr />

In the project root directory, you can run the below commands to run, build and test the application.

### `yarn serve`

In order to run the app locally (in the development mode), you can just type `yarn serve` in the terminal and press <kbd>Enter</kbd>, and the command will open the application automatically in your default browser.

The app will open in the browser at http://localhost:8080.

If you make any changes in the code, the webpage will automatically update the changes without refreshing the page manually. Also, lint errors can be seen in the console.

### `yarn build:production`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build will be minified, and the app is ready to be deployed!

## Unit Testing

<hr />

We have `jest` and `react-testing-library` setup for unit testing.

In order to run the tests locally, you need to run these below commands:

```bash
$ yarn test
```

If you prefer to watch jest tests then run this command:

```bash
$ yarn test:watch
```

For jest tests coverage, this command will follow:

```bash
$ yarn test:coverage
```

For jest tests coverage with creating snapshots again, this command will follow:

```bash
$ yarn test:coverage -u
```

## E2E Testing

<hr />

### `yarn cypress`

Opens the cypress interface to execute tests. But, firstly make sure the app is already running on http://localhost:8080

### `yarn run cypress:chrome`

Runs test in a Chrome browser directly

### `yarn run cypress:edge`

Runs test in a Microsoft Edge browser

### `yarn run cypress:firefox`

Runs test in a Mozilla Firefox browser

### `yarn run cypress:ci`

This command will open the application in the browser at http://localhost:8080 and run all tests in the terminal automatically.

### `yarn run prettier`

It will indent and make the code pretty based on the configuration

**Note: I am currently using `yarn` but `npm` commands can also be used to open the app. Furthermore, I have `Node v15.12.0` and `Npm 7.6.3` on my local machine.**

# Docker Setup

<hr />

This app can also possibly run in the docker container.

### Prerequisites

Please make sure you already installed Docker Engine (if using mac or windows especially).

In case, docker is not installed then you could refer to this link https://docs.docker.com/docker-for-mac/install/ (for mac users)

Using docker will allow you to run the application without installing Node/Npm or Nginx server or downgrading/upgrading the Node version, because all dependencies will exist inside the docker images.

```bash
$ docker -v
Docker version 20.10.6, build 370c289
```

### Build and Run Docker (using Dockerfile)

Now, you are ready to build the application on docker, and run the docker image at 8080 port.

```bash
$ docker build -t iomoto .
$ docker run -d -p 8080:8080 iomoto
```

Open up the browser and enter this URL: http://localhost:8080

### Build and Run Docker (using docker-compose)

You could also specify your own docker container, and build/run the application using a `docker-compose`  

```bash
$ docker-compose up -d --build
```

Open up the browser and enter this URL: http://localhost:8080
