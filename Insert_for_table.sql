USE SHOPEASE;

INSERT INTO CUSTOMER (UserName, Email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Brown', 'bob.brown@example.com'),
('Charlie Davis', 'charlie.davis@example.com'),
('Emily Wilson', 'emily.wilson@example.com'),
('Michael Clark', 'michael.clark@example.com'),
('Linda Martinez', 'linda.martinez@example.com'),
('David Taylor', 'david.taylor@example.com'),
('Sarah Lewis', 'sarah.lewis@example.com'),
('James Walker', 'james.walker@example.com'),
('Olivia Hall', 'olivia.hall@example.com'),
('Daniel Young', 'daniel.young@example.com'),
('Sophia King', 'sophia.king@example.com'),
('Matthew Scott', 'matthew.scott@example.com'),
('Isabella Adams', 'isabella.adams@example.com'),
('Alexander Nelson', 'alexander.nelson@example.com'),
('Mia Carter', 'mia.carter@example.com'),
('Ethan Ramirez', 'ethan.ramirez@example.com'),
('Ava Parker', 'ava.parker@example.com');

SELECT * FROM CUSTOMER;

INSERT INTO Category (CategoryName) VALUES
('Electronics'),
('Books'),
('Clothing'),
('Home & Kitchen'),
('Toys'),
('Sports & Outdoors'),
('Beauty & Personal Care'),
('Automotive'),
('Health'),
('Office Supplies'),
('Garden'),
('Pet Supplies'),
('Jewelry'),
('Music'),
('Movies & TV'),
('Video Games'),
('Software'),
('Grocery'),
('Baby Products'),
('Arts & Crafts');

SELECT * FROM Category;
INSERT INTO Product (Name, CategoryId, Price) VALUES
('Smartphone', 1, 499.99),
('Laptop', 1, 899.99),
('Tablet', 1, 299.99),
('Smartwatch', 1, 199.99),
('Headphones', 1, 89.99),
('Novel', 2, 19.99),
('Magazine', 2, 5.99),
('Textbook', 2, 49.99),
('Cookbook', 2, 29.99),
('Jacket', 3, 59.99),
('T-shirt', 3, 19.99),
('Jeans', 3, 39.99),
('Sweater', 3, 49.99),
('Blender', 4, 29.99),
('Toaster', 4, 24.99),
('Coffee Maker', 4, 49.99),
('Dishwasher', 4, 499.99),
('Toy Car', 5, 14.99),
('Doll', 5, 24.99),
('Puzzle', 5, 9.99);

SELECT * FROM Product

INSERT INTO [Order] (UserId, Status, TotalAmount) VALUES
(1, 'Processing', 519.99),
(2, 'Shipped', 19.99),
(3, 'Delivered', 59.99),
(4, 'Cancelled', 0),
(5, 'Processing', 29.99),
(6, 'Shipped', 199.99),
(7, 'Delivered', 299.99),
(8, 'Returned', 49.99),
(9, 'Processing', 89.99),
(10, 'Shipped', 24.99),
(11, 'Delivered', 59.99),
(12, 'Cancelled', 0),
(13, 'Processing', 19.99),
(14, 'Shipped', 49.99),
(15, 'Delivered', 89.99),
(16, 'Returned', 29.99),
(17, 'Processing', 59.99),
(18, 'Shipped', 499.99),
(19, 'Delivered', 9.99),
(20, 'Cancelled', 14.99);

-- Inserting orders for User with UserId = 1
INSERT INTO [Order] (UserId, Status, TotalAmount)
VALUES 
    (1, 'Pending', 500.00),   -- Less than 1000
    (1, 'Completed', 1500.00), -- Above 1000
    (1, 'Shipped', 1000.00);  -- Equal to 1000

-- Inserting orders for User with UserId = 2
INSERT INTO [Order] (UserId, Status, TotalAmount)
VALUES 
    (2, 'Pending', 200.00),   -- Less than 1000
    (2, 'Completed', 1200.00), -- Above 1000
    (2, 'Shipped', 950.00);   -- Less than 1000

-- Inserting orders for User with UserId = 3
INSERT INTO [Order] (UserId, Status, TotalAmount)
VALUES 
    (3, 'Pending', 300.00),   -- Less than 1000
    (3, 'Completed', 1000.00), -- Equal to 1000
    (3, 'Shipped', 1300.00);  -- Above 1000

	-- Inserting orders with specific dates for UserId = 1
INSERT INTO [Order] (UserId, OrderDate, Status, TotalAmount)
VALUES 
    (1, '2024-01-15', 'Pending', 500.00),   -- January
    (1, '2024-03-22', 'Completed', 1500.00), -- March
    (1, '2024-06-10', 'Shipped', 1000.00),  -- June

-- Inserting orders with specific dates for UserId = 2
INSERT INTO [Order] (UserId, OrderDate, Status, TotalAmount)
VALUES 
    (2, '2024-02-05', 'Pending', 200.00),   -- February
    (2, '2024-04-18', 'Completed', 1200.00), -- April
    (2, '2024-07-25', 'Shipped', 950.00);   -- July

-- Existing entries
INSERT INTO [Order] (UserId, OrderDate, Status, TotalAmount) VALUES
(1, '2024-01-10', 'Processing', 519.99),
(2, '2024-02-11', 'Shipped', 19.99),
(3, '2024-03-12', 'Delivered', 59.99),
(4, '2024-04-13', 'Cancelled', 0),
(5, '2024-05-14', 'Processing', 29.99),
(6, '2024-06-15', 'Shipped', 199.99),
(7, '2024-07-16', 'Delivered', 299.99),
(8, '2024-08-17', 'Returned', 49.99),
(9, '2024-09-18', 'Processing', 89.99),
(10, '2024-10-19', 'Shipped', 24.99),
(11, '2024-11-20', 'Delivered', 59.99),
(12, '2024-12-21', 'Cancelled', 0),
(13, '2024-01-22', 'Processing', 19.99),
(14, '2024-02-23', 'Shipped', 49.99),
(15, '2024-03-24', 'Delivered', 89.99),
(16, '2024-04-25', 'Returned', 29.99),
(17, '2024-05-26', 'Processing', 59.99),
(18, '2024-06-27', 'Shipped', 499.99),
(19, '2024-07-28', 'Delivered', 9.99),
(20, '2024-08-29', 'Cancelled', 14.99);


SELECT * FROM [Order]

INSERT INTO OrderItem (OrderId, ProductId, Quantity, UnitPrice) VALUES
(1, 1, 1, 499.99),
(1, 2, 1, 899.99),
(1, 3, 1, 299.99),
(2, 6, 1, 19.99),
(3, 11, 1, 59.99),
(4, 13, 1, 49.99),
(5, 14, 1, 29.99),
(6, 4, 1, 199.99),
(7, 3, 1, 299.99),
(8, 12, 1, 24.99),
(9, 5, 1, 89.99),
(10, 13, 1, 49.99),
(11, 9, 1, 59.99),
(12, 7, 1, 49.99),
(13, 8, 1, 29.99),
(14, 6, 1, 19.99),
(15, 10, 1, 59.99),
(16, 1, 1, 499.99),
(17, 12, 1, 29.99),
(18, 2, 1, 899.99);

-- Insert rows with varying quantities for OrderId = 2
INSERT INTO OrderItem (OrderId, ProductId, Quantity, UnitPrice) VALUES
(2, 1, 15, 499.99),  -- More than 10
(2, 2, 5, 899.99),   -- Less than 10
(2, 3, 10, 299.99);  -- Equal to 10

-- Insert rows with varying quantities for OrderId = 3
INSERT INTO OrderItem (OrderId, ProductId, Quantity, UnitPrice) VALUES
(3, 4, 8, 199.99),   -- Less than 10
(3, 5, 12, 89.99),   -- More than 10
(3, 6, 10, 19.99);   -- Equal to 10

-- Insert rows with varying quantities for OrderId = 4
INSERT INTO OrderItem (OrderId, ProductId, Quantity, UnitPrice) VALUES
(4, 7, 6, 49.99),    -- Less than 10
(4, 8, 11, 29.99),   -- More than 10
(4, 9, 10, 59.99);   -- Equal to 10


SELECT * FROM OrderItem;

-- Insert carts
-- Creating Cart table with dates for each UserId
INSERT INTO Cart (UserId, CreatedAt) VALUES
(1, '2024-01-05'),   -- January
(2, '2024-02-10'),   -- February
(3, '2024-03-15'),   -- March
(4, '2024-04-20'),   -- April
(5, '2024-05-25'),   -- May
(6, '2024-06-30'),   -- June
(7, '2024-07-05'),   -- July
(8, '2024-08-10'),   -- August
(9, '2024-09-15'),   -- September
(10, '2024-10-20'),  -- October
(11, '2024-11-25'),  -- November
(12, '2024-12-01'),  -- December
(13, '2024-01-20'),  -- January (next year start)
(14, '2024-02-25'),  -- February
(15, '2024-03-30'),  -- March
(16, '2024-04-15'),  -- April
(17, '2024-05-20'),  -- May
(18, '2024-06-25'),  -- June
(19, '2024-07-30'),  -- July
(20, '2024-08-15');  -- August
SELECT * FROM cart;
-- Insert cart items
INSERT INTO CartItem (CartId, ProductId, Quantity) VALUES
(1, 1, 1),
(1, 5, 2),
(2, 6, 1),
(2, 10, 3),
(3, 7, 2),
(3, 11, 1),
(4, 8, 1),
(4, 12, 2),
(5, 14, 3),
(6, 3, 1),
(6, 15, 1),
(7, 2, 1),
(7, 16, 2),
(8, 9, 1),
(8, 17, 1),
(9, 4, 1),
(9, 18, 2),
(10, 12, 3),
(10, 5, 1),
(11, 13, 2),
(11, 19, 1),
(12, 6, 1),
(12, 10, 2),
(13, 1, 1),
(13, 20, 1),
(14, 7, 2),
(14, 16, 1),
(15, 8, 1),
(15, 14, 1),
(16, 3, 1),
(16, 11, 2),
(17, 9, 1),
(17, 12, 1),
(18, 4, 1),
(18, 19, 2),
(19, 5, 1),
(19, 20, 2),
(20, 2, 1),
(20, 7, 1);

SELECT * FROM CARTITEM
-- CartItems with Quantity more than 10
INSERT INTO CartItem (CartId, ProductId, Quantity) VALUES
(1, 2, 12),   -- CartId 1, ProductId 2, Quantity 12
(2, 4, 15),   -- CartId 2, ProductId 4, Quantity 15
(3, 6, 20),   -- CartId 3, ProductId 6, Quantity 20
(4, 8, 25);   -- CartId 4, ProductId 8, Quantity 25

-- CartItems with Quantity equal to 10
INSERT INTO CartItem (CartId, ProductId, Quantity) VALUES
(5, 10, 10),  -- CartId 5, ProductId 10, Quantity 10
(6, 12, 10),  -- CartId 6, ProductId 12, Quantity 10
(7, 14, 10),  -- CartId 7, ProductId 14, Quantity 10
(8, 16, 10);  -- CartId 8, ProductId 16, Quantity 10

-- CartItems with Quantity less than 10
INSERT INTO CartItem (CartId, ProductId, Quantity) VALUES
(9, 1, 5),    -- CartId 9, ProductId 1, Quantity 5
(10, 3, 7),   -- CartId 10, ProductId 3, Quantity 7
(11, 5, 8),   -- CartId 11, ProductId 5, Quantity 8
(12, 7, 9);   -- CartId 12, ProductId 7, Quantity 9

-- Insert inventory
INSERT INTO Inventory (ProductId, StockQuantity) VALUES
(1, 50),
(2, 30),
(3, 20),
(4, 10),
(5, 40),
(6, 25),
(7, 15),
(8, 35),
(9, 20),
(10, 45),
(11, 30),
(12, 50),
(13, 20),
(14, 15),
(15, 25),
(16, 10),
(17, 30),
(18, 20),
(19, 40),
(20, 25);

-- Updating existing inventory with mixed stock quantities
UPDATE Inventory
SET StockQuantity = CASE 
    WHEN ProductId = 1 THEN 85    -- ProductId 1, StockQuantity around 80
    WHEN ProductId = 2 THEN 75    -- ProductId 2, StockQuantity around 70
    WHEN ProductId = 3 THEN 80    -- ProductId 3, StockQuantity around 80
    WHEN ProductId = 4 THEN 70    -- ProductId 4, StockQuantity around 70
    WHEN ProductId = 5 THEN 90    -- ProductId 5, StockQuantity around 80
    WHEN ProductId = 6 THEN 60    -- ProductId 6, StockQuantity around 60
    WHEN ProductId = 7 THEN 65    -- ProductId 7, StockQuantity around 60
    WHEN ProductId = 8 THEN 85    -- ProductId 8, StockQuantity around 80
    WHEN ProductId = 9 THEN 70    -- ProductId 9, StockQuantity around 70
    WHEN ProductId = 10 THEN 80   -- ProductId 10, StockQuantity around 80
    WHEN ProductId = 11 THEN 75   -- ProductId 11, StockQuantity around 70
    WHEN ProductId = 12 THEN 85   -- ProductId 12, StockQuantity around 80
    WHEN ProductId = 13 THEN 70   -- ProductId 13, StockQuantity around 70
    WHEN ProductId = 14 THEN 60   -- ProductId 14, StockQuantity around 60
    WHEN ProductId = 15 THEN 80   -- ProductId 15, StockQuantity around 80
    WHEN ProductId = 16 THEN 70   -- ProductId 16, StockQuantity around 70
    WHEN ProductId = 17 THEN 85   -- ProductId 17, StockQuantity around 80
    WHEN ProductId = 18 THEN 75   -- ProductId 18, StockQuantity around 70
    WHEN ProductId = 19 THEN 80   -- ProductId 19, StockQuantity around 80
    WHEN ProductId = 20 THEN 65   -- ProductId 20, StockQuantity around 60
END;

SELECT * FROM Inventory

-- Inserting reviews for various users and products
INSERT INTO Review (UserId, ProductId, Rating, Comment, ReviewDate) VALUES
(1, 1, 5, 'Excellent smartphone with great features!', '2024-01-15'),
(1, 2, 4, 'Good laptop, but a bit expensive.', '2024-01-20'),
(2, 3, 3, 'Average tablet, performance is okay.', '2024-02-10'),
(2, 4, 2, 'Smartwatch broke after a week.', '2024-02-15'),
(3, 5, 5, 'Love these headphones. Great sound quality!', '2024-03-05'),
(3, 6, 4, 'Novel is well-written and engaging.', '2024-03-15'),
(4, 7, 2, 'Magazine was not as interesting as expected.', '2024-04-01'),
(4, 8, 5, 'Textbook is very informative and useful.', '2024-04-10'),
(5, 9, 3, 'Cookbook has a few good recipes.', '2024-05-02'),
(5, 10, 4, 'Jacket fits well and is stylish.', '2024-05-20'),
(6, 11, 1, 'T-shirt shrunk after one wash.', '2024-06-01'),
(6, 12, 3, 'Jeans are comfortable but overpriced.', '2024-06-10'),
(7, 13, 5, 'Sweater is warm and cozy.', '2024-07-01'),
(7, 14, 2, 'Blender stopped working after a month.', '2024-07-15'),
(8, 15, 4, 'Toaster is very efficient.', '2024-08-01'),
(8, 16, 5, 'Coffee maker makes great coffee!', '2024-08-10'),
(9, 17, 1, 'Dishwasher did not clean well.', '2024-09-01'),
(9, 18, 4, 'Toy car is fun and durable.', '2024-09-15'),
(10, 19, 5, 'Doll is adorable and well-made.', '2024-10-01'),
(10, 20, 3, 'Puzzle is okay but not very challenging.', '2024-10-15'),
(11, 1, 5, 'Smartphone is top-notch. Worth every penny!', '2024-11-01'),
(11, 2, 2, 'Laptop has heating issues.', '2024-11-10'),
(12, 3, 4, 'Tablet is lightweight and handy.', '2024-12-01'),
(12, 4, 1, 'Smartwatch is a disappointment.', '2024-12-10'),
(13, 5, 5, 'Headphones are fantastic for music.', '2024-01-05'),
(13, 6, 3, 'Novel was average.', '2024-01-15'),
(14, 7, 4, 'Magazine is good for leisure reading.', '2024-02-05'),
(14, 8, 5, 'Textbook is essential for my course.', '2024-02-15'),
(15, 9, 2, 'Cookbook did not meet my expectations.', '2024-03-05'),
(15, 10, 5, 'Jacket is great quality.', '2024-03-15'),
(16, 11, 1, 'T-shirt faded quickly.', '2024-04-05'),
(16, 12, 3, 'Jeans are okay but fit poorly.', '2024-04-15'),
(17, 13, 5, 'Sweater is very warm.', '2024-05-05'),
(17, 14, 2, 'Blender is not durable.', '2024-05-15'),
(18, 15, 4, 'Toaster works well.', '2024-06-05'),
(18, 16, 5, 'Coffee maker is perfect for my needs.', '2024-06-15'),
(19, 17, 3, 'Dishwasher is average.', '2024-07-05'),
(19, 18, 5, 'Toy car is fun for my child.', '2024-07-15'),
(20, 19, 4, 'Doll is well-crafted.', '2024-08-05'),
(20, 20, 2, 'Puzzle was not as challenging as expected.', '2024-08-15');

-- Insert payments
-- Calculate the discounted amount for each order and insert into Payment table

-- OrderId 1
-- Product 1: Price = 499.99, Discount = 10%, Discounted Price = 499.99 * (1 - 0.10) = 449.99
-- Product 2: Price = 899.99, Discount = 15%, Discounted Price = 899.99 * (1 - 0.15) = 764.99
-- Product 3: Price = 299.99, Discount = 5%, Discounted Price = 299.99 * (1 - 0.05) = 284.99
-- Total Discounted Amount = (449.99 * 1) + (764.99 * 1) + (284.99 * 1) = 1499.97
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(1, 'Credit Card', 1499.97);

-- OrderId 2
-- Product 6: Price = 19.99, Discount = 10%, Discounted Price = 19.99 * (1 - 0.10) = 17.99
-- Total Discounted Amount = 17.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(2, 'PayPal', 17.99);

-- OrderId 3
-- Product 11: Price = 59.99, Discount = 25%, Discounted Price = 59.99 * (1 - 0.25) = 44.99
-- Total Discounted Amount = 44.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(3, 'Credit Card', 44.99);

-- OrderId 4
-- Product 13: Price = 49.99, Discount = 15%, Discounted Price = 49.99 * (1 - 0.15) = 42.49
-- Total Discounted Amount = 42.49
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(4, 'Debit Card', 42.49);

-- OrderId 5
-- Product 14: Price = 29.99, Discount = 20%, Discounted Price = 29.99 * (1 - 0.20) = 23.99
-- Total Discounted Amount = 23.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(5, 'Credit Card', 23.99);

-- OrderId 6
-- Product 4: Price = 199.99, Discount = 20%, Discounted Price = 199.99 * (1 - 0.20) = 159.99
-- Total Discounted Amount = 159.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(6, 'PayPal', 159.99);

-- OrderId 7
-- Product 3: Price = 299.99, Discount = 5%, Discounted Price = 299.99 * (1 - 0.05) = 284.99
-- Total Discounted Amount = 284.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(7, 'Credit Card', 284.99);

-- OrderId 8
-- Product 12: Price = 24.99, Discount = 5%, Discounted Price = 24.99 * (1 - 0.05) = 23.74
-- Total Discounted Amount = 23.74
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(8, 'Bank Transfer', 23.74);

-- OrderId 9
-- Product 5: Price = 89.99, Discount = 25%, Discounted Price = 89.99 * (1 - 0.25) = 67.49
-- Total Discounted Amount = 67.49
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(9, 'Credit Card', 67.49);

-- OrderId 10
-- Product 13: Price = 49.99, Discount = 15%, Discounted Price = 49.99 * (1 - 0.15) = 42.49
-- Total Discounted Amount = 42.49
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(10, 'PayPal', 42.49);

-- OrderId 11
-- Product 9: Price = 59.99, Discount = 10%, Discounted Price = 59.99 * (1 - 0.10) = 53.99
-- Total Discounted Amount = 53.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(11, 'Credit Card', 53.99);

-- OrderId 12
-- Product 7: Price = 19.99, Discount = 5%, Discounted Price = 19.99 * (1 - 0.05) = 18.99
-- Total Discounted Amount = 18.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(12, 'Debit Card', 18.99);

-- OrderId 13
-- Product 8: Price = 29.99, Discount = 15%, Discounted Price = 29.99 * (1 - 0.15) = 25.49
-- Total Discounted Amount = 25.49
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(13, 'Credit Card', 25.49);

-- OrderId 14
-- Product 6: Price = 19.99, Discount = 10%, Discounted Price = 19.99 * (1 - 0.10) = 17.99
-- Total Discounted Amount = 17.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(14, 'PayPal', 17.99);

-- OrderId 15
-- Product 10: Price = 59.99, Discount = 20%, Discounted Price = 59.99 * (1 - 0.20) = 47.99
-- Total Discounted Amount = 47.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(15, 'Credit Card', 47.99);

-- OrderId 16
-- Product 1: Price = 499.99, Discount = 10%, Discounted Price = 499.99 * (1 - 0.10) = 449.99
-- Total Discounted Amount = 449.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(16, 'Debit Card', 449.99);

-- OrderId 17
-- Product 12: Price = 24.99, Discount = 5%, Discounted Price = 24.99 * (1 - 0.05) = 23.74
-- Total Discounted Amount = 23.74
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(17, 'Credit Card', 23.74);

-- OrderId 18
-- Product 2: Price = 899.99, Discount = 15%, Discounted Price = 899.99 * (1 - 0.15) = 764.99
-- Total Discounted Amount = 764.99
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(18, 'Credit Card', 764.99);

-- OrderId 19
-- Product 19: Price = 40.00, Discount = 20%, Discounted Price = 40.00 * (1 - 0.20) = 32.00
-- Total Discounted Amount = 32.00
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(19, 'PayPal', 32.00);

-- OrderId 20
-- Product 7: Price = 25.00, Discount = 15%, Discounted Price = 25.00 * (1 - 0.15) = 21.25
-- Total Discounted Amount = 21.25
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(20, 'Credit Card', 21.25);

SELECT * FROM PAYMENT;

-- Insert payment details for each order
INSERT INTO Payment (OrderId, PaymentMethod, Amount) VALUES
(1, 'Credit Card', 1399.98),   -- Total amount from OrderItems for OrderId 1
(2, 'PayPal', 19.99),          -- Total amount from OrderItems for OrderId 2
(3, 'Credit Card', 59.99),     -- Total amount from OrderItems for OrderId 3
(4, 'Debit Card', 49.99),      -- Total amount from OrderItems for OrderId 4
(5, 'Credit Card', 29.99),     -- Total amount from OrderItems for OrderId 5
(6, 'PayPal', 199.99),         -- Total amount from OrderItems for OrderId 6
(7, 'Credit Card', 299.99),    -- Total amount from OrderItems for OrderId 7
(8, 'Bank Transfer', 49.99),   -- Total amount from OrderItems for OrderId 8
(9, 'Credit Card', 89.99),     -- Total amount from OrderItems for OrderId 9
(10, 'PayPal', 24.99),         -- Total amount from OrderItems for OrderId 10
(11, 'Credit Card', 59.99),    -- Total amount from OrderItems for OrderId 11
(12, 'Debit Card', 12.50),     -- Adjusted amount based on OrderItems for OrderId 12
(13, 'Credit Card', 29.99),    -- Total amount from OrderItems for OrderId 13
(14, 'PayPal', 49.99),         -- Total amount from OrderItems for OrderId 14
(15, 'Credit Card', 59.99),    -- Total amount from OrderItems for OrderId 15
(16, 'Debit Card', 29.99),     -- Total amount from OrderItems for OrderId 16
(17, 'Credit Card', 59.99),    -- Total amount from OrderItems for OrderId 17
(18, 'Credit Card', 899.99),   -- Total amount from OrderItems for OrderId 18
(19, 'PayPal', 9.99),          -- Total amount from OrderItems for OrderId 19
(20, 'Credit Card', 14.99);    -- Total amount from OrderItems for OrderId 20
SELECT * FROM PAYMENT;
Delete from payment;
Delete from payment;

-- Insert discounts
INSERT INTO Discount (ProductId, DiscountPercentage) VALUES
(1, 10.00),
(2, 15.00),
(3, 5.00),
(4, 20.00),
(5, 25.00),
(6, 10.00),
(7, 5.00),
(8, 15.00),
(9, 10.00),
(10, 20.00),
(11, 25.00),
(12, 5.00),
(13, 15.00),
(14, 10.00),
(15, 20.00),
(16, 25.00),
(17, 10.00),
(18, 5.00),
(19, 20.00),
(20, 15.00);

-- Insert wishlists
INSERT INTO Wishlist (UserId) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20);

