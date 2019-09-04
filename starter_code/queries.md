![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.
db.companies.find({name: 'Babelgum'}).pretty()

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
db.companies.find({number_of_employees:{$gt:500}}).limit(20).sort({number_of_employees: 1}).pretty()

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
db.companies.find({$and: [{founded_year: {$gte: 2000}}, {founded_year:{$lte: 2005}}]}).pretty()

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companies.find(({"acquisition.price_amount":{$gt: 100000000}, founded_year:{$lt:2010}}, {name:1, ipo:1}).pretty()

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({$and: [{number_of_employees: {$lt: 1000}}, {founded_year:{$lt: 2005}}]}).limit(10).sort({number_of_employees: 1}).pretty()

### 6. All the companies that don't include the `partners` field.

*db.companies.find({partners: {$exists: false}}).pretty()

### 7. All the companies that have a null type of value on the `category_code` field.

db.companies.find({category_code: null})

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find({number_of_employees: {$gt:100, $lt:1000}}, {name:1, number_of_employees:1}).pretty()

### 9. Order all the companies by their IPO price descendently.

db.companies.find({'milestones.ipo': 1}).sort({'milestones.ipo': -1})

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

db.companies.find({}, {number_of_employees:1}).sort({number_of_employees:-1}).limit(10).pretty()

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({founded_month: {$gte: 6}}).limit(1000)

### 12. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

db.companies.find({$and: [{founded_year: {$lt: 2000}}, {'acquisition.price_amount': {$gt: 10000000}}]})

### 13. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

db.companies.find({}, {founded_year:1, name.1}).pretty()

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find({}, {name:}).pretty()

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` descendently. Limit the search to 10 documents.

db.companies.find({founded_day: {$lt: 8}}).sort({number_of_employees: 1}).pretty()

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

db.companies.find({number_of_employees:{$gt:4000}, category_code: "web"}).sort( { number_of_employees: 1}).pretty()

### 17. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

db.companies.find({"acquisition.price_amount": {$gt:10000000}} && {"acquisition.price_currency_code": "EUR"}).pretty()

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

db.companies.find({"acquisition.acquired_month": {$gt:0, $lt:4}}, {name:1, acquisition:1})

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

db.companies.find({founded_year:{$gt:2000, $lt:2010}, "acquisition.acquired_year": {$lt:2011}}).pretty()