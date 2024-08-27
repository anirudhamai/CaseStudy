USE SHOPEASE



--Customer History
SELECT 
    o.OrderId,
    o.OrderDate,
    o.Status,
    o.TotalAmount
FROM [Order] o
WHERE o.UserId = 2;

SELECT * FROM CUSTOMER
SELECT * FROM [ORDER];

--Products in Orders
--List all products in a specific order along with the quantity, unit price, and total price.

SELECT 
    oi.OrderItemId,
    p.Name AS ProductName,
    oi.Quantity,
    oi.UnitPrice,
    (oi.Quantity * oi.UnitPrice) AS TotalPrice
FROM OrderItem oi
JOIN Product p ON oi.ProductId = p.ProductId
WHERE oi.OrderId = 2;

SELECT * FROM ORDERITEM;
--OrderId 1 has multiple orders

--Customer Reviews
--Retrieve all reviews made by a specific customer.
SELECT 
    r.ReviewId,
    p.Name AS ProductName,
    r.Rating,
    r.Comment,
    r.ReviewDate
FROM Review r
JOIN Product p ON r.ProductId = p.ProductId
WHERE r.UserId = 5;
------------------------------------------------------
SELECT * FROM PRODUCT;
SELECT * FROM REVIEW


--Product Sales Summary
--i.)Get the total sales and number of orders for each product.
SELECT 
    p.ProductId,
    p.Name AS ProductName,
    COUNT(oi.OrderItemId) AS NumberOfOrders,
    SUM(oi.Quantity) AS TotalQuantity,
    SUM(oi.Quantity * oi.UnitPrice) AS TotalSales
FROM OrderItem oi
JOIN Product p ON oi.ProductId = p.ProductId
GROUP BY p.ProductId, p.Name;

--ii.)Users ordered smartphone Query for No.oforders and quantity
SELECT 
    o.UserId,
    COUNT(oi.OrderId) AS NumberOfOrders,
    SUM(oi.Quantity) AS TotalQuantity
FROM [Order] o
INNER JOIN OrderItem oi ON o.OrderId = oi.OrderId
INNER JOIN Product p ON oi.ProductId = p.ProductId
WHERE p.Name = 'Smartphone'
GROUP BY o.UserId;

--Monthly Sales Report
--Generate a monthly sales report showing total sales and number of orders.
SELECT 
    YEAR(o.OrderDate) AS Year,
    MONTH(o.OrderDate) AS Month,
    COUNT(o.OrderId) AS NumberOfOrders,
    SUM(o.TotalAmount) AS TotalSales
FROM [Order] o
GROUP BY YEAR(o.OrderDate), MONTH(o.OrderDate)
ORDER BY YEAR(o.OrderDate), MONTH(o.OrderDate);

SELECT * FROM PRODUCT
-- Average Order Value by Customer
--Calculate the average order value for each customer.

SELECT 
    u.UserId,
    u.UserName,
    AVG(o.TotalAmount) AS AverageOrderValue
FROM [Order] o
JOIN Customer u ON o.UserId = u.UserId
GROUP BY u.UserId, u.UserName;


--Orders by Product Category
--Retrieve the number of orders and total sales for each product category.
SELECT 
    c.CategoryId,
    c.CategoryName,
    COUNT(oi.OrderItemId) AS NumberOfOrders,
    SUM(oi.Quantity * oi.UnitPrice) AS TotalSales
FROM OrderItem oi
JOIN Product p ON oi.ProductId = p.ProductId
JOIN Category c ON p.CategoryId = c.CategoryId
GROUP BY c.CategoryId, c.CategoryName;

--High-Value Customers
--Identify customers who have placed orders with a total value exceeding Rs1000.
SELECT 
    o.UserId,
    u.UserName,
    SUM(o.TotalAmount) AS TotalOrderValue
FROM [Order] o
JOIN Customer u ON o.UserId = u.UserId
GROUP BY o.UserId, u.UserName
HAVING SUM(o.TotalAmount) > 1000;

--Order Fulfillment Time
--i.)Calculate the average time taken to fulfill orders (from order date to shipment date).
SELECT 
    AVG(DATEDIFF(day,s.ShipmentDate,o.OrderDate)) AS AverageFulfillmentTime
FROM [Order] o
JOIN Shipment s ON o.OrderId = s.OrderId
WHERE s.Status = 'Delivered';

--ii.)Table to see the shipment and order placed date
SELECT 
   *
FROM [Order] o
JOIN Shipment s ON o.OrderId = s.OrderId



--Products Not Reviewed
--Find products that have never been reviewed.
SELECT 
    p.ProductId,
    p.Name
FROM Product p
LEFT JOIN Review r ON p.ProductId = r.ProductId
WHERE r.ReviewId IS NULL;
-----There is no product without any review


--Cart Abandonment Rate
--Calculate the cart abandonment rate (carts created but not converted to orders).
INSERT INTO Cart (UserId, CreatedAt) VALUES
(1, '2024-01-10'),
(2, '2024-02-15'),
(3, '2024-03-20'),
(4, '2024-04-25'),
(5, '2024-05-30');
SELECT * FROM CART;