-- Insert wishlist items
INSERT INTO WishlistItem (WishlistId, ProductId) VALUES
(1, 1),
(1, 5),
(2, 6),
(2, 10),
(3, 7),
(3, 11),
(4, 8),
(4, 12),
(5, 14),
(6, 3),
(6, 15),
(7, 2),
(7, 16),
(8, 9),
(8, 17),
(9, 4),
(9, 18),
(10, 12),
(10, 5),
(11, 13),
(11, 19),
(12, 6),
(12, 10),
(13, 1),
(13, 20),
(14, 7),
(14, 16),
(15, 8),
(15, 14),
(16, 3),
(16, 11),
(17, 9),
(17, 12),
(18, 4),
(18, 19),
(19, 5),
(19, 20),
(20, 2),
(20, 7);

-- Insert addresses
INSERT INTO Address (UserId, AddressLine1, City, PostalCode) VALUES
(1, '123 Main St', 'Springfield', '12345'),
(2, '456 Elm St', 'Metropolis', '67890'),
(3, '789 Maple Ave', 'Gotham', '54321'),
(4, '101 Oak St', 'Star City', '98765'),
(5, '202 Birch Rd', 'Central City', '45678'),
(6, '303 Pine St', 'Riverdale', '11223'),
(7, '404 Cedar Ave', 'Sunnydale', '23456'),
(8, '505 Walnut St', 'Pleasantville', '34567'),
(9, '606 Cherry Ln', 'Brooklyn', '45678'),
(10, '707 Birchwood Dr', 'Beverly Hills', '56789'),
(11, '808 Maplewood Blvd', 'Westfield', '67890'),
(12, '909 Oakwood Dr', 'Elmwood', '78901'),
(13, '1010 Cedarwood Ln', 'Mapleton', '89012'),
(14, '1111 Pinecrest Ave', 'Riverside', '90123'),
(15, '1212 Cherrywood Dr', 'Springfield', '12345'),
(16, '1313 Walnut St', 'Valleyview', '23456'),
(17, '1414 Elmcrest Dr', 'Greenville', '34567'),
(18, '1515 Maple Dr', 'Hilltop', '45678'),
(19, '1616 Oakwood St', 'Sunnyvale', '56789'),
(20, '1717 Cedar Dr', 'Pineville', '67890');

