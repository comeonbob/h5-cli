# h5-cli

A simple CLI for scaffolding kinds of h5 projects.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=6.x, 8.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g h5-clis
```

### Usage

``` bash
$ h5-cli init <h5-tempalte>
$ h5-cli init <username/repo>
```

Example:

``` bash
$ h5-cli init koa2
$ h5-cli init comeonbob/h5-template-koa2
```

The above command generates the project at `./koa2-project/`.

### Doc
Each h5 project template has a awesome README.md, please read it first

###  Templates
- Share your h5 project template here
- Templates that we currently support:

``` javascript
{
  koa2: 'comeonbob/h5-template-koa2',
  express: 'comeonbob/h5-template-express'
}

```

### License

[MIT](http://opensource.org/licenses/MIT)
