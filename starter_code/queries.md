![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

filter: { name: "Babelgum" }
projection: { name: 1, _id:0 }
sort:
limit:
skip:


### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

filter: { number_of_employees: { $gt: 500 } }
projection: 
sort: { number_of_employees: -1 }
limit: 20
skip:


### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

filter:  { founded_year: { $in: [2000, 2005] } }
projection: { name: 1, _id:0, founded_year: 1 }
sort:
limit:
skip:


### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

filter:  {$and: [{ "ipo.valuation_amount": { $gte: 100000000 }},{ founded_year: { $lt: 2010 }}] }
projection: {_id: 0, name: 1, ipo:1}
sort:
limit:
skip:


### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

filter: {$and: [{ founded_year: { $lt: 2005 }},{ number_of_employees: { $lt: 1000 }}] }
projection: 
sort: { number_of_employees: -1 }
limit: 10
skip:

### 6. All the companies that don't include the `partners` field.

filter: { field: { $exists: false } } 
projection: 
sort: 
limit: 
skip:


### 7. All the companies that have a null type of value on the `category_code` field.

filter: { category_code: { $eq: null } }
projection: 
sort: 
limit: 
skip:

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

filter: { $and: [ { number_of_employees : { $lt: 1000 } }, { number_of_employees : { $gte: 100 } } ] }
projection: { name: 1, _id: 0, number_of_employees: 1 }
sort: { ipo.valuation_amount: -1 }
limit: 
skip:

### 9. Order all the companies by their IPO price in a descending order.

filter: 
projection: 
sort: { "ipo.valuation_amount": -1 }
limit: 
skip:

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`


filter: 
projection: { name: 1, _id: 0, number_of_employees: 1 }
sort: { number_of_employees: -1 }
limit: 10
skip:

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

filter: { founded_month: { $gt: 9 }}
projection: 
sort: 
limit: 1000
skip:

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

filter: {$and: [{ founded_year: { $lte: 2000 } }, { "acquisition.price_amount": { $gt: 10000000 } } ] }
{ $and: [ { founded_year: { $lte: 2000 } }, { "acquisition.price_amount": { $gt: 10000000 } } ] }
projection: 
sort: 
limit: 
skip:

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

filter: { "acquisition.acquired_year": { $gt: 2010 } }
projection: { name: 1, _id: 0, acquisition: 1 }
sort: { "acquisition.price_amount": -1}
limit: 
skip:

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

filter: 
projection: { name: 1, _id: 0, founded_year: 1 }
sort: { founded_year: -1 }
limit: 
skip:

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

filter: 
projection: 
sort: 
limit: 
skip:

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

filter: 
projection: 
sort: 
limit: 
skip:

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

filter: 
projection: 
sort: 
limit: 
skip:

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

filter: 
projection: 
sort: 
limit: 
skip:

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

filter: 
projection: 
sort: 
limit: 
skip: