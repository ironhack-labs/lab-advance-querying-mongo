![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers



### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

QUERY: {name: 'Babelgum'}  
PROJECTION: {name: 1}
SORT:
SKIP:
LIMIT:

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

QUERY: {number_of_employees: {$gt: 5000}}
PROJECTION:
SORT: {number_of_employees: 1}
SKIP:
LIMIT: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

QUERY: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}
PROJECTION: {name: 1, founded_year: 1}
SORT:
SKIP:
LIMIT:

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

QUERY: {$and: [{"ipo.valuation_amount": {$gt: 100000000}}, {founded_year: {$lt: 2010}}]}
PROJECTION: {name: 1, ipo: 1}
SORT:
SKIP:
LIMIT:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

QUERY: {$and: [{number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}}]}
PROJECTION:
SORT: {number_of_employees: 1}
SKIP:
LIMIT: 10

### 6. All the companies that don't include the `partners` field.

QUERY: { partners: {$exists: false}}
PROJECTION:
SORT:
SKIP:
LIMIT:

### 7. All the companies that have a null type of value on the `category_code` field.

QUERY: {category_code: {$type: 10}}nu
PROJECTION:
SORT:
SKIP:
LIMIT:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

QUERY: {$and: [{number_of_employees: {$gte: 100}}, {number_of_employees: {$lt: 1000}}]}
PROJECTION: {name: 1, number_of_employees: 1}
SORT:
SKIP:
LIMIT:

### 9. Order all the companies by their IPO price in a descending order.

QUERY:
PROJECTION:
SORT: {"ipo.valuation_amount": -1}
SKIP:
LIMIT:

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

QUERY:
PROJECTION:
SORT: {number_of_employees: 1}
SKIP: 18791
LIMIT:

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

QUERY: {founded_month: {$gt: 6}}
PROJECTION:
SORT:
SKIP:
LIMIT: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

QUERY: {$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000}}]}
PROJECTION:
SORT:
SKIP:
LIMIT:

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

QUERY: {"acquisition.acquired_year": {$gt: 2010}}
PROJECTION: {name:1, acquisition:1}
SORT: {"acquisition.price_amount": 1}
SKIP:
LIMIT:

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

QUERY:
PROJECTION: {name:1, founded_year:1}
SORT: {founded_year: 1}
SKIP:
LIMIT:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. SORT them by their `acquisition price` in a descending order. Limit the search to 10 documents.

QUERY: {founded_day: {$lte: 7}}
PROJECTION:
SORT: {"acquisition.price_amount":-1}
SKIP:
LIMIT: 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. SORT them by the amount of employees in ascending order.

QUERY: {$and: [{category_code: 'web'}, {number_of_employees: {$gt: 4000}}]}
PROJECTION:
SORT: {number_of_employees: 1}
SKIP:
LIMIT:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

QUERY: {$and: [{"acquisition.price_amount": {$gt:  10000000}}, {"acquisition.price_currency_code": 'EUR'}]}
PROJECTION:
SORT:
SKIP:
LIMIT:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

QUERY: {"acquisition.acquired_month": {$lte: 3}}
PROJECTION: {name:1, acquisition:1}
SORT:
SKIP:
LIMIT: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

QUERY: {$and: [{founded_year: {$gt: 2000}}, {founded_year: {$lt: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}
PROJECTION:
SORT:
SKIP:
LIMIT:
