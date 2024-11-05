![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

{name: "Babelgum"}
Project : {name: 1} 
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

{ number_of_employees: { $gt: 5000 } }
Project : {number_of_employees: 1 }
Sort:{number_of_employees: 1 }
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

{founded_year: {$gte:2000, $lte:2005}}
Project : {name:1, founded_year: 1}
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

{$and:[{"ipo.valuation_amount": {$gte:100000000}},{founded_year: {$lt:2010}}]}
Project : {ipo:1, name:1,_id:0}
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

{$and:[{number_of_employees: {$lt:1000}},{founded_year: {$lt:2005}}]}
Project : 
Sort:{number_of_employees:1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 10

### 6. All the companies that don't include the `partners` field.

{ partners: { $exists: false } }
Project : 
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

### 7. All the companies that have a null type of value on the `category_code` field.

{ category_code: { $type: "null" } }
Project : 
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

{$and: [ {number_of_employees: {$gte:100}}, {number_of_employees: {$lt:1000}}] }
Project : {name: 1,number_of_employees:1,_id:0}
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

### 9. Order all the companies by their IPO price in a descending order.


Project : 
Sort:{"ipo.valuation_amount":-1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

{number_of_employees : { $ne: null } }
Project : 
Sort:{number_of_employees: -1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

 {founded_month: {$gte: 6} } 
Project : 
Sort:{number_of_employees: -1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

{$and:[{"acquisition.price_amount": {$gt:10000000}},{founded_year: {$lt:2000}}]} 
Project : 
Sort:
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 


### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.
{$and:[{"acquisition.acquired_year":{$gt:2010}},{ founded_year: { $type: "number" } }]} 
Project : {name:1, acquisition:1, _id: 0}
Sort: {"acquisition.price_amount":1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

{ founded_year: { $type: "number" } }
Project : {name:1, founded_year:1, _id: 0}
Sort: {founded_year:1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

{founded_day: {$lte: 7}} 
Project : 
Sort: {"acquisition.price_amount":1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

{$and:[{ category_code: { $all: ["web"] } },{number_of_employees: {$gt:4000}}]}
Project : 
Sort: {"acquisition.price_amount":1}
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

{$and:[{"acquisition.price_currency_code": "EUR"},{"acquisition.price_amount":{$gt:10000000}}]}
Project : {"acquisition.price_amount":1,"acquisition.price_currency_code":1}
Sort: 
Collation:
Index Hint:
Max Time MS:
Skip:
Limit:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

{founded_month:{$lte: 3}}
Project : {name:1, acquisition:1}
Sort: 
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 10 


### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

{$and:[{founded_year:{$gte: 2000, $lte: 2010}},{"acquisition.acquired_year": {$gt:2011}}]}
Project : 
Sort: 
Collation:
Index Hint:
Max Time MS:
Skip:
Limit: 

