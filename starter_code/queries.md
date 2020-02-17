![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

Mongo Shell:

db.companies.find({name: "Babelgum"}, {name: 1, _id: 0})

MongoDB Compass:

filter: {name: "Babelgum"}
project: {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

Mongo Shell:

db.companies.find({number_of_employees: {$gt: 5000}}).limit(20).sort({number_of_employees: 1}).pretty()

MongoDB Compass:

filter: {number_of_employees: {$gt: 5000}}
sort: {number_of_employees: 1}
limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

Mongo Shell:

db.companies.find({$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}, {name: 1, founded_year: 1, _id: 0})

MongoDB Compass:

filter: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]}
project: {name: 1, founded_year: 1, _id: 0}

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

Mongo Shell:

db.companies.find({$and: [{"ipo.valuation_amount": {$gt: 100000000}}, {founded_year: {$lt: 2010}}]}, {name: 1, "ipo.valuation_amount": 1, _id: 0}).pretty()

MongoDB Compass:

filter: {$and: [{"ipo.valuation_amount": {$gt: 100000000}}, {founded_year: {$lt: 2010}}]}
project: {name: 1, "ipo.valuation_amount": 1, _id: 0}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

Mongo Shell:

db.companies.find({$and: [{number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}}]}).pretty().sort({number_of_employees: 1}).limit(10)

MongoDB Compass:

filter: {$and: [{number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}}]}
sort: {number_of_employees: 1}
limit: 10

### 6. All the companies that don't include the `partners` field.

Mongo Shell:

db.companies.find({partners: {$exists: false}}).pretty()

MongoDB Compass:

filter: {partners: {$exists: false}}

### 7. All the companies that have a null type of value on the `category_code` field.

Mongo Shell:

db.companies.find({category_code: null}).pretty()

MongoDB Compass:

filter: {category_code: null}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

Mongo Shell:

db.companies.find({$and: [{number_of_employees: {$gt: 100}}, {number_of_employees: {$lt: 1000}}]}, {name: 1, number_of_employees: 1, _id: 0}).pretty()

MongoDB Compass:

filter: {$and: [{number_of_employees: {$gt: 100}}, {number_of_employees: {$lt: 1000}}]}
project: {name: 1, number_of_employees: 1, _id: 0}

### 9. Order all the companies by their IPO price in a descending order.

Mongo Shell:

db.companies.createIndex({"ipo.valuation_amount": -1})
db.companies.find().sort({"ipo.valuation_amount": -1})

MongoDB Compass:

sort: {"ipo.valuation_amount": -1}

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

Mongo Shell:

db.companies.find().pretty().limit(10).sort({number_of_employees: -1})

MongoDB Compass:

sort: {number_of_employees: -1}
limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

Mongo Shell:

db.companies.find({founded_month: {$gt: 6}}).pretty().limit(1000)

MongoDB Compass:

filter: {founded_month: {$gt: 6}}
limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

Mongo Shell:

db.companies.find({$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000}}]}).pretty()

MongoDB Compass:

filter: {$and: [{founded_year: {$lt: 2000}}, {"acquisition.price_amount": {$gt: 10000000}}]}

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

Mongo Shell:

db.companies.find({"acquisition.acquired_year": {$gt: 2010}}, {_id: 0, name: 1, acquisition: 1}).pretty().sort({"acquisition.price_amount": 1})

MongoDB Compass:

filter: {"acquisition.acquired_year": {$gt: 2010}}
project: {_id: 0, name: 1, acquisition: 1}
sort: {"acquisition.price_amount": 1}

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

Mongo Shell:

db.companies.createIndex({founded_year: 1})
db.companies.find({}, {_id: 0, name: 1, founded_year: 1}).pretty().sort({founded_year: 1})

MongoDB Compass:

project: {_id: 0, name: 1, founded_year: 1}
sort: {founded_year: 1}

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

Mongo Shell:

db.companies.find({founded_day: {$lt: 8}}).sort({"acquisition.price_amount": -1}).limit(10)

MongoDB Compass:

filter: {founded_day: {$lt: 8}}
sort: {"acquisition.price_amount": -1}
limit: 10

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

Mongo Shell:

db.companies.find({$and: [{category_code: "web"}, {number_of_employees: {$gt: 4000}}]}).sort({number_of_employees: 1})

MongoDB Compass:

filter: {$and: [{category_code: "web"}, {number_of_employees: {$gt: 4000}}]}
sort: {number_of_employees: 1}

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

Mongo Shell:

db.companies.find({$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"}]})

MongoDB Compass:

filter: {$and: [{"acquisition.price_amount": {$gt: 10000000}}, {"acquisition.price_currency_code": "EUR"}]}

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

Mongo Shell:

db.companies.find({"acquisition.acquired_month": {$lt: 4}}, {_id: 0, name: 1, acquisition: 1}).limit(10).pretty()

MongoDB Compass:

filter: {"acquisition.acquired_month": {$lt: 4}}
project: {_id: 0, name: 1, acquisition: 1}
limit: 10

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

Mongo Shell:

db.companies.find({$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}).pretty()

MongoDB Compass:

filter: {$and: [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {"acquisition.acquired_year": {$gte: 2011}}]}
