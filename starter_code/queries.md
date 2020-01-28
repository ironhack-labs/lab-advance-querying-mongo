![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

FILTER:{name: "Babelgum"}
PROJECT:{_id:0, name: 1}
SORT:
SKIP:0		LIMIT:0

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.


FILTER: {number_of_employees: {$gt: 9000}}
PROJECT
SORT: {number_of_employees: 1}
SKIP:0		LIMIT:0


### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

FILTER: { $and: [{founded_year: {$gte: 2000}},{founded_year: {$lte: 2005}}]}
PROJECT: {_id:0 ,name: 1,founded_year: 1}
SORT
SKIP:0		LIMIT:0

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

FILTER:  { $and:[{"ipo.valuation_amount" : {$gt: 100000000}},{founded_year:{$lt: 2010}}]}
PROJECT: {_id:0,name:1,ipo:1}
SORT
SKIP:0		LIMIT:0

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
FILTER: { $and: [{number_of_employees: {$lt: 1000}},{founded_year: {$lt: 2000}}]}
PROJECT
SORT: {number_of_employees: 1}
SKIP:0		LIMIT:0

### 6. All the companies that don't include the `partners` field.


FILTER	: {partners: { $size: 0 } }
PROJECT	:
SORT	:
SKIP:0		LIMIT:0

### 7. All the companies that have a null type of value on the `category_code` field.


FILTER	: {category_code: { $eq: null } }
PROJECT	:
SORT	:
SKIP:0		LIMIT:0

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.


FILTER	:{$and:[{number_of_employees: {$lt: 1000}},{number_of_employees: {$gte: 100}}]}
PROJECT	:{_id:0 ,name: 1,number_of_employees: 1}
SORT	:
SKIP:0		LIMIT:0

### 9. Order all the companies by their IPO price in a descending order.


FILTER	:
PROJECT	:
SORT	:{"ipo.valuation_amount" : 1}
SKIP:0		LIMIT:0

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

FILTER	:{number_of_employees : {$gte : 186000}}
PROJECT	:
SORT	:{number_of_employees : 1}
SKIP:0		LIMIT:0

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

FILTER	:{founded_month: {$gt: 6}}
PROJECT	:	
SORT	:	
SKIP:0		LIMIT:1000

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

FILTER	:
PROJECT	:
SORT	:
SKIP:0		LIMIT:0

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

FILTER	:{ $and: [{"acquisitions.price_amount": {$gt: 10000000}},{founded_year: {$lt: 2000}}]}
PROJECT	:
SORT	:
SKIP:0		LIMIT:0

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

FILTER	:{"acquisition.acquired_year": {$gt: 2010}}
PROJECT	: {name:1, acquisition: 1}
SORT	:{ "acquisition.price_amount": 1}
SKIP:0		LIMIT:0

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

FILTER	:
PROJECT	: {name:1, founded_year: 1}
SORT	:{ founded_year: 1}
SKIP:0		LIMIT:0

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

FILTER	:{founded_day: {$lte: 7}}
PROJECT	:{name:1, founded_year: 1}
SORT	:{ "acquisition.price_amount": -1}
SKIP:0		LIMIT:10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

FILTER	:{$and:[{category_code:"web"},{number_of_employees : {$gt : 4000}}]}
PROJECT	:
SORT	:{number_of_employees:1}
SKIP:0		LIMIT:0

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

FILTER	:{ $and: [{"acquisitions.price_amount": {$gt: 10000000}},{"ipo.valuation_currency_code": "EUR"}]}
PROJECT	:
SORT	:
SKIP:0		LIMIT:0

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

FILTER	:{"acquisition.acquired_month" : {$lte: 3}}
PROJECT	:{name:1, acquisition: 1}
SORT	:
SKIP:0		LIMIT:10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

FILTER	:{ $and: [{founded_year: {$gt: 2000}},{founded_year: {$lt: 2010}},{"acquisition.acquired_year":{$lt:2011}}]}
PROJECT	:
SORT	:
SKIP:0		LIMIT:0


