-- @block 
USE test_cart


-- @block
LOAD DATA INFILE 'dogs.csv'
INTO TABLE dogs
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;


