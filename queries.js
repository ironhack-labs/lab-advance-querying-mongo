// 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

Query: {name: 'Babelgum'}
Projection: {name: 1, _id: 0}

// 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

Filter: {number_of_employees: {$gt: 5000}}
Project: {number_of_employees: 1}
Sort: {number_of_employees: 1}
LIMIT: 20

// 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

Filter: {founded_year: {$gte: 2000, $lte: 2005}}
Project: {name: 1, founded_year:1}

// 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

Filter: 
Project: 
Sort: 

// 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

Filter: {$and: [ {number_of_employees: {$lt: 1000}}, {founded_year: {$lte: 2005}} ]}
Project: 
Sort: {number_of_employees: 1}
LIMIT: 10

// 6. All the companies that don't include the `partners` field.

Filter: { partners: {$exists:false}}
Project: 
Sort: 

// 7. All the companies that have a null type of value on the `category_code` field.

Filter: {category_code: 'null'}


// 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

Filter: {number_of_employees: {$gte: 100, $lte: 1000}}
Project: {name: 1, number_of_employees: 1}
Sort: 

// 9. Order all the companies by their IPO price in descending order.

Sort: {ipo: -1}

// 10. Retrieve the ten companies with more employees, order by the `number of employees`

Filter: 
Project: 
Sort: {number_of_employees: -1}
LIMIT: 10

// 11. All the companies founded in the second semester of the year. Limit your search to 1000 companies.

Filter: {founded_month: {$gte: 6}}
Project: 
Sort: 
LIMIT: 1000

// 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000

Filter: $and [{"acquisition.price_amount": {$gte: 2010}}, {founded_year: {$lte: 2000}}]
Project: 
Sort: 

// 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.

Filter: {"acquisition.acquired_year": {$gte: 2010}}
Project: {name: 1, acquisition: 1}
Sort: {"acquisition.price_amount": 1}

// 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

Filter: 
Project: {name: 1, founded_year:1}
Sort: {founded_year: 1}

// 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in descending order. Limit the search to 10 documents.

Filter: {founded_day: {$lte: 7}}
Project: 
Sort: {"acquisition.price_amount": -1}
LIMIT: 10

// 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the number of employees in ascending order.

Filter: 
Project: 
Sort: 

// 17. All the companies whose acquisition amount is more than 10.000.000 and the currency is 'EUR'.

Filter: 
Project: 
Sort: 

// 18. All the companies that have been acquired in the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.

Filter: 
Project: 
Sort: 

// 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.

Filter: 
Project: 
Sort: 