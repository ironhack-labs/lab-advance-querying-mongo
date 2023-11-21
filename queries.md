![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

query: {name: 'Babelgum'}
projection: {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

query: {number_of_employees: { $gt: 5000 }}
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

query: {$and: [{founded_year: {$gte: 2000}}, {founded_year:{$lte: 2005}}]}
projection: {name: 1, _id: 0, founded_year: 1}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

query: {founded_year: {$lt:2010}, "ipo.valuation_amount": {$gt: 100000000}}
projection: {name: 1, _id: 0, ipo: 1}

### 5. All the companies that don't include the `partners` field.

query: {partners: {$exists: false}}

### 6. All the companies that have a null type of value on the `category_code` field.

query: {category_code: {$type: 'null'}}

### 7. Order all the companies by their IPO price in a descending order.

sort: {'ipo.valuation_amount': -1}

### 8. Retrieve the 10 companies with most employees, order by the `number of employees`

sort: {number_of_employees: -1}
limit: 10

### 9. All the companies founded in the second semester of the year (July to December). Limit your search to 1000 companies.

query: {founded_month: {$gte: 7}}
limit: 1000

### 10. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

query: {founded_day: {$lte: 7}}
sort: {'acquisition.price_amount': -1}
limit: 10

//// BONUS ////

### 1. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

query: {'acquisition.acquired_year': {$gt: 2010}}
projection: {name: 1, acquisition: 1, _id: 0}
sort: {'acquisition.price_amount': -1}

### 2. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

query: {'founded_year': { '$ne': null }}
projection: {name: 1, founded_year: 1, _id: 0}
sort: {founded_year: 1}

### 3. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

query: {$and: [{category_code: 'web'}, {number_of_employees: {$gt: 4000}}]}
sort: {number_of_employees: 1}

### 4. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

query: {$and: [{'acquisition.price_currency_code': 'EUR'}, {'acquisition.price_amount': {$gt: 10000000}}]}

### 5. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

query: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {'acquisition.acquired_year':{$gt:2011}}]}