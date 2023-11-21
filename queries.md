![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

query: /You should copy/paste the query in here/
projection: /You should copy/paste the projection in here/
sort: /You should copy/paste the sort in here/
skip: /You should copy/paste the skip in here/
limit: /You should copy/paste the limit in here/

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->
query: {name: "Babelgum"}
projection: {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->
query: {number_of_employees: {$gte: 5000}}
sort: {number_of_employees: 1}
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

<!-- Your Code Goes Here -->
query: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lt: 2005}}]}
projection: {name: 1, founded_year: 1, _id: 0}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->
query: {$and: [{"ipo.valuation_amount": {$gte: 100000000}}, {founded_year: {$lt: 2010}}]} 
projection: {name: 1, "ipo.valuation_amount": 1, _id: 0}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->
query: {partners: {$exists: false}}


### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->
query: {category_code: {$type: "null"}}

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->
sort: {'ipo.valuation_amount': -1}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->
sort: {number_of_employees: -1}
limit: 10

### 9. Order all the companies by their IPO price in a descending order.

<!-- Your Code Goes Here -->
query: {founded_month: {$gte: 7}}
limit: 1000

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

<!-- Your Code Goes Here -->
query: {founded_day: {$lt: 8}}
sort: {acquisition_price_amount: -1}
limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->
query: {"acquisition.acquired_year": {$gte: 2010}}
projection: {name: 1, acquisition: 1, _id: 0}
sort: {"acquisition.price_amount": -1}

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

<!-- Your Code Goes Here -->
query: {'founded_year': { '$ne': null }}
projection: {name: 1, founded_year: 1, _id: 0}
sort: {founded_year: 1}

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code Goes Here -->
query: {$and: [{category_code: "web"}, {number_of_employees: {$gte: 4000}}]}
sort: {number_of_employees: 1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- Your Code Goes Here -->
query: {$and: [{"acquisition.price_amount": {$gte: 10000000}}, {"acquisition.price_currency_code": "EUR"}]}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

<!-- Your Code Goes Here -->
query:{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lt: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Code Goes Here -->

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
