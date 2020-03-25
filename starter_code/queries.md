![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

db.companiesDB.find({name: "Babelgum"}, {_id: 0, name: 1})

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companiesDB.find({number_of_employees: {$gt: 5000}}).limit(20).sort({number_of_employees: 1})

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

db.companiesDB.find({founded_year: {$gte: 2000, $lte: 2005}}, {_id: 0, name: 1, founded_year: 1})

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companiesDB.find({valuation_amount: {$gt: 100000000} , founded_year: {$lt: 2010}}, {_id: 0, name: 1, ipo: 1})

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companiesDB.find({number_of_employees: {$lt: 1000}, founded_year: {$lt: 2005}}).limit(10).sort({number_of_employees: 1})

### 6. All the companies that don't include the `partners` field.

db.companiesDB.find({partners : {$exists: false}})

### 7. All the companies that have a null type of value on the `category_code` field.

db.companiesDB.find({category_code : {$type: 10}})

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companiesDB.find({number_of_employees: {$gt: 100} , {$lt: 1000}}, {_id: 0, name: 1, number_of_employees: 1})

### 9. Order all the companies by their IPO price in a descending order.

db.companiesDB.find({}).sort({ipo: -1})

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

db.companiesDB.find({}).sort({number_of_employees: 1}).limit(10)

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companiesDB.find({founded_month: {$gte: 6}, {$lte: 12}}).limit(1000)

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

db.companiesDB.find({founded_year: {$lt: 2000}, acquisition_amount: {$gt: 10000000}})

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

db.companiesDB.find({acquired_year: {$gt: 2010}}, {_id: 0, name: 1, acquisition: 1}).sort({acquisition_amount: 1})

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companiesDB.find({}, {_id: 0, name: 1, founded_year: 1}).sort({founded_year: 1})

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

db.companiesDB.find({founded_day: {$gte: 1}, {$lte: 7}}).sort({acquisition_price: -1}).limit(10)

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

db.companiesDB.find({category_code: "web", number_of_employees: {$gt: 4000}}).sort({number_of_employees: 1})

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

db.companiesDB.find({currency: "EUR", acquisition_amount: {$gt: 10000000}})

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

db.companiesDB.find({acquired_month: {$gte: 1}, {$lte: 3}}, {_id: 0, name: 1, acquisition:1}).limit(10)

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

db.companiesDB.find({founded_year: {$gte: 2000} , {$lte: 2010}, acquired_year: {$lt: 2011}})
