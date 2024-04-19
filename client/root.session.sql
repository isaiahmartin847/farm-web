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


-- @block
INSERT INTO plantData (name, type, species, description, color, colorcode, price, in_stock, days, url) 
VALUES ("Purple Passion Asparagus", "other", "asparagus", "Purple Passion is a unique asparagus variety especially suited to the asparagus enthusiast, whether home gardener or commercial grower. Its special, attractive purple color, flavor and tenderness distinguish this variety from others.", "Blue", "blue", 4, 1, 0, "https://noursefarms.com/product/purple-passion/") 




