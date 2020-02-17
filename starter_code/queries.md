![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->

db.companies.find( { name: "Babelgum" }, { name: 1, _id: 0 } ).pretty( )

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->

db.companies.find( { number_of_employees: { $gt: 5000 } }, { name: 1, _id: 0 } ).limit( 20 ).sort( { number_of_employees: -1 } ).pretty( )

(Ordered in decreasing numbers of employees, if I want to order in increasing I must put  “.sort( { number_of_employees: 1} )”.)

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

<!-- Your Code Goes Here -->

db.companies.find( { founded_year: { $gte: 2000,  $lte: 2005} }, {name: 1, _id: 0, founded_year: 1 } ).pretty( )

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->

db.companies.find( { founded_year: { $lt: 2010 },  'ipo.valuation_amount': { $lt: 100000000 } }, { name: 1, _id: 0, ipo: 1 } ).pretty( )

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->

db.companies.find( { number_of_employees: { $lt: 1000 }, founded_year: { $lt: 2005 } }, { name: 1, _id: 0} ).limit( 10 ).sort( { number_of_employees: -1} ).pretty( )

### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->

db.companies.find( {partners: [ ] }, { name: 1, _id: 0, partners: 1 } ).pretty( )

### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->

db.companies.find( { category_code: null}, { name: 1, _id: 0, category_code: 1 } ).pretty( )

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->

db.companies.find( { number_of_employees: { $gt: 100, $lt: 1000 } }, { name: 1, _id: 0, number_of_employees: 1} ).pretty( )

### 9. Order all the companies by their IPO price in a descending order.

<!-- Your Code Goes Here -->

db.companies.find( {}, { name: 1, _id: 0, 'ipo.valuation_amount': 1} ).sort( { 'ipo.valuation_amount': -1 }).limit( 50 ).pretty( )

I had to put a limit method to take a result. Because if I hadn't do it, it needs a lot of RAM. 

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->

db.companies.find( {}, { name: 1, _id:0, number_of_employees: 1} ).limit( 10 ).sort( { number_of_employees: -1 } ).pretty( )

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->

db.companies.find( { founded_month: { $gte: 6, $lte: 12 } }, { name: 1, _id: 0, founded_month: 1} ).sort( { founded_month: 1} ).limit( 1000 ).pretty( )

I sorted in increasing order to show it better. 

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

<!-- Your Code Goes Here -->

db.companies.find( { founded_year: { $lt: 2000 }, 'acquisition.price_amount': { $gt: 10000000 } }, { name: 1, _id: 0, founded_year: 1, 'acquisition.price_amount': 1 } ).sort( { 'acquisition.price_amount': 1 } ).pretty( )

I sorted in increasing order to show it better

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

<!-- Your Code Goes Here -->

db.companies.find( { 'acquisition.acquired_year': { $gt: 2010 } }, { name: 1, _id: 0, acquisition: 1 } ).sort( { 'acquisition.price_amount': -1 } ).pretty( )

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

<!-- Your Code Goes Here -->

db.companies.find( {}, { name: 1, _id: 0, founded_year: 1 } ).sort( { founded_year: -1 }).limit( 100 ).pretty( )

I had to put a limit method to take a result. Because if I hadn't do it, it needs a lot of RAM. 

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.

<!-- Your Code Goes Here -->

db.companies.find( { founded_day: { $gte: 1, $lte: 7 } }, { name: 1, _id: 0, founded_day: 1, 'acquisition.price_amount': 1 } ).sort( { 'acquisition.price_amount': -1 } ).limit( 10 ).pretty( )

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.

<!-- Your Code Goes Here -->

db.companies.find( { category_code: "web", number_of_employees: { $gt:4000} }, { name: 1, _id: 0, category_code: 1, number_of_employees: 1 } ).sort( { number_of_employees: 1 } ).pretty()

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->

db.companies.find( { 'acquisition.price_amount': {$gt: 10000000 }, 'acquisition.price_currency_code': 'EUR' }, { name: 1, _id: 0, 'acquisition.price_amount': 1, 'acquisition.price_amount': 1 } ).pretty()

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

<!-- Your Code Goes Here -->

db.companies.find( { 'acquisition.acquired_month': { $gte: 1, $lte: 3 } }, { name: 1, _id: 0, 'acquisition.acquired_month': 1, acquisition: 1 } ).limit( 10 ).pretty( )

I put the acquisition.acquired_month to show too for see if it's correct. 

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

<!-- Your Code Goes Here -->

db.companies.find( { founded_year: { $lte: 2010, $gte: 2000}, 'acquisition.acquired_year': { $gte: 2011 } }, { name: 1, _id: 0, founded_year: 1, 'acquisition.acquired_year': 1 } ).pretty( )