<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/provi.png" width="200px" />
</h1>

<h3 align="center">
  Provi back-end challenge. This project is a back-end system that
  will be used to rate how comfortable I am with this stack. This API simulates some of the challenges that Provi faces every day. 💙
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jopcmelo/provi-backend-challenge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/jopcmelo/gostack-gympoint/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jopcmelo/provi-backend-challenge?style=social">
  </a>
</p>

## Getting Started

You can see the original challenge clicking [here](https://github.com/provicapital/challenge_node).

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. 🔥

### Prerequisites
- [NodeJS](https://nodejs.org/en/) - Environment runtime
- [Yarn](https://yarnpkg.com/en/docs/install) - Packager manager
- [Docker](https://docs.docker.com/install/) - Make it easier to create, deploy, and run applications by using containers
- [Docker Compose](https://docs.docker.com/compose/install/) - Relies on Docker Engine for any meaningful work, so make sure you have Docker Engine installed either locally or remote, depending on your setup.

What things you need to install the software and how to install them

```
$> git clone git@github.com:jopcmelo/provi-backend-challenge.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Databases
First thing you must do is setup all your databases. To do it, I have created a docker-compose.yml file do help you
```
$> docker-compose up -d
```

#### Back-end
First you need to setup your development environment variables. To do it, just create
Then, install back-end dependencies
```
$> yarn
```
Start back-end service
```
$> yarn dev
```

#### Testing manually
I also have separated a insomnia.json file to improve your manualy tests. First you need to have Insomnia installed on your machine. Then, import "insomnia.json" to your workspace.

#### Testing
First thing you must do is create .env.test file at project root. Then you can run the following command to run all the TDD tests
```
$> yarn test
```

## Built With

* [Express](https://expressjs.com/pt-br/) - The restful API framework
* [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **João Melo** - *Full stack developer ([GitHub profile](https://github.com/jopcmelo))*

See also the list of [contributors](https://github.com/jopcmelo/gostack-gobarber/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments ⭐

* ExpressJS
* MVC design pattern
* Sequelize ORM
* Background mail sendling with Redis
* JWT
* Docker
* ESLint
* Prettier
* DotEnv
* Bee Queue
* Nodemailer
* Youch
* Yup
* Jest
* Among others acknowledgments