INSERT INTO [Order] (UserId, OrderDate, Status, TotalAmount) VALUES
(1, '2024-01-15', 'Processing', 100.00),
(2, '2024-02-18', 'Shipped', 50.00),
(3, '2024-03-22', 'Delivered', 75.00);
INSERT INTO OrderItem (OrderId, ProductId, Quantity, UnitPrice) VALUES
(1, 1, 1, 100.00),  -- Order 1, Product 1
(2, 2, 1, 50.00),   -- Order 2, Product 2
(3, 3, 1, 75.00);   -- Order 3, Product 3

SELECT * FROM CUSTOMER;

--Customer Wishlist Insights
--Retrieve the most wished-for products by customers.
--100 added 3 new user and with card but didnt placed order
INSERT INTO CUSTOMER (UserName, Email) VALUES
('Aarav Patel', 'aarav.patel@example.com'),
('Isha Sharma', 'isha.@example.com'),
('Arjun Gupta', 'arjun.gupta@example.com');


INSERT INTO Cart (UserId, CreatedAt) VALUES
(21, '2024-01-10'),
(22, '2024-02-15'),
(23, '2024-03-20');

SELECT 
    (COUNT(DISTINCT c.CartId) - COUNT(DISTINCT o.OrderId))* 100.0 / COUNT(DISTINCT c.CartId)  AS CartAbandonmentRate, COUNT(DISTINCT c.CartId) AS no_of_id
FROM Cart c
LEFT JOIN [Order] o ON c.UserId = o.UserId
WHERE o.OrderId IS NULL;

SELECT * FROM CARTITEM
--
SELECT 
    p.ProductId,
    p.Name AS ProductName,
    COUNT(wi.WishlistItemId) AS NumberOfWishlists
FROM WishlistItem wi
JOIN Product p ON wi.ProductId = p.ProductId
GROUP BY p.ProductId, p.Name
ORDER BY NumberOfWishlists DESC;


----
SELECT 
    Status,
    COUNT(ShipmentId) AS NumberOfShipments
FROM Shipment
GROUP BY Status;


--
SELECT 
    d.DiscountId,
    p.Name AS ProductName,
    d.DiscountPercentage,
    COUNT(oi.OrderItemId) AS NumberOfOrders,
	SUM(oi.Quantity * oi.UnitPrice)AS ActualPrice,
    SUM(oi.Quantity * oi.UnitPrice * d.DiscountPercentage / 100) AS TotalDiscount
FROM Discount d
JOIN Product p ON d.ProductId = p.ProductId
JOIN OrderItem oi ON p.ProductId = oi.ProductId
GROUP BY d.DiscountId, p.Name, d.DiscountPercentage;

--Inventory Status
SELECT 
    o.OrderId,
    p.ProductId,
    p.Name AS ProductName,
    i.StockQuantity,
    oi.Quantity AS OrderedQuantity,
    (i.StockQuantity - oi.Quantity) AS AvailableQuantity
FROM OrderItem oi
JOIN [Order] o ON oi.OrderId = o.OrderId
JOIN Product p ON oi.ProductId = p.ProductId
JOIN Inventory i ON p.ProductId = i.ProductId;

SELECT * FROM ORDERITEM;
--Customer Purchase Patterns
SELECT 
    u.UserId,
    u.UserName,
    DATEPART(dw, o.OrderDate) AS DayOfWeek,
    COUNT(o.OrderId) AS NumberOfOrders
FROM [Order] o
JOIN User u ON o.UserId = u.UserId
GROUP BY u.UserId, u.UserName, DATEPART(dw, o.OrderDate)
ORDER BY NumberOfOrders DESC;

--Sales Performance by Category
SELECT 
    c.CategoryId,
    c.CategoryName,
    SUM(oi.Quantity * oi.UnitPrice) AS TotalSales,
    AVG(o.TotalAmount) AS AverageOrderValue
FROM OrderItem oi
JOIN Product p ON oi.ProductId = p.ProductId
JOIN Category c ON p.CategoryId = c.CategoryId
JOIN [Order] o ON oi.OrderId = o.OrderId
GROUP BY c.CategoryId, c.CategoryName;

--Customer Lifetime Value
SELECT 
    u.UserId,
    u.UserName,
    SUM(o.TotalAmount) AS LifetimeValue
FROM [Order] o
JOIN User u ON o.UserId = u.UserId
GROUP BY u.UserId, u.UserName;

--Product Popularity by Region
SELECT 
    s.Region,
    p.ProductId,
    p.Name AS ProductName,
    COUNT(s.ShipmentId) AS NumberOfShipments
FROM Shipment s
JOIN [Order] o ON s.OrderId = o.OrderId
JOIN OrderItem oi ON o.OrderId = oi.OrderId
JOIN Product p ON oi.ProductId = p.ProductId
GROUP BY s.Region, p.ProductId, p.Name
ORDER BY s.Region, NumberOfShipments DESC;

