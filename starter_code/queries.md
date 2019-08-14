![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

 db.companies.find({name:'Babelgum'},{name:1,_id:0})

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companies.find({"number_of_employees":{$gt:500}},{"number_of_employees":1}).limit(20).pretty()

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

db.companies.find({$and:[ {"founded_year":{$gte:2000}},{"founded_year":{$lte:2005}}]},{"name":1, "founded_year":1, _id:0})

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

db.companies.find({$and:[{"number_of_employees":{$lte:1000}},{"founded_year":{$lte: 2005}}]},{"name":1, _id:0, "founded_year":1,"number_of_employees":1}).limit(10)

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({$and:[{"number_of_employees":{$lte:1000}},{"founded_year":{$lte: 2005}}]},{_id:0, "name":1, "founded_year":1,"number_of_employees":1}).limit(10)

### 6. All the companies that don't include the `partners` field.

db.companies.find({partners:{$exists:false}})

### 7. All the companies that have a null type of value on the `category_code` field.

db.companies.find({"category_code":null},{"name":1,"category_code":1})


### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find({$and:[{"number_of_employees":{$gte:100}}, {"number_of_employees":{$lt:1000}}]},{"name":1,"number_of_employees":1})

### 9. Order all the companies by their IPO price descendently.

db.companies.find({},{'ipo.valuation_amount': -1})

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

db.companies.find({},{"number_of_employees":1}).sort({"number_of_employees":-1}).limit(10)


### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({"founded_month" :{$gte:5}},{"name":1,"founded_month":1}).limit(1000)


### 12. All the companies that have been 'deadpooled' after the third year.

db.companies.find({"deadpooled_year":3},{"deadpooled_year":1, "name":1})

db.companies.find({$where: function(){ return (this.deadpooled_year >= this.founded_year + 3) && (this.founded_year != null) } },{"name":1} )

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

db.companies.find({$and:[{"founded_year": {$lte: 2000}}, {"acquisitions.price_amount":{$gte: 10000000}}]},{"name":1})


### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

db.companies.find({"acquisition.acquired_year":{$gte:2005}}, {"name":1, "acquisition.acquired_year":1,"acquisition.price_amount":1}).sort({"acquisition.price_amount":-1})


### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find({"founded_year":{$ne:null}}, {"name":1, "founded_year":1}).sort({"founded_year":-1})


### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

db.companies.find({"founded_day":{$lte:7}},{"name":1,"founded_day":1}).sort({"acquisition.price_amount":-1}).limit(10)


### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

db.companies.find({$and:[{"category_code":"web"}, {"number_of_employees":{$gte:4000}}]},{"name":1,"number_of_employees":1}).sort({"number_of_employees":1})


### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

db.companies.find({$and:[{"acquisition.price_amount":{$gte:10000000}}, {"acquisition.price_currency_code":"EUR"}]}, {"name":1, "acquisition.price_amount":1, "acquisition.price_currency_code":1})

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

db.companies.find({"acquisition.acquired_month":{$lte:3}},{"name":1, "acquisition":1}).limit(10)


### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

db.companies.find({$and:[{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2010}}, {'acquisition.acquired_year':{$gt:2011}}]})
