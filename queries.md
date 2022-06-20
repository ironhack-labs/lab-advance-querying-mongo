![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

FILTER: {name: 'Babelgum'}
PROYECT: {name:1}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

FILTER:{number_of_employees: {$gt:5000}}
LIMIT: 20
{number_of_employees: -1} (DESCENDING SORT)

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

FILTER: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}
PROYECT: {name:1, founded_year:1}
SORT: 
LIMIT:

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

FILTER: {$and:[{founded_year: {$lt: 2010}}, {'ipo.valuation_amount': {$gt: 100000000}}]}
PROYECT: {ipo: 1, name:1}
SORT:
LIMIT:

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

FILTER: {$and: [{number_of_employees: {$lt: 1000}},{founded_year: {$lt:2005}}]}
PROYECT:
SORT: {number_of_employees: -1}
LIMIT: 10

### 6. All the companies that don't include the `partners` field.

FILTER: {partners: {$exists:false}}
PROYECT:
SORT:
LIMIT:

### 7. All the companies that have a null type of value on the `category_code` field.

FILTER: {category_code: null}
PROYECT: {name:1, category_code:1}
SORT:
LIMIT:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

FILTER: {$and: [{number_of_employees: {$gte: 100}},{number_of_employees: {$lt: 1000}}]}
PROYECT: {name:1, number_of_employees:1}
SORT:
LIMIT:

### 9. Order all the companies by their IPO price in a descending order.

FILTER:
PROYECT:
SORT: {'ipo.valuation_amount': -1}
LIMIT:

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

FILTER:
PROYECT:
SORT: {number_of_employees: -1}
LIMIT: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

FILTER: {founded_month: {$gt:6}}
PROYECT:
SORT:
LIMIT:

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

FILTER: {$and: [{founded_year: {$lt: 2000}},{"acquisitions.price_amount":{$gt: 10000000}}]}
PROYECT:
SORT:
LIMIT:

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

FILTER: {"acquisition.acquired_year": {$gt: 2010}}
PROYECT: {name:1, acquisition:1}
SORT: {"acquisition.price_amount": -1}
LIMIT:

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

FILTER: 
PROYECT: {name:1, founded_year:1}
SORT: {founded_year:-1}
LIMIT:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

FILTER: {founded_day: {$lt: 8}}
PROYECT:
SORT: {'acquisition.price_amount': -1}
LIMIT:

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

FILTER: {$and:[{category_code: "web"},{number_of_employees: {$gt: 4000}}]}
PROYECT:
SORT: {number_of_employees: 1}
LIMIT:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

FILTER: {$and: [{'acquisition.price_amount': {$gt: 10000000}},{'acquisition.price_currency_code': 'EUR'}]}
PROYECT:
SORT:
LIMIT:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

FILTER: {'acquisition.acquired_month': {$lte: 3}}
PROYECT: {name:1, acquisition:1}
SORT:
LIMIT: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

FILTER: {$and: [{founded_year: {$gt:2000}},{founded_year: {$lt:2010}},{"acquisition.acquired_year": {$gt: 2011}}]}
PROYECT:
SORT:
LIMIT: