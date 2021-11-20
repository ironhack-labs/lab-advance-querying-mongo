![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

db.companies.find(
{name: 'Babelgum'},
{name: 1,\_id: 0}
)

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companies.find(
{number_of_employees: {$gt: 5000}}
).limit(20).sort(number_of_employees: 1)

<!-- query: /You should copy/paste the query in here/
projection: /You should copy/paste the projection in here/
sort: /You should copy/paste the sort in here/
skip: /You should copy/paste the skip in here/
limit: /You should copy/paste the limit in here/ -->

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

db.companies.find(
{founded_year: {$gte: 2000,$lte: 2005}},
{name: 1,founded_year: 1,\_id: 0}
)

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companies.find(
{'ipo.valuation_amount': {$gt: 100000000},founded_year: {$lt: 2010}},
{name: 1,'ipo.valuation_amount': 1,\_id: 0}
)

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find(
{number_of_employees: {$lt: 1000},founded_year: {$lt: 2005}}
).limit(10).sort(number_of_employees: 1)

### 6. All the companies that don't include the `partners` field.

db.companies.find(
{partners: {$exists: false}}
)

### 7. All the companies that have a null type of value on the `category_code` field.

db.companies.find(
{category_code: null}
)

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find(
{number_of_employees: {$gte: 100,$lte: 1000}},
{name: 1,number_of_employees: 1,\_id: 0}
)

### 9. Order all the companies by their IPO price in a descending order.

db.companies.sort({"ipo.valuation_amount": -1})

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

db.companies.limit(10).sort({number_of_employees: 1 })

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find(
{founded_month: {$gt: 6}}
).limit(1000)

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

db.companies.find(
{founded_month: {$lt: 2000},'acquisition.price_amount': {$gt: 10000000}}
)

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

db.companies.find(
{'acquisition.acquired_year': {$gte: 2010}},
{name: 1,acquisition: 1,\_id: 0}
).sort()

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find(
{},
{name: 1,founded_year: 1,\_id: 0}
).sort({founded_year: 1})

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

query: {founded_day: {$lte: 7}}
projection:
sort: {"acquisition.price_amount": -1}
skip:
limit: 10
results: 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

query: {$and: [{category_code: {$eq: "web"}}, {number_of_employees: {$gt: 4000}}, {number_of_employees: {$ne: null}}]}
projection:
sort: {number_of_employees: -1}
skip:
limit:
results: 9

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

query: {$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": {$eq: "EUR"}}]}
projection:
sort:
skip:
limit:
results: 7

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

query: {"acquisition.acquired_month": {$gte: 1, $lte: 3}}
projection: {name: 1, acquisition: 1, \_id: 0}
sort:
skip:
limit: 10
results: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

query: {$and: [{founded_year: {$gte: 2000, $lte: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}
projection:
sort:
skip:
limit:
results: 486
