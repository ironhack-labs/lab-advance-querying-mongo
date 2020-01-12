![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->

`db.companies.find({name: "Babelgum"})`

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->

`db.companies.find({number_of_employees: { $gt: 5000}}).limit(20).sort({number_of_employees: 1})`

### to check if it's sorted, we limit search to only employees number

`db.companies.find({number_of_employees: { $gt: 5000}}, {number_of_employees: 1, _id:0}).limit(20).sort({number_of_employees: 1})`

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [ {founded_year: {$gt:2000}},{founded_year: { $lt: 2005}}]}, {name: 1,founded_year: 1, _id: 0})`

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{"ipo.valuation_amount": { $gt: NumberLong("100000000")}}, {founded_year: { $lt: 2010}}]}, {name: 1,ipo: 1, _id: 0})`

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{number_of_employees: { $lt: 1000}}, {founded_year: { $lt: 2005}}]}, {number_of_employees: 1, founded_year: 1, _id: 0 }).sort({number_of_employees: -1}).limit(10)`

### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->

`db.companies.find({},{ $ne: "partners", partners: 1 })`
`db.companies.find({},{ $nin: ["partners"], partners: 1 })`

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->

`db.companies.find({category_code: null})`

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [ {number_of_employees: { $gte: 100}},{number_of_employees: { $lt: 1000}}]}, {name: 1, number_of_employees: 1})`

### 9. Order all the companies by their IPO price in a descending order.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{"ipo.valuation_amount": { $gt: NumberLong("100000000")}}, {founded_year: { $lt: 2010}}]}, {name: 1,ipo: 1, _id: 0}).sort({"ipo.valuation_amount": 1})`

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->

`db.companies.find({},{number_of_employees: 1, _id:0}).sort({number_of_employees: -1}).limit(10)`

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->

founded_month

`db.companies.find({founded_month: { $gt: 6}}, { founded_month: 1, _id:0 }).limit(1000)`

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

<!-- Your Code Goes Here -->

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

<!-- Your Code Goes Here -->

`db.companies.find({"acquisition.price_amount": { $gt: 10000000}},{"acquisition.price_amount": 1, _id: 0})`

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{"acquisition.price_amount": { $gt: 10000000}}, { "acquisition.acquired_year": { $gt: 2010}}]},{ name: 1,"acquisition": 1, _id: 0})`

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- Your Code Goes Here -->

1.  Create index because it's big file and cannot sort()
    `companies> db.companies.createIndex({founded_year: 1})`
2.  And then we can sort()
    `db.companies.find({founded_year: { $ne: null}}, {name: 1, founded_year: 1, _id:0}).sort({founded_year: -1})`

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

<!-- Your Code Goes Here -->

`db.companies.find({founded_day: { $lte: 7}}, { name: 1, founded_day: 1, _id: 0}).sort({acquisition_price: -1}).limit(10)`

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{category_code: "web"},{number_of_employees: { $gt: 4000}}]}, {name: 1, number_of_employees: 1}).sort({number_of_employees: 1})`

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{"acquisition.price_amount": { $gt: 10000000}},{"acquisition.price_currency_code": { $eq: "EUR"}}]}, {name: 1, acquisition: 1,_id:0 })`

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

`db.companies.find({"acquisition.acquired_month": { $lte: 3}}, {name: 1, acquisition: 1,_id:0 })`

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->

`db.companies.find({ $and: [{founded_year: { $gt: 2000}},{founded_year: { $lt: 2010}},{"acquisition.acquired_year": { $gt: 2011}}]}, {name: 1,founded_year: 1, acquisition: 1,_id:0 })`
