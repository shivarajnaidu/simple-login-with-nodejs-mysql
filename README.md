# Readme

## Simple CRUD and Login Using Node and MySQL

## Use this query to creaate new users table before making api calls to playaround 

```sql
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
)
```

## Steps to run
1. Instal npm deps with `npm i`
2. add `.env` file with keys available in `sample.env` - replace with your values
3. if you want to change db host you can find configuration files under config folder
4. now run `npm run dev` to start the server with ndoemon or `node server.js` to run with nodejs directly

### API path 
`http://localhost:3000/api/v1/users`
