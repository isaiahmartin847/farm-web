-- @block
USE test_cart

-- @block
SELECT * FROM plantData;

-- @block
SELECT * FROM plantData
WHERE type = "large"
AND in_stock = 1;

-- @block
SELECT * FROM plantData
WHERE type = "cherry"
AND in_stock = 1;

-- @block
SELECT * FROM plantData
WHERE type = "sweet"
AND in_stock = 1;

-- @block
SELECT * FROM plantData
WHERE type = "hot"
AND in_stock = 1;

-- @block
SELECT * FROM plantData
WHERE species = "other";


