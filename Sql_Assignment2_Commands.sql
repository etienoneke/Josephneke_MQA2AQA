-- Create a database 
CREATE DATABASE sql_assignment_database;

-- Connect to the newly created database
\c sql_assignment_database


-- Create the Movies table
CREATE TABLE Movies (
    MovieID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    ReleaseYear INT,
    DurationMinutes INT
);
/*
movieid | title | releaseyear | durationminutes 
---------+-------+-------------+-----------------
*/

-- Create the CinemaHalls table
CREATE TABLE CinemaHalls (
    HallID SERIAL PRIMARY KEY,
    HallName VARCHAR(255) NOT NULL,
    SeatingCapacity INT
);
/*
hallid | hallname | seatingcapacity 
--------+----------+-----------------
*/

-- Create the Showtimes table
CREATE TABLE Showtimes (
    ShowtimeID SERIAL PRIMARY KEY,
    MovieID INT REFERENCES Movies(MovieID),
    HallID INT REFERENCES CinemaHalls(HallID),
    ShowtimeDateTime TIMESTAMP,
    TicketPrice NUMERIC(10, 2)
);
/*
 showtimeid | movieid | hallid | showtimedatetime | ticketprice 
------------+---------+--------+------------------+-------------
(0 rows)
*/

-- Create the Tickets table
CREATE TABLE Tickets (
    TicketID SERIAL PRIMARY KEY,
    ShowtimeID INT REFERENCES Showtimes(ShowtimeID),
    SeatNumber VARCHAR(10),
    CustomerName VARCHAR(255) NOT NULL,
    PurchaseDateTime TIMESTAMP
);
/*
ticketid | showtimeid | seatnumber | customername | purchasedatetime 
----------+------------+------------+--------------+------------------
(0 rows)
*/

/*
List of relations
 Schema |    Name     | Type  | Owner 
--------+-------------+-------+-------
 public | cinemahalls | table | nekez
 public | movies      | table | nekez
 public | showtimes   | table | nekez
 public | tickets     | table | nekez
(4 rows)
*/


-- Seed data into the table
INSERT INTO Movies (Title, ReleaseYear, DurationMinutes)
VALUES ('The Great Nigeria', 2023, 150);
/*
movieid |       title       | releaseyear | durationminutes 
---------+-------------------+-------------+-----------------
       1 | The Great Nigeria |        2023 |             150
*/



-- Update Raw
UPDATE Movies
SET DurationMinutes = 60
WHERE Title = 'The Great Nigeria';
/*
 movieid |       title       | releaseyear | durationminutes 
---------+-------------------+-------------+-----------------
       1 | The Great Nigeria |        2023 |              60
*/



--Delete Raw
DELETE FROM Movies
WHERE Title = 'The Great Nigeria';
/*
movieid | title | releaseyear | durationminutes 
---------+-------+-------------+-----------------
(0 rows)
*/