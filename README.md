[![tests](https://github.com/nc-minh/nodejs-express-boilerplate/actions/workflows/test.yml/badge.svg)](https://github.com/nc-minh/nodejs-express-boilerplate/actions/workflows/test.yml)

# NodeJs Express boilerplate

Here's a boilerplate project for rapidly constructing a web server using Node.js, Express, Mongoose, and TypeScript. It includes file upload functionality using multer. Additionally, it integrates several syntax validation tools such as commitlint, eslint, lint-staged, prettier, and husky.

# Quick start

Prepare:

```json
 "engines": {
    "node": "20.x",
    "npm": "10.x"
  }
```

Clone the repo:

```
git clone git@github.com:nc-minh/nodejs-express-boilerplate.git
```

Install the dependencies:

```
npm i
```

Set the environment variables:

```
cp .env.example .env
```

Start on dev:

```
npm run dev
```

Start on prod:

```
npm run build && npm run start
```
