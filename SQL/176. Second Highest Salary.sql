-- SQL SCHEMA

-- Create table If Not Exists Employee (id int, salary int)
-- Truncate table Employee
-- insert into Employee (id, salary) values ('1', '100')
-- insert into Employee (id, salary) values ('2', '200')
-- insert into Employee (id, salary) values ('3', '300')

-- Table: Employee

-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
-- id is the primary key column for this table.
-- Each row of this table contains information about the salary of an employee.
 

-- Write an SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.

-- The query result format is in the following example.

 

-- Example 1:

-- Input: 
-- Employee table:
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- Output: 
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+
-- Example 2:

-- Input: 
-- Employee table:
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- +----+--------+
-- Output: 
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | null                |
-- +---------------------+

SELECT max(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT max(Salary) FROM Employee)

-- Using window function (RANK, DENSE_RANK, ROW_NUMBER, MAX(), MIN()) to append ranks, and the select records with values equal to rank n. (use dense_rank if more than one employee has the maximum salary
WITH CTE AS
			(SELECT Salary, RANK () OVER (ORDER BY Salary desc) AS RANK_desc
			   FROM Employee)
SELECT MAX(salary) AS SecondHighestSalary
  FROM CTE
 WHERE RANK_desc = 2

-- ORDER BY value, LIMIT n-1 OFFSET n or use TOP n (can also find the 2nd by using TOP 2 + SELECT MIN())
SELECT IFNULL((SELECT DISTINCT Salary
	             FROM Employee 
				 ORDER BY Salary DESC 
				 LIMIT 1,1),NULL) AS SecondHighestSalary

-- (Apply to find the 2nd): SELECT MAX(b.val) FROM table a, table b WHERE a.val > b.val
SELECT
   MAX(a.Salary) as SecondHighestSalary
  FROM Employee a
  JOIN Employee b
    ON a.Salary < b.Salary

-- Nested query: SELECT val FROM table a WHERE n > (SELECT val FROM table b WHERE b.val > a.val). If using this to find the 2nd, need to combine the third way above (ORDER BY, LIMIT, OFFSET) to remove the 1st.
SELECT DISTINCT salary
  FROM Employee a
 WHERE 2> (SELECT COUNT(DISTINCT salary) FROM Employee b WHERE b.salary > a.salary )
 ORDER BY 1 DESC
 LIMIT 2 OFFSET 1