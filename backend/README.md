# start with yarn
```js
// run this in terminal
yarn
```

## create a ```.env``` file and fill with the following
```js
NODE_ENV
DB_USERNAME
DB_PASSWORD
DB_DATABASE
DB_HOST
JWT_SECRET
JWT_EXPIRES_IN
DATABASE_URL
```
> ```postgresql://dbuser:password@localhost/dbname```

#### CORS
> cors is enabled in production. see ```app.js```

#### CSURF is managed by user cookie
