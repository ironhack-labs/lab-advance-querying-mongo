![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

Filter: {name: "Babelgum"}
Project: {name: 1, _id: 0}

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- using querying (mongosh) -->

db.companies.find({number_of_employees: {$gt: 5000}}).limit(20).sort({number_of_employees: 1})

<!-- using compass tool -->

Filter: {number_of_employees: {$gt: 5000}}
Sort: {number_of_employees: 1}
Limit: 20

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

Filter: { $and: [{founded_year:{ $gte: 2000} }, {founded_year:{ $lte: 2005} }]}
Project: {name: 1, _id: 0, founded_year: 1} 

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- using querying (mongosh) -->

db.companies.find({ $and: [ {'ipo.valuation_amount': { $gt: 100000000}}, {founded_year: { $lt: 2010}} ] }, {name: 1, ipo: 1, \_id: 0})

<!-- using compass tool -->

Filter: { $and: [ {'ipo.valuation_amount': { $gt: 100000000}}, {founded_year: { $lt: 2010}} ] }
Project: {name: 1, ipo: 1, \_id: 0}

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

Filter: { $and: [{founded_year:{ $lt: 2005} }, {number_of_employees:{ $lt: 1000} }]} 
Project: {name: 1, _id: 0, founded_year: 1, number_of_employees: 1}
Sort: {number_of_employees: 1}
Limit: 10

### 6. All the companies that don't include the `partners` field.

<!-- using querying (mongosh) -->

db.companies.find({$and:[{partners:{$type: "array"}}, {partners:{$exists: false}}]})

<!-- using compass tool -->

Filter: { $and: [ { partners: {$type: 'array'}}, {partners: {$exists: false}} ]}

### 7. All the companies that have a null type of value on the `category_code` field.

Filter: {category_code: null}
Project: {name: 1, _id: 0}

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- using querying (mongosh) -->

db.companies.find({number_of_employees: {$gte: 100, $lt: 1000}}, {name: 1, number_of_employees: 1, \_id: 0})

<!-- using compass tool -->

Filter: {number_of_employees: {$gte: 100, $lt: 1000}}
Project: {name: 1, number_of_employees: 1, \_id: 0}

### 9. Order all the companies by their IPO price in a descending order.

<!-- confused as to how to find this variable? any ideas? -->

### 10. Retrieve the 10 companies with most employees, order by the `number of employees`

<!-- using querying (mongosh) -->
<!-- sort() doesn't work without find() -->

db.companies.find({number_of_employees: { $exists: 'true'}}).sort({number_of_employees: -1}).limit(10)

<!-- using compass tool -->
<!-- do we need the filter, it works in compass tool without -->

Filter: {number_of_employees: { $exists: 'true'}}
Sort: {number_of_employees: -1}
Limit: 10

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- I wasn't sure what second semester means so I did months July through December -->

Filter: {founded_month: {$gte: 7}}
Project: {name: 1, _id: 0, founded_month: 1} <!-- not needed but didn't want to see so much data, just the name of company -->
Limit: 1000

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

<!-- using querying (mongosh) -->

<!-- using compass tool -->

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code Goes Here -->

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- using querying (mongosh) -->

<!-- using compass tool -->

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

<!-- Your Code Goes Here -->

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- using querying (mongosh) -->

<!-- using compass tool -->

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- using querying (mongosh) -->

<!-- using compass tool -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