SELECT * FROM Address
EXEC sp_rename 'Address.County', 'Country', 'COLUMN';

UPDATE Address
SET 
    Country = 'India',
    AddressLine1 = CASE
        WHEN AddressId = 1 THEN 'Flat 101, 2nd Floor'
        WHEN AddressId = 2 THEN 'House No. 202, Block A'
        WHEN AddressId = 3 THEN 'Villa 303, Lane 4'
        WHEN AddressId = 4 THEN 'Apartment 404, Street 5'
        WHEN AddressId = 5 THEN 'Building 505, Area 6'
        WHEN AddressId = 6 THEN 'Plot 606, Sector 7'
        WHEN AddressId = 7 THEN 'Unit 707, District 8'
        WHEN AddressId = 8 THEN 'Suite 808, Zone 9'
        WHEN AddressId = 9 THEN 'Office 909, Block 10'
        WHEN AddressId = 10 THEN 'House 1010, Lane 11'
        WHEN AddressId = 11 THEN 'Flat 1111, Street 12'
        WHEN AddressId = 12 THEN 'Villa 1212, Area 13'
        WHEN AddressId = 13 THEN 'Building 1313, Sector 14'
        WHEN AddressId = 14 THEN 'Plot 1414, Zone 15'
        WHEN AddressId = 15 THEN 'Unit 1515, District 16'
        WHEN AddressId = 16 THEN 'Suite 1616, Block 17'
        WHEN AddressId = 17 THEN 'Office 1717, Street 18'
        WHEN AddressId = 18 THEN 'House 1818, Lane 19'
        WHEN AddressId = 19 THEN 'Flat 1919, Area 20'
        WHEN AddressId = 20 THEN 'Villa 2020, Sector 21'
    END,
    AddressLine2 = CASE
        WHEN AddressId = 1 THEN 'Near City Park'
        WHEN AddressId = 2 THEN 'Near Main Road'
        WHEN AddressId = 3 THEN 'Near Central Square'
        WHEN AddressId = 4 THEN 'Near Local Market'
        WHEN AddressId = 5 THEN 'Near Community Center'
        WHEN AddressId = 6 THEN 'Near School'
        WHEN AddressId = 7 THEN 'Near Bus Stand'
        WHEN AddressId = 8 THEN 'Near Hospital'
        WHEN AddressId = 9 THEN 'Near Shopping Mall'
        WHEN AddressId = 10 THEN 'Near Railway Station'
        WHEN AddressId = 11 THEN 'Near Cinema Hall'
        WHEN AddressId = 12 THEN 'Near University'
        WHEN AddressId = 13 THEN 'Near Tech Park'
        WHEN AddressId = 14 THEN 'Near Police Station'
        WHEN AddressId = 15 THEN 'Near Park Avenue'
        WHEN AddressId = 16 THEN 'Near Library'
        WHEN AddressId = 17 THEN 'Near Gymnasium'
        WHEN AddressId = 18 THEN 'Near Post Office'
        WHEN AddressId = 19 THEN 'Near Supermarket'
        WHEN AddressId = 20 THEN 'Near Botanical Garden'
    END,
    City = CASE
        WHEN AddressId IN (1, 15) THEN 'Mumbai'
        WHEN AddressId IN (2, 17) THEN 'Ahmedabad'
        WHEN AddressId IN (3, 18) THEN 'Delhi'
        WHEN AddressId IN (4, 19) THEN 'Chandigarh'
        WHEN AddressId IN (5, 20) THEN 'Gurgaon'
        WHEN AddressId = 6 THEN 'Jaipur'
        WHEN AddressId = 7 THEN 'Kolkata'
        WHEN AddressId = 8 THEN 'Bangalore'
        WHEN AddressId = 9 THEN 'Chennai'
        WHEN AddressId = 10 THEN 'Hyderabad'
        WHEN AddressId = 11 THEN 'Pune'
        WHEN AddressId = 12 THEN 'Kolkata'
        WHEN AddressId = 13 THEN 'Noida'
        WHEN AddressId = 14 THEN 'Lucknow'
        WHEN AddressId = 16 THEN 'Kanpur'
        WHEN AddressId = 17 THEN 'Nagpur'
        WHEN AddressId = 18 THEN 'Agra'
        WHEN AddressId = 19 THEN 'Indore'
        WHEN AddressId = 20 THEN 'Surat'
    END,
    Region = CASE
        WHEN AddressId IN (1, 15) THEN 'Maharashtra'
        WHEN AddressId IN (2, 17) THEN 'Gujarat'
        WHEN AddressId IN (3, 18) THEN 'Delhi'
        WHEN AddressId IN (4, 19) THEN 'Punjab'
        WHEN AddressId IN (5, 20) THEN 'Haryana'
        WHEN AddressId = 6 THEN 'Rajasthan'
        WHEN AddressId = 7 THEN 'West Bengal'
        WHEN AddressId = 8 THEN 'Karnataka'
        WHEN AddressId = 9 THEN 'Tamil Nadu'
        WHEN AddressId = 10 THEN 'Telangana'
        WHEN AddressId = 11 THEN 'Maharashtra'
        WHEN AddressId = 12 THEN 'West Bengal'
        WHEN AddressId = 13 THEN 'Uttar Pradesh'
        WHEN AddressId = 14 THEN 'Uttar Pradesh'
        WHEN AddressId = 16 THEN 'Uttar Pradesh'
        WHEN AddressId = 17 THEN 'Maharashtra'
        WHEN AddressId = 18 THEN 'Uttar Pradesh'
        WHEN AddressId = 19 THEN 'Madhya Pradesh'
        WHEN AddressId = 20 THEN 'Gujarat'
    END,
   
    PostalCode = CASE
        WHEN AddressId = 1 THEN '400001'
        WHEN AddressId = 2 THEN '380001'
        WHEN AddressId = 3 THEN '110001'
        WHEN AddressId = 4 THEN '160001'
        WHEN AddressId = 5 THEN '122001'
        WHEN AddressId = 6 THEN '302001'
        WHEN AddressId = 7 THEN '700001'
        WHEN AddressId = 8 THEN '560001'
        WHEN AddressId = 9 THEN '600001'
        WHEN AddressId = 10 THEN '500001'
        WHEN AddressId = 11 THEN '411001'
        WHEN AddressId = 12 THEN '700002'
        WHEN AddressId = 13 THEN '201301'
        WHEN AddressId = 14 THEN '226001'
        WHEN AddressId = 16 THEN '208001'
        WHEN AddressId = 17 THEN '440001'
        WHEN AddressId = 18 THEN '282001'
        WHEN AddressId = 19 THEN '452001'
        WHEN AddressId = 20 THEN '395001'
    END;

	SELECT * FROM ADDRESS;

