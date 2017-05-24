USE g3ze7wiay2i44m1p;

CREATE TABLE burger_table(

	id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

);

INSERT INTO burger_table (burger_name,devoured) VALUES ('chicken burger',false);
INSERT INTO burger_table (burger_name,devoured) VALUES ('bacon burger',false);
INSERT INTO burger_table (burger_name,devoured) VALUES ('turkey burger',false);