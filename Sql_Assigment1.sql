--1. Create query to Get top 5 cities with highest number of Employees in it.
/*
There is no information in the database containing the cities with Employees.
City is only in customer and supplier table
*/

--2. Create query to Get top 5 Customers with highest number of Orders.

SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS OrderCount
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerName
ORDER BY OrderCount DESC
LIMIT 5;

--3. Create query to Get top 5 Customers with biggest total quantity of items from all orders.

SELECT Customers.CustomerName, SUM(OrderDetails.Quantity) AS TotalQuantity
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
GROUP BY Customers.CustomerName
ORDER BY TotalQuantity DESC
LIMIT 5;


--4. Create query to Get all product and category information at the same query.

SELECT Products.ProductName, Categories.CategoryName
FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;