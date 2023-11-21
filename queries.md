![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

{name: "Babelgum"}
{name:1, _id:0}


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

{number_of_employees: {$gte: 5000}}
Limit: 20
sort: {number_of_employees: 1}

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

{$and: [{founded_year: {$gte: 2000}},{founded_year: {$lte:2005}}]}
{name:1, founded_year: 1, _id:0}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

{$and: [{"ipo.valuation_amount": {$gte:100000000}}, {founded_year: {$lte:2010}}]}
{name:1, ipo:1, _id:0}


### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

{$and: [{number_of_employees: {$lte: 1000}, founded_year: {$lte: 2005}}]}
sort: {number_of_employees: 1}
Limit: 10

### 6. All the companies that don't include the `partners` field.

{partners: {$exists: false}}

### 7. All the companies that have a null type of value on the `category_code` field.

{category_code: {$type: null}}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

{$and: [{number_of_employees: {$gte: 100}}, {number_of_employees: {$lte: 1000}}]}
{name:1, number_of_employees:1, _id:0}

### 9. Order all the companies by their IPO price in a descending order.

sort: {"ipo.valuation_amount": -1}

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

{number_of_employees: -1}
Limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

{founded_month: {$gte: 7}}
Limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

{$and: [{founded_year: {$gte: 2000}}, {aquisition.amount: {$gte: 10000000}}]}

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

{aqcuisition.acquired_year: {$gte: 2000}}
{name: 1, acquisition:1, _id:0}
sort: {"acquisition.price_amount": 1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

{name:1, founded:year:1, _id:o}
sort: {founded_year: 1}

### 15. All the companies on the 'web' category that have more than 4000 employees. Sort them by the number of employees in ascending order.

{$and: [{category_code: 'web'}, {number_of_employees: {$gt: 4000}}]}
sort: {number_of_employees:1}

### 16. All the companies whose acquisition amount is more than 10,000,000 and the currency is 'EUR'.

{$and: [{'acquisition.price_currency_code': 'EUR'}, {'acquisition.price_amount': {$gt: 10000000}}]}

### 18. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

{$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {'acquisition.acquired_year':{$gt:2011}}]}
