CREATE SEQUENCE users_id_seq;

CREATE TABLE users (
    id int NOT NULL DEFAULT nextval('users_id_seq'),
    login text NOT NULL UNIQUE,
    password text NOT NULL,
    happiness_numerics numeric(3, 2)[],
    PRIMARY KEY(id)
);

INSERT INTO users (login, password) VALUES ('admin', 'admin')