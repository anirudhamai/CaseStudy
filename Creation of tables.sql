CREATE DATABASE SHOPEASE;

USE SHOPEASE;

CREATE TABLE CUSTOMER 
(
    UserId INT PRIMARY KEY IDENTITY(1,1),
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    CreatedAt DATE NOT NULL DEFAULT GETDATE()
);
SELECT * FROM CUSTOMER;

CREATE TABLE Category (
    CategoryId INT PRIMARY KEY IDENTITY(1,1),
    CategoryName VARCHAR(50) NOT NULL UNIQUE
);

SELECT * FROM Category
CREATE TABLE Product (
    ProductId INT PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(100) NOT NULL,
    CategoryId INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL CHECK (Price > 0),
    FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId)
);
SELECT * FROM Product

CREATE TABLE [Order] (
    OrderId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    OrderDate DATE NOT NULL DEFAULT GETDATE(),
    Status VARCHAR(20) NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL CHECK (TotalAmount >= 0),
    FOREIGN KEY (UserId) REFERENCES CUSTOMER(UserId)
);


SELECT * FROM [ORDER];

CREATE TABLE OrderItem (
    OrderItemId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    UnitPrice DECIMAL(10, 2) NOT NULL CHECK (UnitPrice > 0),
    FOREIGN KEY (OrderId) REFERENCES [Order](OrderId),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);
SELECT * FROM ORDERITEM;

CREATE TABLE Cart (
    CartId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    CreatedAt DATE NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES CUSTOMER(UserId)
);

SELECT * FROM CART;

CREATE TABLE CartItem (
    CartItemId INT PRIMARY KEY IDENTITY(1,1),
    CartId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    FOREIGN KEY (CartId) REFERENCES Cart(CartId),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);
CREATE TABLE Inventory (
    ProductId INT PRIMARY KEY,
    StockQuantity INT NOT NULL CHECK (StockQuantity >= 0),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);
CREATE TABLE Review (
    ReviewId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    ProductId INT NOT NULL,
    Rating INT NOT NULL CHECK (Rating BETWEEN 1 AND 5),
    Comment TEXT NULL,
    ReviewDate DATE NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES CUSTOMER(UserId),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);
CREATE TABLE Payment (
    PaymentId INT PRIMARY KEY IDENTITY(1,1),
    OrderId INT NOT NULL,
    PaymentMethod VARCHAR(50) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL CHECK (Amount > 0),
    FOREIGN KEY (OrderId) REFERENCES [Order](OrderId)
);
CREATE TABLE Discount (
    DiscountId INT PRIMARY KEY IDENTITY(1,1),
    ProductId INT NOT NULL,
    DiscountPercentage DECIMAL(5, 2) NOT NULL CHECK (DiscountPercentage BETWEEN 0 AND 100),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);

CREATE TABLE Wishlist (
    WishlistId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES CUSTOMER(UserId)
);

SELECT * FROM WishList;

CREATE TABLE WishlistItem (
    WishlistItemId INT PRIMARY KEY IDENTITY(1,1),
    WishlistId INT NOT NULL,
    ProductId INT NOT NULL,
    FOREIGN KEY (WishlistId) REFERENCES Wishlist(WishlistId),
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);

SELECT * FROM WishListItem;

CREATE TABLE Address (
    AddressId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    AddressLine1 VARCHAR(255) NOT NULL,
    AddressLine2 VARCHAR(255),
    City VARCHAR(100) NOT NULL,
    Region VARCHAR(100),
    County VARCHAR(100),
    PostalCode VARCHAR(20),
    FOREIGN KEY (UserId) REFERENCES Customer(UserId)
);

SELECT * FROM ADDRESS;
DELETE FROM ADDRESS;
SELECT * FROM ADDRESS;

CREATE TABLE Shipment (
    ShipmentId INT PRIMARY KEY identity(1,1),
    OrderId INT,
    AddressId INT,
    Carrier VARCHAR(50),
    ShipmentDate DATE,
    Status VARCHAR(20),
    FOREIGN KEY (OrderId) REFERENCES [Order](OrderId),
    FOREIGN KEY (AddressId) REFERENCES Address(AddressId)
);

SELECT * FROM Shipment;











