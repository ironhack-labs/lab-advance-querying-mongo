![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.
<!-- Your Code Goes Here -->
query: {name: "Babelgum"}
project: {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
<!-- Your Code Goes Here -->
query: {number_of_employees: {$gt: 5000}}
limit: 20
sort: {number_of_employees: 1}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
<!-- Your Code Goes Here -->
query: {$and: [{founded_year:{$gte:2000}}, {founded_year:{$lte: 2005}}] }
project: {name: 1, founded_year: 1, _id: 0}


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
<!-- Your Code Goes Here -->
query: {$and:[{'ipo.valuation_amount':{$gte:10000000}},{founded_year:{$lt: 2010}}]}
project: {name: 1, ipo: 1, _id: 0}


### 5. All the companies that don't include the partners field.
<!-- Your Code Goes Here -->
query: {partners: {$size:0} }


### 6. All the companies that have a null type of value on the category_code field.
<!-- Your Code Goes Here -->
query: {category_code: {$type: "null"}}


### 7.Order all the companies by their IPO price in descending order.
<!-- Your Code Goes Here -->
Sort: {"ipo.valuation_amount": -1}


### 8.Retrieve the 10 companies with most employees, order by the number of employees.
<!-- Your Code Goes Here -->
Sort: {number_of_employees: -1}
Limit: 10

### 9. All the companies founded in the second semester of the year (July to December). Limit your search to 1000 companies.
<!-- Your Code Goes Here -->
query: {founded_month: {$gt: 6}}
limit: 1000


### 10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their acquisition price in descending order. Limit the search to 10 documents.
<!-- Your Code Goes Here -->
query: {founded_day: {$lt: 8}}
sort: {"acquisition.price_amount": -1}
limit: 10

### Bonus 

### 11. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their name and acquisition field.
<!-- Your Code Goes Here -->
query: {"acquisition.acquired_year": {$gt: 2010}}
project: {name: 1, acquisition: 1, _id:0}
sort: {"acquisition.price_amount": -1}

### 12. Order the companies by their founded year, retrieving only their name and founded year.
<!-- Your Code Goes Here -->
query: {'founded_year': {$ne: null}}
project: {name: 1, founded_year: 1, _id: 0}
sort: {founded_year: 1}

### 13. All the companies on the 'web' category that have more than 4000 employees. Sort them by the number of employees in ascending order.
<!-- Your Code Goes Here -->
query: {$and:[ {category_code: "web"}, {number_of_employees: {$gt: 4000}} ]}
sort: {number_of_employees: 1}

### 14. All the companies whose acquisition amount is more than 10,000,000 and the currency is 'EUR'.
<!-- Your Code Goes Here -->
query: {$and: [ {"acquisition.price_amount": {$gt:10000000}}, {"acquisition.price_currency_code":"EUR"} ] }

### 15. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
<!-- Your Code Goes Here -->
query: {$and: [ {founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$gt: 2010}} ]}

