-- psql -a -f migrations.sql

CREATE DATABASE flavortown;

\c flavortown

CREATE TABLE users (id SERIAL PRIMARY KEY, username varchar(255), password_digest varchar(255));