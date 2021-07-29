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


### API path 
`http://localhost:3000/api/v1/users`
