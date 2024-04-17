-- @block
Use test_cart


-- @block
SHOW TABLES;

-- @block
DROP plants;


-- @block
CREATE TABLE plants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255),
    species VARCHAR(255),
    description TEXT,
    color VARCHAR(255),
    color_code VARCHAR(255),
    price FLOAT,
    in_stock BOOLEAN
);

-- @block
CREATE TABLE plantData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    species VARCHAR(255),
    description TEXT,
    color VARCHAR(255),
    colorcode VARCHAR(255),
    price FLOAT,
    in_stock BOOLEAN
);


-- @block
DESCRIBE plantData;

-- @block
ALTER TABLE plantData
ADD COLUMN days INT;


-- @block 
SELECT * FROM plantData