--Discount Effectiveness
SELECT 
    SUM(CASE WHEN d.DiscountId IS NOT NULL THEN oi.Quantity * oi.UnitPrice * d.DiscountPercentage / 100 ELSE 0 END) AS DiscountedSales,
    SUM(CASE WHEN d.DiscountId IS NULL THEN oi.Quantity * oi.UnitPrice ELSE 0 END) AS NonDiscountedSales
FROM OrderItem oi
LEFT JOIN Discount d ON oi.ProductId = d.ProductId;

--Repeat Purchase Rate
WITH PurchaseCounts AS (
    SELECT 
        UserId,
        COUNT(OrderId) AS NumberOfOrders
    FROM [Order]
    GROUP BY UserId
)
SELECT 
    COUNT(UserId) * 100.0 / (SELECT COUNT(DISTINCT UserId) FROM [Order]) AS RepeatPurchaseRate
FROM PurchaseCounts
WHERE NumberOfOrders > 1;

--High-Rated Products

SELECT 
    p.ProductId,
    p.Name AS ProductName,
    AVG(r.Rating) AS AverageRating
FROM Review r
JOIN Product p ON r.ProductId = p.ProductId
GROUP BY p.ProductId, p.Name
ORDER BY AverageRating DESC;

--Shipping Performance Analysis
SELECT 
    s.Carrier,
    AVG(DATEDIFF(day, o.OrderDate, s.ShipmentDate)) AS AverageShippingTime
FROM Shipment s
JOIN [Order] o ON s.OrderId = o.OrderId
GROUP BY s.Carrier
ORDER BY AverageShippingTime;

--Abandoned Cart Recovery
SELECT 
    (COUNT(DISTINCT c.CartId) - COUNT(DISTINCT o.OrderId)) * 100.0 / COUNT(DISTINCT c.CartId) AS AbandonedCartRecoveryRate
FROM Cart c
LEFT JOIN [Order] o ON c.UserId = o.UserId
WHERE o.OrderId IS NOT NULL;


--User Engagement
SELECT 
    u.UserId,
    u.UserName,
    COALESCE(COUNT(DISTINCT o.OrderId), 0) AS NumberOfOrders,
    COALESCE(COUNT(DISTINCT r.ReviewId), 0) AS NumberOfReviews,
    COALESCE(COUNT(DISTINCT wi.WishlistItemId), 0) AS NumberOfWishlists,
    (COALESCE(COUNT(DISTINCT o.OrderId), 0) + COALESCE(COUNT(DISTINCT r.ReviewId), 0) + COALESCE(COUNT(DISTINCT wi.WishlistItemId), 0)) AS TotalInteractions
FROM CUSTOMER u
LEFT JOIN [Order] o ON u.UserId = o.UserId
LEFT JOIN Review r ON u.UserId = r.UserId
LEFT JOIN WishlistItem wi ON u.UserId = (SELECT UserId FROM Wishlist WHERE WishlistId = wi.WishlistId)
GROUP BY u.UserId, u.UserName;


--Sales Trend Analysis

SELECT 
    YEAR(o.OrderDate) AS Year,
    MONTH(o.OrderDate) AS Month,
    SUM(o.TotalAmount) AS TotalSales
FROM [Order] o
WHERE o.OrderDate >= DATEADD(year, -1, GETDATE())
GROUP BY YEAR(o.OrderDate), MONTH(o.OrderDate)
ORDER BY Year, Month;

-- Inventory Turnover Rate
SELECT 
    p.ProductId,
    p.Name AS ProductName,
    SUM(oi.Quantity) AS TotalSold,
    i.StockQuantity AS CurrentStock,
    CASE WHEN i.StockQuantity > 0 THEN SUM(oi.Quantity) / i.StockQuantity ELSE NULL END AS InventoryTurnoverRate
FROM OrderItem oi
JOIN Product p ON oi.ProductId = p.ProductId
JOIN Inventory i ON p.ProductId = i.ProductId
GROUP BY p.ProductId, p.Name, i.StockQuantity;

--Payment Method Preference
SELECT 
    PaymentMethod,
    COUNT(PaymentId) AS NumberOfPayments
FROM Payment
GROUP BY PaymentMethod
ORDER BY NumberOfPayments DESC;

--Customer Retention Analysis
WITH PurchaseDates AS (
    SELECT 
        UserId,
        MIN(OrderDate) AS FirstPurchaseDate,
        MAX(OrderDate) AS LastPurchaseDate
    FROM [Order]
    GROUP BY UserId
)
SELECT 
    COUNT(UserId) AS RetainedCustomers
FROM PurchaseDates
WHERE DATEDIFF(year, FirstPurchaseDate, LastPurchaseDate) > 1;

--Product Cross-Selling Opportunities
SELECT 
    oi1.ProductId AS Product1,
    oi2.ProductId AS Product2,
    COUNT(*) AS CoPurchaseCount
FROM OrderItem oi1
JOIN OrderItem oi2 ON oi1.OrderId = oi2.OrderId AND oi1.ProductId <> oi2.ProductId
GROUP BY oi1.ProductId, oi2.ProductId
ORDER BY CoPurchaseCount DESC;




























