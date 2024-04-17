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


-- @block
-- this will pull all the cherry tomatoes 
SELECT * FROM plantData 
WHERE species = "tomato" 
AND in_stock = 1
AND type = "cherry";


-- @block
-- this will get all the large tomatoes 
SELECT * FROM plantData
WHERE species = "tomato"
and in_stock = 1
AND type = "large"


-- @block
-- this will get all the hot peppers 
SELECT * FROM plantData
WHERE species = "pepper"
AND in_stock = 1
AND type = "hot";

-- @block 
-- this will get all the sweet peppers 
SELECT * FROM plantData
WHERE species = "pepper"
AND in_stock = 1
AND type = "sweet";


-- @block 

