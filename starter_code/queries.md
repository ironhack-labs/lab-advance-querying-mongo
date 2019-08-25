![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->
FILTER:{ name: { $eq: 'Babelgum' } }
PROJECT:{ name: 1, _id: 0 }

db.companies.find( { name: { $eq: 'Babelgum' }} , { name: 1, _id: 0 } )

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->
FILTER:{ number_of_employees: { $gt: 5000 } }
SORT:{ number_of_employees: 1 }
LIMIT:20

db.companies.find( { number_of_employees: { $gt: 5000 } } ).limit( 20 ).sort( { number_of_employees: 1 } )

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

<!-- Your Code Goes Here -->
FILTER:{ founded_year: { $in: [2000, 2001, 2002, 2003, 2004, 2005] } }
PROJECT:{ name: 1, founded_year: 1, _id: 0 }

db.companies.find( {founded_year: { $in:[ 2000, 2001, 2002, 2003, 2004, 2005 ] } },{ name: 1, founded_year: 1, _id: 0 } )

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { "ipo.valuation_amount": { $gt: 100000000 } }, { founded_year: { $lt: 2010 } } ] }
PROJECT:{ name: 1, ipo: 1, _id:0 }

db.companies.find({ $and: [ { "ipo.valuation_amount": { $gt: 100000000 } }, { founded_year: { $lt: 2010 } } ] }, { name: 1, ipo: 1, _id:0 } )

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { number_of_employees: { $lt: 1000 } }, { founded_year: { $lt: 2005 } } ] }
SORT:{ number_of_employees: 1 }
LIMIT:10

db.companies.find({ $and: [ { number_of_employees: { $lt: 1000 } }, { founded_year: { $lt: 2005 } } ] } ).sort( { number_of_employees: 1 } ).limit( 10 )

### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->
FILTER:{ partners: { $exists: false } }

db.companies.find( { partners: { $exists: false } } ).pretty()

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->
FILTER:{ category_code: { $type: "null" } }

db.companies.find( { category_code: { $type: "null" } } ).pretty()

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { number_of_employees: { $gte: 100 } }, { number_of_employees: { $lt: 1000 } } ] }
PROJECT:{ name: 1, number_of_employees: 1, _id: 0 }

db.companies.find( { $and: [ { number_of_employees: { $gte: 100 } }, { number_of_employees: { $lt: 1000 } } ] }, { name: 1, number_of_employees: 1, _id: 0 } )

### 9. Order all the companies by their IPO price descendently.

<!-- Your Code Goes Here -->
SORT:{ ipo: -1 }

db.companies.find().sort( { ipo: -1 } )

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->
SORT:{ number_of_employees: -1 }
LIMIT:10

db.companies.find().sort( { number_of_employees: -1 } ).limit( 10 )

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->
FILTER:{ founded_month: { $gte: 7 } }
LIMIT:1000

db.companies.find( { founded_month: { $gte: 7 } } ).limit( 1000 )

### 12. All the companies that have been 'deadpooled' after the third year.

<!-- Your Code Goes Here -->
FILTER:{ deadpooled_year: { $gt: 3 } }

db.companies.find( { deadpooled_year: { $gt: 3 } } ).pretty()

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { founded_year: { $lt: 2000 } }, { "acquisition.price_amount": { $gt: 10000000 } } ] }

db.companies.find({ $and: [ { founded_year: { $lt: 2000 } }, { "acquisition.price_amount": { $gt: 10000000 } } ] }).pretty()

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.

<!-- Your Code Goes Here -->
FILTER:{ "acquisition.acquired_year":  { $gt: 2015 } }
PROJECT:{ name: 1, acquisition: 1, _id: 0 }
SORT:{ "acquisition.price_amount": 1 }

db.companies.find( { "acquisition.acquired_year":  { $gt: 2015 } }, { name: 1, acquisition: 1, _id: 0 } ).sort( { "acquisition.price_amount": 1 } )

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
<!-- Your Code Goes Here -->
PROJECT:{ name: 1, founded_year: 1, _id: 0 }
SORT:{ founded_year: 1 }

db.companies.find({ }, { name: 1, founded_year: 1, _id: 0 } ).sort( { founded_year: 1 } )

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.

<!-- Your Code Goes Here -->
FILTER:{ founded_day: { $lte: 7 } }
SORT:{ "acquisition.price_amount": -1 }
LIMIT:10

db.companies.find( { founded_day: { $lte: 7 } } ).sort( { "acquisition.price_amount": -1 } ).limit( 10 )

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { number_of_employees: { $gt: 4000 } }, { category_code: { $eq: "web" } } ] }
SORT:{number_of_employees: 1}

db.companies.find( { $and: [ { number_of_employees: { $gt: 4000 } }, { category_code: { $eq: "web" } } ] } ).sort( { number_of_employees: 1 } )

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { "acquisition.price_amount": { $gt: 10000000 } }, { "acquisition.price_currency_code": { $eq: "EUR" } } ] }

db.companies.find( { $and: [ { "acquisition.price_amount": { $gt: 10000000 } }, { "acquisition.price_currency_code": { $eq: "EUR" } } ] } ).pretty()

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->
FILTER:{ "acquisition.acquired_month": { $lte: 6 } }
SORT: {name: 1, acquisition: 1, _id: 0 }
LIMIT:10

db.companies.find({ "acquisition.acquired_month": { $lte: 6 } } ).sort( {name: 1, acquisition: 1, _id: 0 } ).limit( 10 )

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->
FILTER:{ $and: [ { founded_year: { $gte: 2000} }, { founded_year: { $lte: 2010 } }, { "acquisitions.acquired_year": { $gt: 2011 } } ] }

db.companies.find( { $and: [ { founded_year: { $gte: 2000} }, { founded_year: { $lte: 2010 } }, { "acquisitions.acquired_year": { $gt: 2011 } } ] } ).pretty()