-- Insert shipments
INSERT INTO Shipment (OrderId, AddressId, Carrier, ShipmentDate, Status) VALUES
(1, 1, 'UPS', '2024-07-30', 'Shipped'),
(2, 2, 'FedEx', '2024-07-31', 'Delivered'),
(3, 3, 'DHL', '2024-08-01', 'Delivered'),
(4, 4, 'USPS', '2024-08-02', 'Returned'),
(5, 5, 'UPS', '2024-08-03', 'Shipped'),
(6, 6, 'FedEx', '2024-07-30', 'Shipped'),
(7, 7, 'DHL', '2024-07-31', 'Delivered'),
(8, 8, 'USPS', '2024-08-01', 'Returned'),
(9, 9, 'UPS', '2024-08-02', 'Shipped'),
(10, 10, 'FedEx', '2024-08-03', 'Delivered'),
(11, 11, 'DHL', '2024-07-30', 'Shipped'),
(12, 12, 'USPS', '2024-07-31', 'Returned'),
(13, 13, 'UPS', '2024-08-01', 'Shipped'),
(14, 14, 'FedEx', '2024-08-02', 'Delivered'),
(15, 15, 'DHL', '2024-08-03', 'Shipped'),
(16, 16, 'USPS', '2024-07-30', 'Returned'),
(17, 17, 'UPS', '2024-07-31', 'Shipped'),
(18, 18, 'FedEx', '2024-08-01', 'Delivered'),
(19, 19, 'DHL', '2024-08-02', 'Shipped'),
(20, 20, 'USPS', '2024-08-03', 'Delivered');

SELECT * FROM SHIPMENT;

